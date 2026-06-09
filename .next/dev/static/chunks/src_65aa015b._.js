(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/StatusBadge/StatusBadge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const STATUS_CONFIG = {
    Approved: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        dot: 'bg-green-500'
    },
    Declined: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-600',
        dot: 'bg-red-500'
    },
    Pending: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        dot: 'bg-amber-500'
    },
    Viewed: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        dot: 'bg-blue-500'
    },
    Published: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        dot: 'bg-purple-500'
    },
    Draft: {
        bg: 'bg-gray-100',
        border: 'border-gray-200',
        text: 'text-gray-600',
        dot: 'bg-gray-400'
    }
};
function StatusBadge({ status, size = 'sm' }) {
    const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.Draft;
    const textSize = size === 'xs' ? 'text-[10px]' : 'text-xs';
    const padding = size === 'xs' ? 'px-2 py-0.5' : 'px-2.5 py-1';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1.5 ${padding} rounded-full border font-semibold ${textSize} ${config.bg} ${config.border} ${config.text}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StatusBadge/StatusBadge.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/StatusBadge/StatusBadge.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/MemberCard/MemberCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemberCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function MemberCard({ name, role, image, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-44 flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.07),_0_4px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:scale-[1.02] aspect-[7/10]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: image || '/placeholder-member.jpg',
                alt: name,
                className: "absolute inset-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-[55%]",
                style: {
                    background: 'linear-gradient(to top, rgba(178,0,0,1) 0%, rgba(178,0,0,0.85) 40%, rgba(178,0,0,0.3) 75%, rgba(178,0,0,0) 100%)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 p-3 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-semibold text-sm leading-tight",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-white/40 my-1.5 mx-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/90 text-xs font-medium",
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/60 text-[10px] mt-1 leading-snug line-clamp-2",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/MemberCard/MemberCard.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = MemberCard;
var _c;
__turbopack_context__.k.register(_c, "MemberCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/view/[token]/ViewPageClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ViewPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/isomorphic-dompurify/dist/browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatusBadge$2f$StatusBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/StatusBadge/StatusBadge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MemberCard$2f$MemberCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/MemberCard/MemberCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SECTIONS = [
    {
        id: 'executive-summary',
        label: 'Summary',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiFileTextLine"]
    },
    {
        id: 'goals',
        label: 'Goals',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiFocus3Line"]
    },
    {
        id: 'solution',
        label: 'Solution',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLightbulbLine"]
    },
    {
        id: 'team',
        label: 'Team',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiTeamLine"]
    },
    {
        id: 'timeline',
        label: 'Timeline',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiTimelineView"]
    },
    {
        id: 'budget',
        label: 'Budget',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMoneyDollarCircleLine"]
    },
    {
        id: 'overview',
        label: 'Overview',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCheckboxCircleLine"]
    }
];
function formatDate(d) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}
function formatCurrency(val) {
    const n = parseFloat(val ?? 0);
    return `$${n.toLocaleString('en-AU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
function calculateItemDiscounts(entries) {
    return entries.reduce((sum, item)=>{
        if (item.itemDiscountType === 'Percentage') return sum + item.totalPrice * (item.itemDiscountValue / 100);
        if (item.itemDiscountType === 'Fixed') return sum + Number(item.itemDiscountValue);
        return sum;
    }, 0);
}
function ViewPageClient({ token }) {
    _s();
    const [proposal, setProposal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('executive-summary');
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch proposal data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPageClient.useEffect": ()=>{
            fetch(`/api/view/${token}`).then({
                "ViewPageClient.useEffect": (r)=>{
                    if (r.status === 404) throw new Error('This proposal link was not found.');
                    if (r.status === 410) throw new Error('This proposal link has expired.');
                    if (!r.ok) throw new Error('Failed to load proposal.');
                    return r.json();
                }
            }["ViewPageClient.useEffect"]).then({
                "ViewPageClient.useEffect": (data)=>setProposal(data.proposal)
            }["ViewPageClient.useEffect"]).catch({
                "ViewPageClient.useEffect": (err)=>setError(err.message)
            }["ViewPageClient.useEffect"]).finally({
                "ViewPageClient.useEffect": ()=>setLoading(false)
            }["ViewPageClient.useEffect"]);
        }
    }["ViewPageClient.useEffect"], [
        token
    ]);
    // Session lifecycle — start after proposal loads, heartbeat every 30s, end on unload
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPageClient.useEffect": ()=>{
            if (!proposal) return;
            fetch(`/api/view/${token}/session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'start'
                })
            }).then({
                "ViewPageClient.useEffect": (r)=>r.json()
            }["ViewPageClient.useEffect"]).then({
                "ViewPageClient.useEffect": (data)=>{
                    sessionRef.current = data.sessionId;
                }
            }["ViewPageClient.useEffect"]).catch({
                "ViewPageClient.useEffect": ()=>{}
            }["ViewPageClient.useEffect"]);
            const heartbeat = setInterval({
                "ViewPageClient.useEffect.heartbeat": ()=>{
                    if (!sessionRef.current) return;
                    fetch(`/api/view/${token}/session`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'heartbeat',
                            sessionId: sessionRef.current
                        })
                    }).catch({
                        "ViewPageClient.useEffect.heartbeat": ()=>{}
                    }["ViewPageClient.useEffect.heartbeat"]);
                }
            }["ViewPageClient.useEffect.heartbeat"], 30000);
            const endSession = {
                "ViewPageClient.useEffect.endSession": ()=>{
                    if (!sessionRef.current) return;
                    navigator.sendBeacon(`/api/view/${token}/session`, new Blob([
                        JSON.stringify({
                            action: 'end',
                            sessionId: sessionRef.current
                        })
                    ], {
                        type: 'application/json'
                    }));
                }
            }["ViewPageClient.useEffect.endSession"];
            window.addEventListener('beforeunload', endSession);
            window.addEventListener('pagehide', endSession);
            return ({
                "ViewPageClient.useEffect": ()=>{
                    clearInterval(heartbeat);
                    window.removeEventListener('beforeunload', endSession);
                    window.removeEventListener('pagehide', endSession);
                    // End on SPA unmount
                    if (sessionRef.current) {
                        fetch(`/api/view/${token}/session`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'end',
                                sessionId: sessionRef.current
                            })
                        }).catch({
                            "ViewPageClient.useEffect": ()=>{}
                        }["ViewPageClient.useEffect"]);
                    }
                }
            })["ViewPageClient.useEffect"];
        }
    }["ViewPageClient.useEffect"], [
        proposal,
        token
    ]);
    // Section highlight on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPageClient.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ViewPageClient.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "ViewPageClient.useEffect.visible": (e)=>e.isIntersecting
                    }["ViewPageClient.useEffect.visible"]);
                    if (visible.length > 0) {
                        const top = visible.reduce({
                            "ViewPageClient.useEffect.top": (a, b)=>a.boundingClientRect.top < b.boundingClientRect.top ? a : b
                        }["ViewPageClient.useEffect.top"]);
                        setActiveSection(top.target.id);
                    }
                }
            }["ViewPageClient.useEffect"], {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0
            });
            Object.values(sectionRefs.current).forEach({
                "ViewPageClient.useEffect": (el)=>{
                    if (el) observer.observe(el);
                }
            }["ViewPageClient.useEffect"]);
            return ({
                "ViewPageClient.useEffect": ()=>observer.disconnect()
            })["ViewPageClient.useEffect"];
        }
    }["ViewPageClient.useEffect"], [
        proposal
    ]);
    function scrollTo(id) {
        const el = sectionRefs.current[id];
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 130;
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    }
    // Loading skeleton
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#F8F9FC] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-b border-[#E2E8F0] h-16"
                }, void 0, false, {
                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto w-full px-4 py-8 space-y-4 animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-white rounded-2xl w-64"
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-24 bg-white rounded-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-96 bg-white rounded-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
            lineNumber: 154,
            columnNumber: 7
        }, this);
    }
    // Error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#F8F9FC] flex flex-col items-center justify-center gap-5 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLockLine"], {
                        className: "w-8 h-8 text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base font-semibold text-[#1A202C]",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#718096] mt-2",
                            children: "Please contact your OnePoint account manager for assistance."
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                    lineNumber: 172,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 bg-[#F22044] rounded-md flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-bold text-xs",
                                children: "1P"
                            }, void 0, false, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold text-[#1A1A2E]",
                            children: "OnePoint"
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
            lineNumber: 168,
            columnNumber: 7
        }, this);
    }
    if (!proposal) return null;
    const status = proposal.proposalStatus?.status ?? 'Sent';
    const isSla = proposal.proposalType === 'SLA Proposal';
    const slaOffer = proposal.slaOffers?.[0];
    const serviceOffer = proposal.serviceProductOffers?.[0];
    const timelines = proposal.timelines ?? [];
    const sections = SECTIONS.filter((s)=>{
        if (s.id === 'budget') return isSla ? !!slaOffer : !!serviceOffer;
        if (s.id === 'timeline') return timelines.length > 0;
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F8F9FC] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-[#F22044] rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-sm",
                                        children: "1P"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#1A1A2E] font-bold text-base tracking-wide",
                                    children: "OnePoint"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiEyeLine"], {
                                    className: "w-3.5 h-3.5 text-[#A0AEC0]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#718096] font-medium",
                                    children: "Read-only view"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto w-full px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5 mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatusBadge$2f$StatusBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        status: status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#A0AEC0] font-medium",
                                        children: proposal.proposalType
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-[#1A202C] leading-tight",
                                children: proposal.proposalTitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCalendarLine"], {
                                        className: "w-3.5 h-3.5 text-[#A0AEC0]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#A0AEC0]",
                                        children: [
                                            "Received ",
                                            formatDate(proposal.dateCreated)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-16 z-40 bg-[#F8F9FC] pt-2 pb-2 -mx-4 px-4 mb-6 border-b border-[#E2E8F0]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 overflow-x-auto scrollbar-thin pb-1",
                            children: sections.map((section)=>{
                                const Icon = section.icon;
                                const active = activeSection === section.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollTo(section.id),
                                    className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${active ? 'bg-[#F22044] text-white shadow-sm' : 'text-[#718096] hover:bg-white hover:text-[#1A202C] hover:shadow-sm'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this),
                                        section.label
                                    ]
                                }, section.id, true, {
                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "executive-summary",
                                ref: (el)=>{
                                    sectionRefs.current['executive-summary'] = el;
                                },
                                className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-[#FFF0F3] to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-[#F22044] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiFileTextLine"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[#1A202C]",
                                                children: "Executive Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    proposal.execVideoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 pt-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-video rounded-xl overflow-hidden bg-[#1A1A2E]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    src: proposal.execVideoUrl.replace('watch?v=', 'embed/'),
                                                    className: "w-full h-full",
                                                    allowFullScreen: true,
                                                    title: "Executive Video"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiVideoLine"], {
                                                        className: "w-3.5 h-3.5 text-[#A0AEC0]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[#A0AEC0]",
                                                        children: "Executive video presentation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rich-text px-6 py-5 text-sm text-[#1A202C] leading-relaxed",
                                        dangerouslySetInnerHTML: {
                                            __html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(proposal.executiveSummary ?? '')
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "goals",
                                ref: (el)=>{
                                    sectionRefs.current['goals'] = el;
                                },
                                className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-blue-50 to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiFocus3Line"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[#1A202C]",
                                                children: "Goals and Objectives"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rich-text px-6 py-5 text-sm text-[#1A202C] leading-relaxed",
                                        dangerouslySetInnerHTML: {
                                            __html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(proposal.goalsAndObjectives ?? '')
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "solution",
                                ref: (el)=>{
                                    sectionRefs.current['solution'] = el;
                                },
                                className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-amber-50 to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLightbulbLine"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[#1A202C]",
                                                children: "Proposed Solution"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rich-text px-6 py-5 text-sm text-[#1A202C] leading-relaxed",
                                        dangerouslySetInnerHTML: {
                                            __html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(proposal.proposedSolution ?? '')
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "team",
                                ref: (el)=>{
                                    sectionRefs.current['team'] = el;
                                },
                                className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-green-50 to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiTeamLine"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[#1A202C]",
                                                children: "The Team"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this),
                                    !proposal.selectedMembers?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-8 text-center text-sm text-[#A0AEC0]",
                                        children: "No team members listed."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: proposal.selectedMembers.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$MemberCard$2f$MemberCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: m.teamMember.memberName,
                                                    role: m.teamMember.memberRole,
                                                    image: m.teamMember.memberImage,
                                                    description: m.teamMember.description
                                                }, i, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            timelines.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "timeline",
                                ref: (el)=>{
                                    sectionRefs.current['timeline'] = el;
                                },
                                className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-indigo-50 to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiTimelineView"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[#1A202C]",
                                                children: "Project Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-5 overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm min-w-[560px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-[#F0F2F8]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left pb-3 pr-4 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide w-36",
                                                                children: "Timeframe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 383,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left pb-3 pr-4 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide w-36",
                                                                children: "Assigned To"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 384,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left pb-3 pr-4 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide w-48",
                                                                children: "Progress"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left pb-3 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide",
                                                                children: "Tasks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 386,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 382,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-[#F0F2F8]",
                                                    children: timelines.slice().sort((a, b)=>a.progress - b.progress).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-[#FAFBFC] transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 pr-4 align-top font-medium text-[#1A202C]",
                                                                    children: t.timeFrame
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                    lineNumber: 392,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 pr-4 align-top text-[#718096]",
                                                                    children: t.assignedTo || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                    lineNumber: 393,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 pr-4 align-top",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 h-2 bg-[#F0F2F8] rounded-full overflow-hidden",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-full rounded-full transition-all",
                                                                                    style: {
                                                                                        width: `${t.progress}%`,
                                                                                        background: t.progress === 100 ? '#22C55E' : t.progress >= 60 ? '#6366F1' : t.progress >= 30 ? '#F59E0B' : '#E2E8F0'
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                    lineNumber: 397,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 396,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-semibold text-[#718096] w-9 text-right flex-shrink-0",
                                                                                children: [
                                                                                    t.progress,
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 405,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 395,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                    lineNumber: 394,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 align-top",
                                                                    children: t.timelineScopeItems?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "space-y-1",
                                                                        children: t.timelineScopeItems.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "flex items-start gap-2 text-[#718096]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                        lineNumber: 413,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    s.scope
                                                                                ]
                                                                            }, s.scopeItemId, true, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 412,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 410,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#A0AEC0]",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 418,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                    lineNumber: 408,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, t.timelineId, true, {
                                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                            lineNumber: 391,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 389,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this),
                            (isSla ? slaOffer : serviceOffer) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "budget",
                                ref: (el)=>{
                                    sectionRefs.current['budget'] = el;
                                },
                                className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-purple-50 to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-purple-500 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMoneyDollarCircleLine"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[#1A202C]",
                                                children: "Proposed Budget"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-5 space-y-5",
                                        children: [
                                            isSla && slaOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-[#1A202C] mb-1",
                                                                children: [
                                                                    "Package: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#F22044]",
                                                                        children: slaOffer.slaPackage
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 447,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 446,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-[#718096] mb-4",
                                                                children: "Inclusions may include the following items:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 449,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                                children: slaOffer.packageDealItem?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `rounded-xl border border-[#E2E8F0] p-4 ${item.itemType === 'Paragraph' ? 'sm:col-span-2' : ''}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-bold text-[#1A202C] uppercase tracking-wide mb-2",
                                                                                children: item.item
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 453,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            item.itemType === 'Paragraph' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-[#718096] leading-relaxed",
                                                                                children: item.packageDealEntries[0]?.itemEntry
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 455,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1",
                                                                                children: item.packageDealEntries.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-start gap-2 text-sm text-[#718096]",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F22044] flex-shrink-0"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                                lineNumber: 460,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            e.itemEntry
                                                                                        ]
                                                                                    }, e.itemEntryId, true, {
                                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                        lineNumber: 459,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 457,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, item.packageDealItemId, true, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 452,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 450,
                                                                columnNumber: 23
                                                            }, this),
                                                            proposal.proposalDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-[#718096] leading-relaxed",
                                                                    children: proposal.proposalDescription
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                    lineNumber: 471,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 470,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 445,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceSummaryTable, {
                                                        rows: [
                                                            {
                                                                label: 'Package Price',
                                                                value: formatCurrency(slaOffer.basePrice)
                                                            },
                                                            slaOffer.discountType !== 'None' && {
                                                                label: 'Discount',
                                                                value: `- ${formatCurrency(slaOffer.discountValue)}`,
                                                                muted: true
                                                            },
                                                            slaOffer.taxApplicable && {
                                                                label: `GST (${slaOffer.taxRate}%)`,
                                                                value: `+ ${formatCurrency(slaOffer.taxAmount)}`,
                                                                muted: true
                                                            }
                                                        ].filter(Boolean),
                                                        total: formatCurrency(slaOffer.finalPrice),
                                                        paymentTerms: slaOffer.paymentTerms
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 475,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            !isSla && serviceOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto rounded-xl border border-[#E2E8F0]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "bg-[#F8F9FC] border-b border-[#E2E8F0]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide",
                                                                                children: "Item"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 493,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide",
                                                                                children: "Description"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 494,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide",
                                                                                children: "Price"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 495,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            proposal.proposalType === 'Product Proposal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide",
                                                                                        children: "Qty"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                        lineNumber: 498,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                        className: "text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide",
                                                                                        children: "Subtotal"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                        lineNumber: 499,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide",
                                                                                children: "Discount"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 502,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide",
                                                                                children: "Total"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 503,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 492,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                    lineNumber: 491,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-[#F0F2F8]",
                                                                    children: serviceOffer.offerEntries?.map((entry)=>{
                                                                        const discountedTotal = entry.itemDiscountType === 'Fixed' ? entry.totalPrice - entry.itemDiscountValue : entry.itemDiscountType === 'Percentage' ? entry.totalPrice - entry.itemDiscountValue / 100 * entry.totalPrice : entry.totalPrice;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-[#FAFBFC]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 font-medium text-[#1A202C]",
                                                                                    children: entry.serviceProductItem
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                    lineNumber: 515,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-[#718096] text-xs max-w-48",
                                                                                    children: entry.description ?? '—'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                    lineNumber: 516,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-right text-[#1A202C]",
                                                                                    children: formatCurrency(entry.itemPrice)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                    lineNumber: 517,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                proposal.proposalType === 'Product Proposal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "px-4 py-3 text-right text-[#1A202C]",
                                                                                            children: entry.quantity
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                            lineNumber: 520,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                            className: "px-4 py-3 text-right text-[#1A202C]",
                                                                                            children: formatCurrency(entry.totalPrice)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                            lineNumber: 521,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-right",
                                                                                    children: entry.itemDiscountType === 'None' || !entry.itemDiscountType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[#A0AEC0]",
                                                                                        children: "—"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                        lineNumber: 526,
                                                                                        columnNumber: 37
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500 text-xs",
                                                                                        children: entry.itemDiscountType === 'Fixed' ? `- ${formatCurrency(entry.itemDiscountValue)}` : `- ${entry.itemDiscountValue}%`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                        lineNumber: 528,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                    lineNumber: 524,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-right font-semibold text-[#1A202C]",
                                                                                    children: formatCurrency(discountedTotal)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                    lineNumber: 533,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, entry.offerEntryId, true, {
                                                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                            lineNumber: 514,
                                                                            columnNumber: 31
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                    lineNumber: 506,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                            lineNumber: 490,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 489,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceSummaryTable, {
                                                        rows: [
                                                            {
                                                                label: 'Subtotal',
                                                                value: formatCurrency(serviceOffer.subTotal)
                                                            },
                                                            calculateItemDiscounts(serviceOffer.offerEntries ?? []) > 0 && {
                                                                label: 'Item Discounts',
                                                                value: `- ${formatCurrency(calculateItemDiscounts(serviceOffer.offerEntries))}`,
                                                                muted: true
                                                            },
                                                            serviceOffer.discountType !== 'None' && {
                                                                label: `Global Discount${serviceOffer.discountDescription ? ` (${serviceOffer.discountDescription})` : ''}`,
                                                                value: serviceOffer.discountType === 'Fixed' ? `- ${formatCurrency(serviceOffer.discountValue)}` : `- ${formatCurrency(serviceOffer.discountValue / 100 * (serviceOffer.subTotal - calculateItemDiscounts(serviceOffer.offerEntries ?? [])))}`,
                                                                muted: true
                                                            },
                                                            serviceOffer.taxApplicable && {
                                                                label: `GST (${serviceOffer.taxRate}%)`,
                                                                value: `+ ${formatCurrency(serviceOffer.taxAmount)}`,
                                                                muted: true
                                                            }
                                                        ].filter(Boolean),
                                                        total: formatCurrency(serviceOffer.finalPrice),
                                                        paymentTerms: serviceOffer.paymentTerms
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 540,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "overview",
                                ref: (el)=>{
                                    sectionRefs.current['overview'] = el;
                                },
                                className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-[#FFF0F3] to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-[#F22044] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCheckboxCircleLine"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                    lineNumber: 578,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 577,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[#1A202C]",
                                                children: "Proposal Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 580,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-5 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0] space-y-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-[#A0AEC0] uppercase tracking-wide",
                                                                children: "Proposal Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 586,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-[#A0AEC0]",
                                                                        children: "Title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 588,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-[#1A202C]",
                                                                        children: proposal.proposalTitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 589,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 587,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-[#A0AEC0]",
                                                                        children: "Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 592,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-[#1A202C]",
                                                                        children: proposal.proposalType
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 593,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 591,
                                                                columnNumber: 19
                                                            }, this),
                                                            isSla && slaOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-[#A0AEC0]",
                                                                        children: "Package"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 597,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-[#1A202C]",
                                                                        children: slaOffer.slaPackage
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 598,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 596,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-[#A0AEC0]",
                                                                        children: "Status"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 602,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatusBadge$2f$StatusBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            status: status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                            lineNumber: 603,
                                                                            columnNumber: 43
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 603,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 601,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 585,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0] space-y-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-[#A0AEC0] uppercase tracking-wide",
                                                                children: "Client Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 608,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiBuildingLine"], {
                                                                        className: "w-3.5 h-3.5 text-[#A0AEC0] mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 610,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-[#A0AEC0]",
                                                                                children: "Company"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 612,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-[#1A202C]",
                                                                                children: proposal.clientProfile?.companyName ?? '—'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 613,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 611,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 609,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiFileTextLine"], {
                                                                        className: "w-3.5 h-3.5 text-[#A0AEC0] mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 617,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-[#A0AEC0]",
                                                                                children: "Client"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 619,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-[#1A202C]",
                                                                                children: [
                                                                                    proposal.clientProfile?.user?.firstName,
                                                                                    " ",
                                                                                    proposal.clientProfile?.user?.lastName
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 620,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 618,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 616,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMailLine"], {
                                                                        className: "w-3.5 h-3.5 text-[#A0AEC0] mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 626,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-[#A0AEC0]",
                                                                                children: "Email"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 628,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-[#1A202C]",
                                                                                children: proposal.clientProfile?.user?.userEmail ?? '—'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 629,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 627,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 625,
                                                                columnNumber: 19
                                                            }, this),
                                                            proposal.clientProfile?.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiGlobalLine"], {
                                                                        className: "w-3.5 h-3.5 text-[#A0AEC0] mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 634,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-[#A0AEC0]",
                                                                                children: "Website"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 636,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-[#1A202C]",
                                                                                children: proposal.clientProfile.website
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                                lineNumber: 637,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 635,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 633,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 607,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 584,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLockLine"], {
                                                        className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 646,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-blue-700",
                                                                children: "Read-only view"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 648,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-blue-600 mt-0.5",
                                                                children: [
                                                                    "To approve or decline this proposal, please",
                                                                    ' ',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/login",
                                                                        className: "underline font-semibold hover:text-blue-800",
                                                                        children: "sign in to your client portal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                        lineNumber: 651,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                                lineNumber: 649,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                        lineNumber: 647,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                                lineNumber: 645,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 pb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 bg-[#F22044] rounded-md flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-[10px]",
                                            children: "1P"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                            lineNumber: 666,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-[#1A1A2E]",
                                        children: "OnePoint"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 668,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 664,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#A0AEC0]",
                                children: "This proposal was prepared exclusively for you. Please do not share this link."
                            }, void 0, false, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 670,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 663,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(ViewPageClient, "4g7kX2OdQR+pxvzalhmYNFPbf4A=");
_c = ViewPageClient;
function PriceSummaryTable({ rows, total, paymentTerms }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-[#E2E8F0] rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-[#F0F2F8] last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `px-4 py-3 ${row.muted ? 'text-[#718096]' : 'font-medium text-[#1A202C]'}`,
                                            children: row.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                            lineNumber: 688,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `px-4 py-3 text-right font-semibold ${row.muted ? 'text-[#718096]' : 'text-[#1A202C]'}`,
                                            children: row.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                    lineNumber: 687,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[#1A1A2E]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-4 font-bold text-white",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-4 text-right font-bold text-white text-base",
                                        children: total
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 685,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                    lineNumber: 684,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                lineNumber: 683,
                columnNumber: 7
            }, this),
            paymentTerms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-[#A0AEC0] uppercase tracking-wide mb-1.5",
                        children: "Payment Terms"
                    }, void 0, false, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 701,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rich-text text-sm text-[#718096] leading-relaxed",
                        dangerouslySetInnerHTML: {
                            __html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(paymentTerms)
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                        lineNumber: 702,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
                lineNumber: 700,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/view/[token]/ViewPageClient.js",
        lineNumber: 682,
        columnNumber: 5
    }, this);
}
_c1 = PriceSummaryTable;
var _c, _c1;
__turbopack_context__.k.register(_c, "ViewPageClient");
__turbopack_context__.k.register(_c1, "PriceSummaryTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_65aa015b._.js.map