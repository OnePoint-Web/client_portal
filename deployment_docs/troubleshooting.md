# Troubleshooting

## Docker container cannot be removed (`device or resource busy`)

### Symptoms

Attempting to remove a Docker container fails.

Example commands:

```bash
docker rm <container>
```

or

```bash
docker compose down
```

Error:

```text
driver "overlay2" failed to remove root filesystem:
unlinkat .../merged: device or resource busy
```

Example output:

```text
driver "overlay2" failed to remove root filesystem:
unlinkat /var/lib/docker/overlay2/<overlay-id>/merged:
device or resource busy
```

---

### Cause

On this cPanel server, **VirtFS (Jailed Shell)** can mount Docker's OverlayFS inside a jailed user's filesystem.

Example:

```text
/home/virtfs/ironbornreg/var/lib/docker/overlay2/<overlay-id>/merged
```

Although the Docker container has stopped, the OverlayFS mount remains active inside VirtFS. As a result, Docker cannot remove the container because the filesystem is still in use.

This issue originates from the cPanel jailed-shell environment rather than Docker itself.

---

### Diagnosis

If `docker rm` reports `device or resource busy`, locate the corresponding overlay mount:

```bash
mount | grep overlay2
```

or, if you know the overlay ID:

```bash
mount | grep <overlay-id>
```

Example:

```text
overlay on /home/virtfs/ironbornreg/var/lib/docker/overlay2/<overlay-id>/merged
type overlay (...)
```

---

### Resolution

Unmount the VirtFS overlay:

```bash
sudo umount /home/virtfs/<cpanel-user>/var/lib/docker/overlay2/<overlay-id>/merged
```

Then remove the container normally:

```bash
docker rm <container>
```

---

### Notes

- The affected cPanel user may not be the user performing the deployment.
- The mount originates from VirtFS, not Docker.
- This issue has occurred with both the Proposal Portal container and the MariaDB container.
- If this issue occurs again, inspect VirtFS mounts before attempting further Docker cleanup.

---

## Site works, then serves stale data after any create/delete

### Symptoms

- A proposal, package, or user is created (or deleted) successfully — confirmed present/absent directly in the database.
- The list page for that entity still shows the old state.
- A hard refresh or an Incognito/Private window shows the correct, current data.
- `curl` directly against the API returns the correct data too.

---

### Cause

A **server-wide** Apache include on the cPanel box injects a long-lived `Cache-Control` header onto every response proxied through Apache, including dynamic JSON API responses that should never be cached:

```text
/etc/apache2/conf.d/includes/pre_virtualhost_2.conf

<IfModule mod_expires.c>
ExpiresActive On
...
ExpiresDefault "access 1 month"
</IfModule>
```

This file is managed via **WHM → Apache Configuration → Include Editor → Pre VirtualHost → All Versions** and is merged into *every* vhost on the server. `ExpiresDefault` is the fallback that applies to any response whose content type isn't explicitly listed in `ExpiresByType` — which includes `application/json`. `"access 1 month"` = 2,592,000 seconds, which is the exact `max-age` value seen on affected responses. It applies per-domain independently — fixing one subdomain does not fix another.

---

### Diagnosis

Isolate each layer before assuming which one is responsible:

```bash
# 1. Hits the app directly, bypassing Apache and Cloudflare entirely
#    (the app's port is only bound to the host's own loopback — see docker.md)
curl -sD - http://127.0.0.1:3000/api/proposals -o /dev/null | grep -i cache-control

# 2. Hits Apache directly, bypassing Cloudflare (uses --resolve so TLS SNI
#    and the Host header both match, unlike hitting the IP directly)
curl -skD - --resolve <domain>:443:127.0.0.1 https://<domain>/api/proposals -o /dev/null | grep -i cache-control

# 3. Full public path, through Cloudflare too
curl -sD - https://<domain>/api/proposals -o /dev/null | grep -i cache-control
```

