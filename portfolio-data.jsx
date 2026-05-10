// All static portfolio data lives here.
const YASH = {
  name: "Yashraj Vasishtha",
  shortName: "Yashraj",
  role: "Full-stack engineer · AI builder",
  location: "Toulouse, France",
  email: "vasishtha.yashraj@gmail.com",
  phone: "+33 7 45 36 03 54",
  github: "va-yash",
  linkedin: "yashraj-vasishtha",
  status: "Open to opportunities · Remote / EU",
  tagline: "Engineering at the intersection of",
  taglineTokens: ["aviation", "ancient knowledge", "AI"],
  hero: "I design and ship intelligent systems — from hydrogen-aviation feasibility for Airbus to AI tools used by tens of thousands. Trained as an aerospace engineer. Live as a builder.",

  stats: [
    { num: "128+", label: "GitHub contributions / 12 mo" },
    { num: "5", label: "Production-deployed apps" },
    { num: "1,500+", label: "AOG queries resolved at Capgemini" },
    { num: "2 yrs", label: "Aerospace engineering" },
  ],

  techPills: [
    "Next.js 14", "React 18", "TypeScript", "FastAPI", "Python", "Anthropic Claude",
    "PostgreSQL", "Redis", "Tailwind", "Vercel", "Railway", "Three.js", "Framer Motion",
    "Swiss Ephemeris", "Power BI", "EASA / CS-25", "MATLAB", "CATIA V5", "SAP-MM"
  ],

  philosophy: [
    { title: "Ship, then refine.", body: "Five live apps on Vercel & Railway. Production teaches what staging never can.", icon: "ship" },
    { title: "Cross-domain wins.", body: "Aerospace rigor + AI tooling + Vedic mathematics. Strange combinations make better products.", icon: "compass" },
    { title: "Document the boring.", body: "READMEs that explain local, dev, and deploy. Other engineers should be able to clone and run in five minutes.", icon: "book" },
    { title: "Free-tier first.", body: "Constraints sharpen design. Most things ship on Vercel + Railway free tiers — and feel premium.", icon: "lightning" },
  ],

  experience: [
    {
      year: "Mar 2025 – Sep 2025",
      role: "Project Management Intern — ZEROe",
      company: "Airbus, Toulouse",
      desc: "Led cross-functional coordination across 16+ international hydrogen suppliers for Airbus' liquid-hydrogen aviation programme. Authored strategic progress reports for senior leadership; ran feasibility on cryogenic LH₂ storage at −253 °C.",
      stats: [
        { v: "16+", l: "suppliers coordinated" },
        { v: "ZEROe", l: "hydrogen programme" },
        { v: "−253°C", l: "cryogenic feasibility" },
      ]
    },
    {
      year: "Jan 2022 – Jul 2023",
      role: "Configuration Management Consultant",
      company: "Capgemini Engineering, Bangalore",
      desc: "Owned AFM, SBs, SRM, AMM and CMM for the global MHI-RJ fleet under EASA & TC Holder standards. Drove PCN/RFC/COS records, resolved 1,500+ AOG and critical technical queries with structured workflows.",
      stats: [
        { v: "1,500+", l: "AOG queries resolved" },
        { v: "−20%", l: "resolution time" },
        { v: "MHI-RJ", l: "global fleet" },
      ]
    },
    {
      year: "Sep 2023 – Sep 2025",
      role: "MSc — Air Transport Operations Mgmt",
      company: "École Nationale de l'Aviation Civile · ENAC, Toulouse",
      desc: "GIFAS Scholar. Class Vice-Delegate. Trained by McKinsey.org Forward (10 weeks). ICAO Innovation 2024 Finalist & Airbus PM Challenge 2024 Runner-Up France.",
      stats: [
        { v: "ICAO", l: "Innovation Finalist" },
        { v: "Airbus", l: "PM Challenge RU FR" },
        { v: "GIFAS", l: "Scholar" },
      ]
    },
    {
      year: "2017 – 2021",
      role: "BSc Aerospace Engineering",
      company: "Chandigarh University, Mohali",
      desc: "Foundation in aerodynamics, propulsion, structures. Began building independently in parallel — first deployed projects, first hosted backends, first taste of shipping.",
      stats: [
        { v: "BAC+5", l: "engineering track" },
        { v: "5+", l: "side projects" },
      ]
    },
  ],

  projects: [
    {
      id: "roast-me",
      title: "Roast-Me",
      cat: "AI · Astrology",
      tag: "FEATURED",
      desc: "Personalised Vedic astrology roast app. Users enter birth details; the backend computes D1/D9/D10 charts via Swiss Ephemeris and Claude delivers witty, dark-but-warm psychological profiles. Shareable villain names and intensity dials drive viral loops.",
      problem: "Western personality readings feel generic; classical Jyotish feels inaccessible.",
      solution: "Real ephemeris math + Claude's voice + a single irreverent UX surface.",
      impact: "Heavy organic traffic since launch · streaming-token UX",
      stack: ["Next.js 14", "TypeScript", "FastAPI", "pyswisseph", "Anthropic Claude", "Vercel", "Railway"],
      live: "https://roast-me.me",
      repo: "https://github.com/va-yash/roast-me",
      mock: "roast",
    },
    {
      id: "my-destiny",
      title: "My-Destiny / Jyotish AI",
      cat: "AI · Conversational",
      tag: "LIVE",
      desc: "AI Vedic-astrology advisor. Birth details in → personalised readings out, grounded in real D1/D9/D10 charts, nakshatras, Vimshottari Dasha and yogas. Token-streamed responses, Redis-backed sessions for scale.",
      problem: "Astrology chatbots hallucinate; classical computation is non-trivial.",
      solution: "Strict ephemeris-first pipeline; Claude only sees grounded facts.",
      impact: "End-to-end deploy guides + cost models for indie scale",
      stack: ["React + Vite", "FastAPI", "pyswisseph", "Claude", "Redis", "Railway"],
      live: "https://my-destiny-murex.vercel.app",
      repo: "https://github.com/va-yash/my-destiny",
      mock: "destiny",
    },
    {
      id: "tailor-it",
      title: "Tailor-It",
      cat: "AI · Career",
      tag: "LIVE",
      desc: "AI tool that tailors a CV against a job description in seconds — built specifically to counter ATS-style AI screening. Practical, fast, single-purpose.",
      problem: "Job seekers blast generic CVs; ATS filters cut them before a human reads.",
      solution: "JD-aware rewrite that preserves truth and surfaces aligned signal.",
      impact: "35+ commits · used by peers in EU job market",
      stack: ["HTML/JS", "Node.js", "Claude API", "Vercel"],
      live: "https://tailor-it.vercel.app",
      repo: "https://github.com/va-yash/tailor-it",
      mock: "tailor",
    },
    {
      id: "ugc",
      title: "UGC Logistics",
      cat: "Web · Client",
      tag: "CLIENT",
      desc: "Client-facing static site for a logistics & trucking firm. Clean information architecture, performant, SEO-tight — no template smell.",
      problem: "Family freight company needed online presence + lead capture.",
      solution: "Hand-built static site, sub-second TTFB, mobile-first.",
      impact: "Live · primary lead funnel for the business",
      stack: ["HTML5", "CSS3", "Vanilla JS"],
      live: "#",
      repo: "https://github.com/va-yash/UGC-Website",
      mock: "ugc",
    },
    {
      id: "border",
      title: "Global Border Security",
      cat: "Aviation · AI Concept",
      tag: "ICAO FINALIST",
      desc: "AI-tool architecture for real-time passenger identity verification across international airports. Designed and presented at ICAO HQ Montreal as part of team Legion.",
      problem: "Identity verification at borders is fragmented and slow.",
      solution: "Federated AI layer over existing PNR/API + biometric data sources.",
      impact: "ICAO Innovation Competition 2024 — Finalist",
      stack: ["Systems design", "Aviation policy", "AI/ML architecture"],
      live: "#",
      repo: "#",
      mock: "border",
    },
  ],

  skills: {
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind", "Vite"],
    Backend: ["FastAPI", "Node.js", "Python", "Redis", "PostgreSQL"],
    "AI / ML": ["Claude API", "OpenAI", "Streaming", "RAG", "Prompting"],
    Cloud: ["Vercel", "Railway", "Nixpacks", "Cloudflare"],
    Aviation: ["EASA / CS-25", "AFM / SB / SRM", "AMOS", "Skywise", "CATIA V5"],
    Data: ["Power BI", "MySQL", "Pandas", "Matplotlib", "Plotly"],
  },

  github: {
    contribCount: 412,
    streak: 38,
    repos: 24,
    stars: 67,
    languages: [
      { name: "TypeScript", pct: 38, color: "#3b82f6" },
      { name: "Python",     pct: 27, color: "#a784ff" },
      { name: "JavaScript", pct: 18, color: "#f7df1e" },
      { name: "HTML/CSS",   pct: 12, color: "#ff7d4d" },
      { name: "Other",      pct:  5, color: "#6b7280" },
    ],
    pinned: [
      { name: "roast-me",     desc: "Personalised Vedic astrology roast app. Real ephemeris + Claude.", lang: "TypeScript", stars: 24 },
      { name: "my-destiny",   desc: "AI advisor grounded in classical Jyotish computation.", lang: "Python", stars: 17 },
      { name: "tailor-it",    desc: "AI CV tailoring tool to counter ATS screening.", lang: "JavaScript", stars: 12 },
      { name: "sb-compliance",desc: "Python pipeline for Service Bulletin compliance reports.", lang: "Python", stars: 7 },
    ],
  },

  testimonials: [
    {
      quote: "Yashraj brings rare cross-domain depth — same engineer who debugs FastAPI streaming will draft a Service Bulletin to EASA standards. Fast, structured, and doesn't lose the plot.",
      name: "Engineering lead",
      role: "Aerospace · Toulouse",
      avatar: "EL"
    },
    {
      quote: "Roast-Me went viral in our group chat for two days. The fact one person built the math, the backend and the brand — and shipped it on a free tier — is wild.",
      name: "Product designer",
      role: "Indie SaaS · Bangalore",
      avatar: "PD"
    },
    {
      quote: "Documentation is honestly best-in-class. Cloned, ran locally, deployed to Railway in under ten minutes — that's a rare developer experience for a side project.",
      name: "Senior engineer",
      role: "FAANG · Berlin",
      avatar: "SE"
    },
  ],

  // pseudo-deterministic heatmap — 53 weeks × 7 days
  heatmap: (() => {
    const cells = [];
    let s = 7;
    for (let w = 0; w < 53; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        s = (s * 9301 + 49297) % 233280;
        const r = s / 233280;
        // bias: more activity in last 12 weeks
        const recencyBoost = w > 38 ? 0.35 : 0;
        const v = r + recencyBoost - 0.4;
        let lvl = 0;
        if (v > 0.05) lvl = 1;
        if (v > 0.20) lvl = 2;
        if (v > 0.40) lvl = 3;
        if (v > 0.60) lvl = 4;
        // weekends slightly less
        if ((d === 0 || d === 6) && lvl > 1) lvl -= 1;
        week.push(lvl);
      }
      cells.push(week);
    }
    return cells;
  })(),
};

window.YASH = YASH;
