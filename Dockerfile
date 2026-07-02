# ---------- Stage 1: Install dependencies ----------
FROM node:22-alpine AS deps

RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./

RUN npm ci

# ---------- Stage 2: Build the application ----------
FROM node:22-alpine AS builder

RUN apk add --no-cache openssl

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build script is `next build` only — prisma generate must be run explicitly
RUN npx prisma generate
RUN npm run build

# ---------- Stage 3: Production image ----------
FROM node:22-alpine AS runner

RUN apk add --no-cache openssl

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src/generated ./src/generated
COPY --from=builder /app/next.config.* ./

EXPOSE 3001

CMD ["npm", "start"]