If (1) shows no cache header (or the app's own `no-store`) but (2)/(3) show `max-age=2592000`, Apache is adding it. Also check `cf-cache-status` — `DYNAMIC` means Cloudflare's edge is not the one caching it.

---

### Resolution

Don't edit the shared global include — it's likely intentional for real static assets on other sites on this box. Add a **per-vhost override** instead, using the customization point each vhost's config already points to:

```bash
sudo mkdir -p /etc/apache2/conf.d/userdata/ssl/2_4/<cpanel-user>/<domain>/
sudo mkdir -p /etc/apache2/conf.d/userdata/std/2_4/<cpanel-user>/<domain>/

sudo tee /etc/apache2/conf.d/userdata/ssl/2_4/<cpanel-user>/<domain>/zz-no-expires.conf > /dev/null <<'EOF'
<IfModule mod_expires.c>
    ExpiresActive Off
</IfModule>
EOF

sudo cp /etc/apache2/conf.d/userdata/ssl/2_4/<cpanel-user>/<domain>/zz-no-expires.conf \
        /etc/apache2/conf.d/userdata/std/2_4/<cpanel-user>/<domain>/zz-no-expires.conf

sudo /scripts/rebuildhttpdconf
sudo /scripts/restartsrv_httpd
```

Don't hand-edit `httpd.conf` directly — cPanel regenerates it from these userdata includes, so direct edits get silently overwritten on the next rebuild.

As defense in depth (not a substitute for the Apache fix — Apache can still override whatever the app sends), both `onepoint_proposals` and `client_portal` also set an explicit header in `next.config.mjs`:

```js
async headers() {
  return [{ source: '/api/:path*', headers: [{ key: 'Cache-Control', value: 'no-store' }] }]
}
```

---

### Notes

- `Header unset Cache-Control` strips the header entirely, including the app's own legitimate one — prefer `ExpiresActive Off` alone so the app's `no-store` passes through untouched.
- This must be applied **separately to every subdomain** on the box (`proposalsportal.1pt.com.au` and `clientportal.1pt.com.au` both needed it independently).
- `application/pdf` is also caught by the same `ExpiresByType` list in the global include (1 month) — generated proposal PDFs are subject to the same staleness risk in the browser.

---

## PDF generation times out (`Navigation timeout of 30000 ms exceeded`)

### Symptoms

`docker compose logs` shows:

```text
PDF ERROR: Error [TimeoutError]: Navigation timeout of 30000 ms exceeded
```

The download either hangs for ~30s and then fails, or returns `{"error":"Navigation timeout of 30000 ms exceeded"}`.

---

### Cause

`NEXT_PUBLIC_APP_URL` was set to the public domain (`https://proposalsportal.1pt.com.au`) instead of `http://localhost:3000`. Puppeteer runs *inside the same container* as the Next.js server it's rendering, but with the public URL it has to leave the container, go out through the internet, hit Cloudflare, come back through Apache, and reach the host's published port — a fragile round trip with several points that can hang (Cloudflare bot protection, DNS, NAT hairpinning), rather than a direct in-container loopback call.

Confirm by comparing timing: the same page fetched directly over the public domain (`curl`) returns in under a second, while the Puppeteer-driven PDF route times out — proving the page/data isn't slow, the *navigation path* is.

---

### Resolution

In the app's own `.env` (not the root `/apps/.env`):

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Recreate the container — **no rebuild required**, since `.env` is excluded from the Docker build context (see `.dockerignore`) and is read fresh via `env_file` at container start, not baked into the image:

```bash
cd ~/apps
docker compose up -d
```

If that doesn't pick it up, force recreation:

```bash
docker compose up -d --force-recreate proposal_portal
```

---

### Notes

- `NEXT_PUBLIC_APP_URL` is used *only* for Puppeteer's internal navigation in the PDF routes (`/api/proposals/[slug]/pdf`, `/api/discovery/[id]/pdf`). Emailed/shareable proposal links use a separate variable, `PORTAL_URL`, and are unaffected by this.
- Applies equally to any future server-side Puppeteer/headless-browser usage added to either app.
- If `NEXT_PUBLIC_APP_URL` is already correctly `http://localhost:3000` and this error still occurs — specifically only on proposals/discovery sessions that have team members with a photo — see the next section below. It's a different, host-level cause that produces the identical error message.

---

## PDF generation times out — only on proposals/sessions with team member photos (host has no outbound network)

### Symptoms

Same error as above:

```text
PDF ERROR: Error [TimeoutError]: Navigation timeout of 30000 ms exceeded
```

But `NEXT_PUBLIC_APP_URL` is already correctly set to `http://localhost:3000`, and it only happens for proposals/discovery sessions whose team members have a photo. Proposals/sessions with no team members (or members with no photo) generate fine.

---

### Cause

`OurTeam.js` renders each team member's photo as `<img src={m.teamMember.memberImage}>`, which is a full external URL on Cloudflare R2 (`https://media.1pt.com.au/...`, via `uploadToR2` in `src/lib/uploadToR2.js`). Chromium has to fetch that image before `page.goto(..., { waitUntil: "networkidle0" })` will resolve.

The underlying host (`op-web-01`, AlmaLinux/cPanel) had `net.ipv4.ip_forward = 0` in `/etc/sysctl.conf`, from the base security-hardening template. With IP forwarding disabled at the kernel level, **no Docker container on this host can reach anything outside the box** — not just this R2 domain, but any external destination (DNS resolution to Cloudflare's `1.1.1.1` and to Linode's own internal resolvers both failed identically). This had nothing to do with Imunify360, iptables/nftables rules, or NAT config — all of those were already correctly set up and were confirmed innocent one by one. Packets from the container's bridge got processed fine through `PREROUTING`, then were silently dropped at the routing/forwarding decision, before ever reaching `FORWARD`, `POSTROUTING`, or the physical `eth0` interface.

This almost certainly predates the team-photo feature entirely — nothing else the app does requires a container to reach the public internet (DB access and inter-container calls stay on the Docker bridge; inbound requests arrive via published ports, which don't require forwarding), so this was likely broken from the moment Docker was first deployed on this host and simply never triggered until now.

---

### Diagnosis

Confirm the container has no outbound network access at all (not domain-specific):

```bash
docker exec <container> node -e "require('dns').lookup('google.com',(e,a)=>console.log(e?e.message:a))"
docker exec <container> node -e "fetch('https://1.1.1.1').catch(e=>console.error(e.message))"
```

Both failing (`EAI_AGAIN`, `fetch failed`) — including against a public resolver like Cloudflare, not just the app's own domain — rules out anything domain-specific and points at general egress being broken.

Rule out routing/NAT/firewall config first (all should look fine — the actual bug is one level deeper):

```bash
sudo iptables -t nat -L POSTROUTING -n -v   # MASQUERADE rule for the container's bridge subnet should be present
ip route                                     # host's own default route should be normal
sudo firewall-cmd --list-all                 # firewalld status
```

If those all look correct, trace the actual packet with nftables to see exactly where it dies:

```bash
sudo nft add table inet trace_dbg
sudo nft add chain inet trace_dbg pre  "{ type filter hook prerouting  priority -300 ; }"
sudo nft add chain inet trace_dbg fwdc "{ type filter hook forward     priority -300 ; }"   # 'fwd' alone is a reserved nft keyword
sudo nft add chain inet trace_dbg post "{ type filter hook postrouting priority -300 ; }"
sudo nft add rule inet trace_dbg pre  ip daddr 1.1.1.1 meta nftrace set 1
sudo nft add rule inet trace_dbg fwdc ip daddr 1.1.1.1 meta nftrace set 1
sudo nft add rule inet trace_dbg post ip daddr 1.1.1.1 meta nftrace set 1

# Terminal 1:
sudo nft monitor trace
# Terminal 2, while the above runs:
docker exec <container> node -e "const dns=require('dns');const r=new dns.Resolver();r.setServers(['1.1.1.1']);r.resolve4('google.com',(e,a)=>console.log(e?e.message:a))"

# cleanup once done:
sudo nft delete table inet trace_dbg
```

If the trace shows the packet processed fine through `PREROUTING` (including NAT) but the `fwdc` (forward-hook) trace never fires at all, the packet is being dropped at the routing decision — check forwarding directly:

```bash
sudo sysctl net.ipv4.ip_forward
sudo sysctl net.ipv4.conf.all.forwarding
sudo sysctl net.ipv4.conf.<bridge-interface>.forwarding   # e.g. br-ebf8c29ac568 — find via `docker inspect <container>`
```

`0` on any of these confirms it.

---

### Resolution

Edit `/etc/sysctl.conf` directly (on this box it's the actual source of truth — `/etc/sysctl.d/99-sysctl.conf` is just a symlink to it, and there's no cPanel Tweak Setting managing it, confirmed via `grep forward /var/cpanel/cpanel.config` returning nothing):

```
net.ipv4.ip_forward = 0    # change to 1
```

Then reapply and verify:

```bash
sudo sysctl --system
sudo sysctl net.ipv4.ip_forward   # should now read 1
```

A plain `sudo sysctl -w net.ipv4.ip_forward=1` fixes it only until the next `sysctl --system` or reboot re-reads `/etc/sysctl.conf` and reverts it — the file itself must be edited for the fix to survive.

While diagnosing this, both PDF routes (`src/app/api/proposals/[slug]/pdf/route.js`, `src/app/api/discovery/[id]/pdf/route.js`) were temporarily given request interception to abort any non-local image request, as a stop-gap so PDFs would still generate (without team photos) while the host-level networking was broken. **That interception code was removed once the `ip_forward` fix was confirmed working** — team photos load normally now, and leaving the abort logic in place would have silently hidden them forever, with no visible error, in every future PDF. If a PDF is ever missing team photos with no error in the logs, check whether that interception code has been reintroduced before re-diagnosing the network from scratch.

Both routes did keep one change from that pass: always closing the Puppeteer browser in a `finally` block — previously, every timeout left a headless Chromium process running (leaked, never cleaned up). That fix is unrelated to the networking issue and still applies.

---

### Notes

- This broke **all** outbound container networking on the host, not just PDF generation — anything added in the future that needs a container to reach the public internet (webhooks, third-party APIs, outbound email via an API, etc.) would hit the same wall. Check `net.ipv4.ip_forward` first if a container mysteriously can't reach anything external.
- It also broke the Docker **build** itself: `prisma generate` tries to reach `binaries.prisma.sh` and failed the same way, unrelated to the runtime fix above. `compose.yaml`'s `proposal_portal` build config now sets `network: host` so the build stage uses the host's network directly instead of the (at-the-time broken) bridge/NAT path:
  ```yaml
  proposal_portal:
    build:
      context: ./onepoint_proposals/
      network: host
  ```
  This build-time setting is unrelated to the runtime `ip_forward` fix and should stay regardless — it makes the build itself more robust to this class of host networking issue.
- Host-native processes (outside Docker) were unaffected the whole time, which is what made this confusing — `curl`/`getent hosts` from the shell worked fine while every container was cut off, because host-originated traffic doesn't go through the forwarding path at all.
- If outbound networking ever breaks again on this host and a stop-gap is needed before `ip_forward` can be fixed, the request-interception snippet in the Resolution above is the pattern to reapply — but remember to remove it again afterward, since it silently hides team photos with no visible error otherwise.

---

## Creating a proposal (or package) returns Internal Server Error for long text, but not short text

### Symptoms

- Simple proposals (short deal/item text) create fine.
- A proposal or package with a longer paragraph in a deal item, offer description, or team member bio returns a generic Internal Server Error, not a validation error.
- The Zod schemas involved have no `.max()` length constraints, so it isn't obvious from the code why it's failing.

---

### Cause

Several Prisma `String` fields had no native type override, so Prisma defaults them to `VARCHAR(191)` on MySQL/MariaDB. Pasting text longer than 191 characters causes MariaDB to reject the insert with `Data too long for column` — a raw database error, not a Zod validation failure, so it isn't caught by the API's specific error handling and falls through to a generic 500.

---

### Resolution

Widen the affected columns to `@db.LongText` in `schema.prisma`, matching the convention already used for fields like `executiveSummary` and `paymentTerms`, then migrate:

```bash
npx prisma migrate dev --name <description>   # locally, to generate + apply
npx prisma migrate deploy                      # on the VPS, inside the container — see deployment.md
```

Fields fixed so far (onepoint_proposals): `PackageDealItem.item`, `PackageDealEntry.itemEntry`, `DealItem.dealItem`, `DealEntry.itemEntry`, `OfferEntry.description`, `OfferEntry.itemDiscountDescription`, `ServiceProductOffer.discountDescription`, `SlaOffer.discountDescription`, `TeamMember.description`.

---

### Notes

- `MODIFY COLUMN` from `VARCHAR` to `LONGTEXT` is a lossless widening — safe to run against production data with no risk of truncation. It does require MariaDB to rebuild the table internally (not a metadata-only change), but for these table sizes that's effectively instant.
- **Rule of thumb for new fields**: any free-text field a user could reasonably paste a paragraph into should be `@db.LongText` (or `@db.Text`) from the start, not the Prisma default. Don't wait for a 500 to find the next one.
- Two parallel model pairs exist for deal content — `PackageDealItem`/`PackageDealEntry` (used by proposals) and `DealItem`/`DealEntry` (used by the reusable `Package` catalog). They're easy to fix one and miss the other since they look unrelated at a glance.

---

## Bug fix works locally but not on the live site, even after redeploying

### Symptoms

- A fix is committed and pushed.
- The live site still exhibits the old behavior.
- `docker compose logs` shows debug output (e.g. old `console.log` lines) that was removed from the source weeks or commits ago.

---

### Cause

`git push` does not redeploy anything by itself — there's no CI/CD or webhook auto-pull configured. The Docker image is built via `COPY . .` in the Dockerfile, from whatever happens to be checked out **on the VPS** at the moment `docker compose up --build` is run. If the VPS working directory wasn't `git pull`ed first, the image is built from stale source regardless of what's on GitHub.

---

### Diagnosis

Find a string that a specific commit added or removed, and check whether it still appears in the running container's logs or behavior:

```bash
docker compose logs --tail 100 <service> | grep "<string removed by the fix>"
```

If it's still present, the running image predates that commit.

---

### Resolution

```bash
cd ~/apps/<app-directory>
git fetch && git pull

cd ~/apps
docker compose up --build -d <service>
```

---

### Notes

- **`--build` is only required for code/config changes.** A change to an environment variable in `.env` does *not* need a rebuild — see "PDF generation times out" above — because `.env` is excluded from the Docker build context and read at container start, not build time. Running `--build` unnecessarily isn't harmful, just slower.
- Any change to `next.config.*`, `.js`/`.jsx` source files, `schema.prisma`, or `package.json` **does** need `--build`; `docker compose up -d` alone will keep serving the old image.
- Check `docker compose ps` and `docker inspect <container>` (image creation timestamp) if there's ever doubt about whether a rebuild actually happened.
