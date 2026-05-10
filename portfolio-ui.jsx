// UI primitives, custom cursor, command menu, dock, terminal, loader.

const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ---------- ICON ----------
function Icon({ name, size = 16 }) {
  const s = { width: size, height: size };
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow-up-right": return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="M7 17 17 7M9 7h8v8"/></svg>);
    case "arrow-right":    return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "github":         return (<svg style={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2"/></svg>);
    case "linkedin":       return (<svg style={s} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8.34 18.34H5.67v-8.59h2.67v8.59M7 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1m11.34 9.79h-2.67v-4.18c0-1 0-2.27-1.39-2.27s-1.6 1.08-1.6 2.2v4.25H10v-8.59h2.56v1.17h.04a2.81 2.81 0 0 1 2.53-1.39c2.71 0 3.21 1.78 3.21 4.1v4.71"/></svg>);
    case "mail":           return (<svg style={s} viewBox="0 0 24 24" {...stroke}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>);
    case "twitter":        return (<svg style={s} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.51 7.43L22 22h-6.84l-4.27-5.81L5.74 22H3l6.97-7.96L2 2h6.84l3.86 5.32L18.24 2m-1.07 18h1.86L7.5 4H5.5z"/></svg>);
    case "doc":            return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>);
    case "external":       return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="M14 4h6v6M10 14 20 4M18 14v6H4V6h6"/></svg>);
    case "search":         return (<svg style={s} viewBox="0 0 24 24" {...stroke}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>);
    case "terminal":       return (<svg style={s} viewBox="0 0 24 24" {...stroke}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>);
    case "command":        return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="M9 6V5a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v1M9 18v1a3 3 0 1 1-3-3h12a3 3 0 1 1-3 3v-1M9 6h6v12H9z"/></svg>);
    case "ship":           return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="M3 18s2-1 4-1 3 2 5 2 3-2 5-2 4 1 4 1M5 14V7l7-3 7 3v7M9 11h6"/></svg>);
    case "compass":        return (<svg style={s} viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9"/><path d="m9 15 1.5-4.5L15 9l-1.5 4.5z"/></svg>);
    case "book":           return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5"/></svg>);
    case "lightning":      return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="m13 2-9 13h7l-1 7 9-13h-7z"/></svg>);
    case "home":           return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="m3 11 9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/></svg>);
    case "user":           return (<svg style={s} viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>);
    case "briefcase":      return (<svg style={s} viewBox="0 0 24 24" {...stroke}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></svg>);
    case "layers":         return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 18l9 5 9-5"/></svg>);
    case "atom":           return (<svg style={s} viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>);
    case "send":           return (<svg style={s} viewBox="0 0 24 24" {...stroke}><path d="m3 11 18-8-8 18-2-8z"/></svg>);
    default: return null;
  }
}

// ---------- CUSTOM CURSOR + SPOTLIGHT ----------
function CustomCursor({ enabled }) {
  const dot = useRef(null);
  const ring = useRef(null);
  const spot = useRef(null);
  useEffect(() => {
    if (!enabled) { document.body.dataset.cursor = "off"; return; }
    document.body.dataset.cursor = "on";
    let mx = window.innerWidth/2, my = window.innerHeight/2;
    let rx = mx, ry = my, sx = mx, sy = my;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const over = (e) => {
      const t = e.target;
      const isHover = t.closest && t.closest('a,button,.proj-card,.repo-card,[data-hover]');
      ring.current?.classList.toggle('hover', !!isHover);
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      sx += (mx - sx) * 0.06;
      sy += (my - sy) * 0.06;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      if (spot.current) spot.current.style.transform = `translate(${sx}px, ${sy}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    const id = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      cancelAnimationFrame(id);
    };
  }, [enabled]);
  if (!enabled) return null;
  return (<>
    <div ref={spot} className="spotlight"></div>
    <div ref={ring} className="cursor-ring"></div>
    <div ref={dot} className="cursor-dot"></div>
  </>);
}

// ---------- TOPBAR ----------
function TopBar({ onCmd }) {
  const [t, setT] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      const opts = { timeZone: "Europe/Paris", hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false };
      setT(d.toLocaleTimeString('en-GB', opts));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="topbar">
      <div className="brand">
        <div className="brand-mark"></div>
        <span>YV<span style={{color:'var(--text-3)', marginLeft:8}}>// portfolio.os</span></span>
      </div>
      <div style={{display:'flex', gap: 28, alignItems:'center'}}>
        <span>TLS·{t}</span>
        <span className="status"><span className="status-dot"></span> AVAILABLE</span>
      </div>
    </div>
  );
}

// ---------- DOCK ----------
const NAV = [
  { id: "hero",       label: "01 / Index",      icon: "home" },
  { id: "about",      label: "02 / About",      icon: "user" },
  { id: "experience", label: "03 / Experience", icon: "briefcase" },
  { id: "projects",   label: "04 / Work",       icon: "layers" },
  { id: "skills",     label: "05 / Skills",     icon: "atom" },
  { id: "github",     label: "06 / Activity",   icon: "github" },
  { id: "contact",    label: "07 / Contact",    icon: "send" },
];
function Dock({ active, onCmd }) {
  return (
    <nav className="dock" aria-label="Section navigation">
      {NAV.map(n => (
        <a key={n.id} href={`#${n.id}`} className={`dock-btn ${active === n.id ? 'active': ''}`}
          data-hover>
          <Icon name={n.icon} size={13} />
          <span style={{display:'none'}}>{n.label}</span>
        </a>
      ))}
      <span className="dock-sep"></span>
      <button className="dock-btn" onClick={onCmd} data-hover>
        <span className="kbd">⌘</span><span className="kbd">K</span>
      </button>
    </nav>
  );
}

// ---------- COMMAND PALETTE ----------
function CmdPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const items = useMemo(() => ([
    { section: "Navigate", items: [
      { label: "Go to Index",       action: () => location.hash = "#hero",       hint: "G H", icon: "home" },
      { label: "Go to About",       action: () => location.hash = "#about",      hint: "G A", icon: "user" },
      { label: "Go to Experience",  action: () => location.hash = "#experience", hint: "G E", icon: "briefcase" },
      { label: "Go to Projects",    action: () => location.hash = "#projects",   hint: "G P", icon: "layers" },
      { label: "Go to Skills",      action: () => location.hash = "#skills",     hint: "G S", icon: "atom" },
      { label: "Go to Contact",     action: () => location.hash = "#contact",    hint: "G C", icon: "send" },
    ]},
    { section: "Links", items: [
      { label: "GitHub · @va-yash",            action: () => window.open("https://github.com/va-yash", "_blank"), icon: "github" },
      { label: "LinkedIn · yashraj-vasishtha", action: () => window.open("https://linkedin.com/in/yashraj-vasishtha", "_blank"), icon: "linkedin" },
      { label: "Email me",                     action: () => window.location.href = "mailto:vasishtha.yashraj@gmail.com", icon: "mail" },
      { label: "Open Roast-Me (live)",         action: () => window.open("https://roast-me.me", "_blank"), icon: "external" },
      { label: "Open My-Destiny (live)",       action: () => window.open("https://my-destiny-murex.vercel.app", "_blank"), icon: "external" },
    ]},
    { section: "Actions", items: [
      { label: "Toggle terminal",  action: () => window.dispatchEvent(new CustomEvent('toggle-term')), hint: "T", icon: "terminal" },
      { label: "Download résumé",  action: () => alert("Résumé download — wire in your PDF link"), icon: "doc" },
    ]},
  ]), []);
  const flat = items.flatMap(s => s.items.map(i => ({ ...i, section: s.section })));
  const filtered = q ? flat.filter(i => i.label.toLowerCase().includes(q.toLowerCase())) : flat;

  useEffect(() => { setIdx(0); }, [q]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(i => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setIdx(i => Math.max(i - 1, 0)); }
      if (e.key === 'Enter')     { e.preventDefault(); filtered[idx]?.action(); onClose(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, idx, filtered, onClose]);

  if (!open) return null;
  let cursorIndex = 0;
  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd-box" onClick={e => e.stopPropagation()}>
        <input className="cmd-input" autoFocus placeholder="Type a command or search…" value={q} onChange={e => setQ(e.target.value)} />
        <div className="cmd-list">
          {q
            ? filtered.map((it, i) => (
                <div key={i} className={`cmd-item ${i === idx ? 'active': ''}`}
                  onClick={() => { it.action(); onClose(); }}
                  onMouseEnter={() => setIdx(i)}>
                  <span className="ico"><Icon name={it.icon} /></span>
                  {it.label}
                  {it.hint && <span className="hint">{it.hint}</span>}
                </div>
              ))
            : items.map((s, si) => (
                <React.Fragment key={si}>
                  <div className="cmd-section">{s.section}</div>
                  {s.items.map((it) => {
                    const my = cursorIndex++;
                    return (
                      <div key={it.label} className={`cmd-item ${my === idx ? 'active': ''}`}
                        onClick={() => { it.action(); onClose(); }}
                        onMouseEnter={() => setIdx(my)}>
                        <span className="ico"><Icon name={it.icon} /></span>
                        {it.label}
                        {it.hint && <span className="hint">{it.hint}</span>}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))
          }
        </div>
      </div>
    </div>
  );
}

// ---------- TERMINAL ----------
function Terminal() {
  const [open, setOpen] = useState(false);
  const [hist, setHist] = useState([
    { type: "out", txt: "yv-portfolio v1.0 — type 'help' for commands" },
  ]);
  const [val, setVal] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    const t = (e) => setOpen(o => !o);
    window.addEventListener('toggle-term', t);
    return () => window.removeEventListener('toggle-term', t);
  }, []);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [hist]);

  const run = (cmd) => {
    const c = cmd.trim().toLowerCase();
    let out = [];
    if (!c) return;
    switch (c) {
      case "help":
        out = ["available: about, projects, stack, contact, gh, sudo, clear, joke"];
        break;
      case "about":
        out = ["yashraj vasishtha — full-stack engineer based in toulouse.", "msc enac · ex-airbus zeroe · ex-capgemini · ai builder."];
        break;
      case "projects":
        out = window.YASH.projects.map(p => `→ ${p.title}  ·  ${p.cat}`);
        break;
      case "stack":
        out = ["next.js · react · ts · fastapi · python · claude · postgres · vercel · railway"];
        break;
      case "contact":
        out = ["mail: vasishtha.yashraj@gmail.com", "tel:  +33 7 45 36 03 54"];
        break;
      case "gh":
        out = ["github.com/va-yash"];
        break;
      case "sudo":
        out = ["nice try."];
        break;
      case "joke":
        out = ["why did the saturn return cross the road? to deliver a personalised existential crisis."];
        break;
      case "clear":
        setHist([]); setVal(""); return;
      default:
        out = [`zsh: command not found: ${c}`, "type 'help' to see commands."];
    }
    setHist(h => [...h, { type:"in", txt: c }, ...out.map(l => ({ type:"out", txt: l }))]);
    setVal("");
  };

  return (<>
    {!open && (
      <button className="term-fab" onClick={() => setOpen(true)} title="Open terminal" data-hover>
        <Icon name="terminal" size={18}/>
      </button>
    )}
    {open && (
      <div className="terminal">
        <div className="term-bar">
          <span style={{display:'flex', gap:6}}>
            <span style={{width:10,height:10,borderRadius:99,background:'#ff5f57', cursor:'pointer'}} onClick={() => setOpen(false)}></span>
            <span style={{width:10,height:10,borderRadius:99,background:'#febc2e'}}></span>
            <span style={{width:10,height:10,borderRadius:99,background:'#28c840'}}></span>
          </span>
          <span style={{marginLeft:10}}>~/yashraj — zsh</span>
        </div>
        <div className="term-body" ref={bodyRef}>
          {hist.map((h, i) => h.type === "in"
            ? <div key={i} className="term-line"><span className="term-prompt">$</span><span>{h.txt}</span></div>
            : <div key={i} style={{color: h.txt.startsWith('zsh:') ? 'var(--hot)' : 'var(--text-1)'}}>{h.txt}</div>
          )}
          <form className="term-line" onSubmit={(e) => { e.preventDefault(); run(val); }}>
            <span className="term-prompt">$</span>
            <input className="term-input" autoFocus value={val} onChange={e => setVal(e.target.value)} />
          </form>
        </div>
      </div>
    )}
  </>);
}

// ---------- LOADER ----------
function Loader({ onDone, enabled }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(!enabled);
  useEffect(() => {
    if (!enabled) return;
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 4);
      setPct(Math.round(p));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => { setDone(true); onDone && onDone(); }, 350);
      }
    }, 110);
    return () => clearInterval(id);
  }, [enabled, onDone]);
  if (!enabled) return null;
  return (
    <div className={`loader ${done ? 'hide' : ''}`}>
      <div className="loader-mark">
        <div className="brand-mark" style={{width:48, height:48, borderRadius:12}}></div>
        <div className="loader-name italic"><span style={{color:'var(--text-2)'}}>compiling </span>Yashraj.</div>
        <div className="loader-bar"><b/></div>
        <div className="loader-pct">{String(pct).padStart(3,'0')}% · sourcing modules</div>
      </div>
    </div>
  );
}

// ---------- REVEAL HOOK ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-stagger');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---------- SECTION OBSERVER ----------
function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const ids = NAV.map(n => n.id);
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { threshold: [0.3, 0.5, 0.7], rootMargin: "-20% 0px -20% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

Object.assign(window, { Icon, CustomCursor, TopBar, Dock, CmdPalette, Terminal, Loader, useReveal, useActiveSection, NAV });
