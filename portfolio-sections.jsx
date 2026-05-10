// Portfolio sections — Hero, About, Experience, Projects, Skills, GitHub, Testimonials, Contact

const Y = window.YASH;

// ---------- HERO ----------
function Hero({ variant }) {
  const [tokenIdx, setTokenIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTokenIdx(i => (i + 1) % Y.taglineTokens.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="hero" className="hero" data-screen-label="01 Hero">
      <div className="hero-content">
        <div className="eyebrow reveal" style={{marginBottom: 32}}>Yashraj Vasishtha · Engineer · Toulouse → Globe</div>
        <h1 className="hero-name reveal">
          <span className="gradient">Yashraj</span><br/>
          <span className="stroke">Vasishtha.</span>
        </h1>

        <div className="hero-row">
          <div>
            <p className="hero-tag reveal" style={{transitionDelay: '120ms'}}>
              {Y.tagline}{" "}
              <em key={tokenIdx} style={{display:'inline-block', minWidth: '8ch', color:'var(--accent)'}}>
                {Y.taglineTokens[tokenIdx]}
              </em>
              {" "}— shipping production AI tools, deploying to Vercel & Railway, and writing READMEs that actually run.
            </p>
            <div className="hero-ctas reveal" style={{transitionDelay: '240ms'}}>
              <a className="btn btn-primary" href="#projects" data-hover>
                View work <Icon name="arrow-right" size={14}/>
              </a>
              <a className="btn btn-ghost" href="#contact" data-hover>
                Get in touch <Icon name="arrow-up-right" size={14}/>
              </a>
              <button className="btn btn-ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-cmd'))} data-hover>
                <span className="kbd">⌘</span><span className="kbd">K</span> Quick nav
              </button>
            </div>
          </div>

          <div className="hero-meta reveal" style={{transitionDelay: '320ms'}}>
            <div className="hero-meta-row"><span className="k">// based</span><span className="v">{Y.location}</span></div>
            <div className="hero-meta-row"><span className="k">// status</span><span className="v" style={{color:'var(--green)'}}>● {Y.status}</span></div>
            <div className="hero-meta-row"><span className="k">// stack</span><span className="v">Next.js · FastAPI · Claude</span></div>
            <div className="hero-meta-row"><span className="k">// origin</span><span className="v">Aerospace eng. → builder</span></div>
            <div className="hero-meta-row"><span className="k">// channel</span><span className="v">vasishtha.yashraj@gmail.com</span></div>
          </div>
        </div>
      </div>

      <div>
        <div className="tech-marquee reveal" style={{padding:'24px 0'}}>
          <div className="tech-track">
            {[...Y.techPills, ...Y.techPills].map((p, i) => (
              <span key={i} className="tech-pill"><span className="dot"></span>{p}</span>
            ))}
          </div>
        </div>
        <div className="hero-strip reveal-stagger">
          {Y.stats.map((s, i) => (
            <div key={i} className="hero-strip-item">
              <div className="hero-strip-num">{s.num}</div>
              <div className="hero-strip-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ABOUT ----------
function About() {
  return (
    <section id="about" className="section" data-screen-label="02 About">
      <div className="eyebrow reveal">02 / The operator</div>
      <h2 className="h-section reveal">
        I build <span className="italic" style={{color:'var(--accent)'}}>strange combinations</span><br/>
        that ship to production.
      </h2>

      <div className="about-grid">
        <div>
          <p className="lede reveal">
            I'm a full-stack engineer with a Master's in air-transport operations from <strong>ENAC Toulouse</strong> and two years inside aerospace at <strong>Capgemini</strong> and <strong>Airbus</strong>. By night I ship AI products grounded in classical Vedic mathematics. The two halves rhyme more than you'd think.
          </p>
          <p className="lede reveal" style={{marginTop: 20}}>
            My approach is the same in either world: <em className="italic">document the boring, ship the bold, measure the impact.</em> Production is where engineering becomes design, and where most ideas earn their right to exist.
          </p>

          <div className="philosophy reveal-stagger">
            {Y.philosophy.map((p, i) => (
              <div key={i} className="phil-card" data-hover>
                <div className="ico"><Icon name={p.icon} size={16}/></div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lab-window reveal" style={{transitionDelay: '180ms'}}>
          <div className="lab-titlebar">
            <div className="dots"><span></span><span></span><span></span></div>
            <span className="path">~/yashraj/about.ts</span>
            <span style={{marginLeft:'auto', color:'var(--text-3)'}}>↳ live</span>
          </div>
          <div className="lab-body">
            <pre className="code-block" style={{margin:0, whiteSpace:'pre-wrap'}}>
<span className="code-comment">{`// who.ts — single source of truth\n`}</span>
<span className="code-key">const</span>{` `}<span className="code-fn">yashraj</span>{` = {\n  `}
<span className="code-key">name</span>{`: `}<span className="code-str">"Yashraj Vasishtha"</span>{`,\n  `}
<span className="code-key">role</span>{`: `}<span className="code-str">"Full-stack · AI · Aviation"</span>{`,\n  `}
<span className="code-key">location</span>{`: `}<span className="code-str">"Toulouse, FR"</span>{`,\n  `}
<span className="code-key">stack</span>{`: [`}<span className="code-str">"Next.js"</span>{`, `}<span className="code-str">"FastAPI"</span>{`, `}<span className="code-str">"Claude"</span>{`],\n  `}
<span className="code-key">domains</span>{`: [\n    `}<span className="code-str">"AI products"</span>{`,\n    `}<span className="code-str">"sustainable aviation"</span>{`,\n    `}<span className="code-str">"vedic computation"</span>{`,\n    `}<span className="code-str">"logistics & supply chain"</span>{`,\n  ],\n  `}
<span className="code-key">currently</span>{`: `}<span className="code-str">"shipping & looking for the next thing"</span>{`,\n  `}
<span className="code-key">contact</span>{`: () => `}<span className="code-fn">router</span>{`.`}<span className="code-fn">push</span>{`(`}<span className="code-str">"#contact"</span>{`),\n}\n\n`}
<span className="code-key">export default</span>{` `}<span className="code-fn">yashraj</span>{`;`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- EXPERIENCE ----------
function Experience() {
  return (
    <section id="experience" className="section" data-screen-label="03 Experience">
      <div className="eyebrow reveal">03 / The operating system</div>
      <h2 className="h-section reveal">A track record across<br/><span className="italic" style={{color:'var(--violet)'}}>aerospace, AI and product.</span></h2>

      <div className="timeline reveal-stagger">
        {Y.experience.map((e, i) => (
          <div key={i} className="timeline-item" data-hover>
            <div className="tl-meta">
              <span className="year">{String(i+1).padStart(2,'0')} · {e.company.split(',')[0]}</span>
              {e.year}
            </div>
            <div className="tl-body">
              <h3 className="tl-role">{e.role}</h3>
              <div className="tl-company">{e.company}</div>
              <p className="tl-desc">{e.desc}</p>
              <div className="tl-stats">
                {e.stats.map((s, j) => (
                  <div key={j} className="tl-stat"><strong>{s.v}</strong>{s.l}</div>
                ))}
              </div>
              <span className="tl-arrow"><Icon name="arrow-up-right" size={20}/></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- PROJECT MOCKUPS ----------
function ProjectMock({ kind }) {
  if (kind === "roast") {
    return (
      <div className="mock-window">
        <div className="mock-bar"><span/><span/><span/><span style={{marginLeft:8, fontFamily:'Geist Mono, monospace', fontSize:10, color:'var(--text-3)'}}>roast-me.me</span></div>
        <div className="mock-content" style={{padding:14, display:'flex', flexDirection:'column', gap:10}}>
          <div style={{fontFamily:'Instrument Serif, serif', fontStyle:'italic', fontSize:18, lineHeight:1.2}}>
            Your villain name is <span style={{color:'var(--accent)'}}>The Saturn-Returner</span>.
          </div>
          <div style={{display:'flex', gap:6, flexWrap:'wrap', fontFamily:'Geist Mono, monospace', fontSize:9}}>
            {["MILD","SPICY","NO MERCY"].map((t, i) => (
              <span key={i} style={{padding:'4px 8px', borderRadius:99, border:'1px solid var(--line)', color: i===2 ? 'var(--accent)' : 'var(--text-2)', borderColor: i===2 ? 'var(--accent)':'var(--line)', background: i===2 ? 'rgba(78,161,255,0.08)':'transparent'}}>{t}</span>
            ))}
          </div>
          <div style={{fontSize:11, color:'var(--text-2)', lineHeight:1.55}}>
            "You have Saturn in the 10th house, which means you've spent your twenties micromanaging a future you haven't even consented to yet…"<span style={{borderRight:'2px solid var(--accent)', marginLeft:2, animation:'pulse 1.2s infinite'}}>&nbsp;</span>
          </div>
          <div style={{display:'flex', gap:8, marginTop:'auto', fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--text-3)'}}>
            <span>D1 ✓</span><span>D9 ✓</span><span>D10 ✓</span>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "destiny") {
    return (
      <div className="mock-window">
        <div className="mock-bar"><span/><span/><span/><span style={{marginLeft:8, fontFamily:'Geist Mono, monospace', fontSize:10, color:'var(--text-3)'}}>my-destiny · ai advisor</span></div>
        <div className="mock-content" style={{padding:14, display:'flex', flexDirection:'column', gap:8}}>
          <div style={{display:'flex', gap:8, alignItems:'flex-start'}}>
            <div style={{width:24, height:24, borderRadius:99, background:'linear-gradient(135deg, var(--accent), var(--violet))', flexShrink:0}}></div>
            <div style={{flex:1, padding:'10px 12px', background:'rgba(255,255,255,0.025)', borderRadius:10, fontSize:11, color:'var(--text-1)', lineHeight:1.5}}>
              You're entering Saturn Mahadasha in 2027 — discipline before destiny.
            </div>
          </div>
          <div style={{display:'flex', gap:8, alignItems:'flex-start', justifyContent:'flex-end'}}>
            <div style={{padding:'10px 12px', background:'rgba(78,161,255,0.10)', border:'1px solid var(--accent)', borderRadius:10, fontSize:11, color:'var(--text)'}}>
              what's my dasha lord?
            </div>
          </div>
          <div style={{marginTop:'auto', display:'flex', gap:6, fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--text-3)'}}>
            <span style={{padding:'3px 6px', border:'1px solid var(--line)', borderRadius:6}}>D1</span>
            <span style={{padding:'3px 6px', border:'1px solid var(--line)', borderRadius:6}}>D9</span>
            <span style={{padding:'3px 6px', border:'1px solid var(--line)', borderRadius:6}}>NAKSHATRA</span>
            <span style={{padding:'3px 6px', border:'1px solid var(--line)', borderRadius:6}}>VIMSHOTTARI</span>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "tailor") {
    return (
      <div className="mock-window">
        <div className="mock-bar"><span/><span/><span/><span style={{marginLeft:8, fontFamily:'Geist Mono, monospace', fontSize:10, color:'var(--text-3)'}}>tailor-it</span></div>
        <div className="mock-content" style={{padding:0, display:'grid', gridTemplateColumns:'1fr 1fr', height:'100%'}}>
          <div style={{padding:14, borderRight:'1px solid var(--line)', fontSize:10, color:'var(--text-2)', lineHeight:1.5}}>
            <div style={{fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--text-3)', marginBottom:6}}>JOB DESCRIPTION</div>
            <div>We're looking for a senior full-stack engineer with experience in Next.js, FastAPI, and AI integrations…</div>
          </div>
          <div style={{padding:14, fontSize:10, color:'var(--text-1)', lineHeight:1.5, background:'rgba(78,161,255,0.04)'}}>
            <div style={{fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--accent)', marginBottom:6}}>↳ TAILORED CV</div>
            <div><strong style={{color:'var(--text)'}}>Senior Full-Stack Engineer</strong><br/>Shipped 5 production AI apps on Next.js + FastAPI…</div>
            <div style={{marginTop:8, fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--green)'}}>+82% match score</div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "ugc") {
    return (
      <div className="mock-window">
        <div className="mock-bar"><span/><span/><span/><span style={{marginLeft:8, fontFamily:'Geist Mono, monospace', fontSize:10, color:'var(--text-3)'}}>ugc.logistics</span></div>
        <div className="mock-content" style={{padding:14, display:'flex', flexDirection:'column', gap:10}}>
          <div style={{fontWeight:600, fontSize:18, letterSpacing:'-0.02em'}}>Freight, made simple.</div>
          <div style={{fontSize:10, color:'var(--text-2)', lineHeight:1.5}}>Pan-India trucking logistics for industrial cargo. Live route tracking, single-window quotes.</div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6, marginTop:'auto'}}>
            {["20K+ km","98% on-time","24/7 ops"].map((s, i) => (
              <div key={i} style={{padding:8, border:'1px solid var(--line)', borderRadius:8, fontSize:9, fontFamily:'Geist Mono, monospace', textAlign:'center', color:'var(--text-1)'}}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (kind === "border") {
    return (
      <div className="mock-window">
        <div className="mock-bar"><span/><span/><span/><span style={{marginLeft:8, fontFamily:'Geist Mono, monospace', fontSize:10, color:'var(--text-3)'}}>icao · global border security</span></div>
        <div className="mock-content" style={{padding:0, position:'relative', overflow:'hidden'}}>
          <svg viewBox="0 0 400 220" style={{width:'100%', height:'100%'}}>
            <defs>
              <radialGradient id="globe" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(78,161,255,0.4)"/>
                <stop offset="100%" stopColor="rgba(78,161,255,0)"/>
              </radialGradient>
            </defs>
            <circle cx="200" cy="110" r="80" fill="url(#globe)"/>
            <circle cx="200" cy="110" r="80" fill="none" stroke="var(--accent)" strokeOpacity="0.4"/>
            <ellipse cx="200" cy="110" rx="80" ry="30" fill="none" stroke="var(--accent)" strokeOpacity="0.25"/>
            <ellipse cx="200" cy="110" rx="30" ry="80" fill="none" stroke="var(--accent)" strokeOpacity="0.25"/>
            {[[80,90],[140,60],[260,80],[300,140],[180,180],[120,150]].map(([x,y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="3" fill="var(--accent)"/>
                <circle cx={x} cy={y} r="8" fill="none" stroke="var(--accent)" strokeOpacity="0.5"/>
                <line x1={x} y1={y} x2="200" y2="110" stroke="var(--accent)" strokeOpacity="0.2" strokeDasharray="2,2"/>
              </g>
            ))}
          </svg>
          <div style={{position:'absolute', bottom:10, left:14, fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--text-3)'}}>
            Verified passengers · realtime · 6 hubs
          </div>
        </div>
      </div>
    );
  }
  return null;
}

// ---------- PROJECTS ----------
function Projects() {
  const cats = ["All", "AI", "Web", "Aviation"];
  const [filter, setFilter] = useState("All");
  const filtered = Y.projects.filter(p =>
    filter === "All" ? true : p.cat.toLowerCase().includes(filter.toLowerCase())
  );

  const handleMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section id="projects" className="section" data-screen-label="04 Projects">
      <div className="eyebrow reveal">04 / Selected work</div>
      <h2 className="h-section reveal">Five things shipped to production.<br/><span className="italic" style={{color:'var(--accent)'}}>Each one solves a real problem.</span></h2>

      <div className="proj-filters reveal">
        {cats.map(c => (
          <button key={c} className={`proj-filter ${filter === c ? 'active': ''}`} onClick={() => setFilter(c)} data-hover>
            {c.toLowerCase()} <span style={{color:'var(--text-3)', marginLeft:4}}>
              ({c === "All" ? Y.projects.length : Y.projects.filter(p => p.cat.toLowerCase().includes(c.toLowerCase())).length})
            </span>
          </button>
        ))}
      </div>

      <div className="proj-grid reveal-stagger">
        {filtered.map((p, i) => (
          <article
            key={p.id}
            className={`proj-card ${i === 0 ? 'featured' : ''}`}
            onMouseMove={handleMouse}
            data-hover>
            <div className="proj-preview">
              <ProjectMock kind={p.mock}/>
            </div>
            <div className="proj-meta">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div className="proj-cat">{p.cat}</div>
                <span style={{
                  fontFamily:'Geist Mono, monospace', fontSize:10,
                  padding:'3px 8px', borderRadius:99,
                  border:'1px solid var(--accent)', color:'var(--accent)',
                  background:'rgba(78,161,255,0.06)'
                }}>{p.tag}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map((s, j) => <span key={j} className="proj-stack-pill">{s}</span>)}
              </div>
              <div className="proj-actions">
                {p.live && p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link" data-hover>
                    Live <Icon name="external" size={12}/>
                  </a>
                )}
                {p.repo && p.repo !== "#" && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="proj-link" data-hover>
                    <Icon name="github" size={12}/> Repo
                  </a>
                )}
                <a href="#contact" className="proj-link" data-hover style={{marginLeft:'auto'}}>
                  Case study <Icon name="arrow-up-right" size={12}/>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- SKILLS CONSTELLATION ----------
function Skills() {
  const cats = Object.keys(Y.skills);
  const [active, setActive] = useState(cats[0]);
  const items = Y.skills[active];

  // place category nodes around a circle
  const cw = 1000, ch = 540;
  const cx = cw/2, cy = ch/2;
  const catPositions = cats.map((_, i) => {
    const a = (i / cats.length) * Math.PI * 2 - Math.PI/2;
    return { x: cx + Math.cos(a) * 220, y: cy + Math.sin(a) * 180 };
  });
  const itemPositions = items.map((_, i) => {
    const a = (i / items.length) * Math.PI * 2 - Math.PI/2;
    const r = 110;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.85 };
  });

  return (
    <section id="skills" className="section" data-screen-label="05 Skills">
      <div className="eyebrow reveal">05 / The toolkit</div>
      <h2 className="h-section reveal">A constellation, not a checklist.</h2>

      <div className="skills-wrap reveal" style={{aspectRatio: '16/8.5'}}>
        <svg className="skills-svg" viewBox={`0 0 ${cw} ${ch}`} preserveAspectRatio="none">
          {/* concentric rings */}
          <circle cx={cx} cy={cy} r="60"  fill="none" stroke="rgba(255,255,255,0.06)"/>
          <circle cx={cx} cy={cy} r="115" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2,4"/>
          <circle cx={cx} cy={cy} r="220" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2,4"/>
          {/* cat → centre links */}
          {catPositions.map((p, i) => (
            <line key={`cl-${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y}
              stroke={cats[i] === active ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}
              strokeWidth="1" strokeDasharray="3,3"/>
          ))}
          {/* item links */}
          {itemPositions.map((p, i) => (
            <line key={`il-${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--accent)" strokeOpacity="0.18"/>
          ))}
        </svg>

        {/* centre */}
        <div className="sk-node center" style={{left:'50%', top:'50%'}}>
          <div className="sk-orb">{active}</div>
        </div>

        {/* category pills */}
        {cats.map((c, i) => {
          const p = catPositions[i];
          return (
            <button key={c} className="sk-cat" onClick={() => setActive(c)} data-hover
              style={{
                left: `${(p.x/cw)*100}%`, top: `${(p.y/ch)*100}%`,
                background: c === active ? 'var(--accent)' : 'rgba(78,161,255,0.08)',
                color: c === active ? '#fff' : 'var(--accent)',
                borderColor: 'var(--accent)',
              }}>
              {c}
            </button>
          );
        })}

        {/* items */}
        {items.map((it, i) => {
          const p = itemPositions[i];
          return (
            <div key={`${active}-${it}`} className="sk-node float"
              style={{
                left: `${(p.x/cw)*100}%`, top: `${(p.y/ch)*100}%`,
                animationDelay: `${i * 0.2}s`,
              }}>
              <div className="sk-orb">{it.slice(0,2).toUpperCase()}</div>
              <div>{it}</div>
            </div>
          );
        })}
      </div>

      <div style={{display:'flex', gap:14, marginTop: 16, fontFamily:'Geist Mono, monospace', fontSize:11, color:'var(--text-3)', flexWrap:'wrap'}}>
        <span>↳ Click a category to orbit its skills</span>
        <span style={{marginLeft:'auto'}}>{cats.length} clusters · {Object.values(Y.skills).flat().length} nodes</span>
      </div>
    </section>
  );
}

// ---------- GITHUB PANEL ----------
function GithubPanel() {
  const heat = Y.heatmap;
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (
    <section id="github" className="section" data-screen-label="06 GitHub">
      <div className="eyebrow reveal">06 / Real activity</div>
      <h2 className="h-section reveal">Working in public.<br/><span className="italic" style={{color:'var(--violet)'}}>@va-yash</span></h2>

      <div className="gh-grid">
        <div className="panel reveal">
          <div className="panel-h">
            <span>Contribution graph · last 12 months</span>
            <span className="stat">{Y.github.contribCount} contributions · {Y.github.streak}-day streak 🔥</span>
          </div>
          <div style={{display:'flex', gap: 8, alignItems:'flex-start'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', height: 110, fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--text-3)'}}>
              <span>Mon</span><span>Wed</span><span>Fri</span>
            </div>
            <div style={{flex:1}}>
              <div style={{display:'flex', justifyContent:'space-between', fontFamily:'Geist Mono, monospace', fontSize:9, color:'var(--text-3)', marginBottom:6}}>
                {months.map(m => <span key={m}>{m}</span>)}
              </div>
              <div style={{display:'grid', gridTemplateColumns:`repeat(${heat.length}, 1fr)`, gap: 3}}>
                {heat.map((week, w) => (
                  <div key={w} style={{display:'flex', flexDirection:'column', gap:3}}>
                    {week.map((lvl, d) => (
                      <div key={d} className={`heat-cell heat-l${lvl}`} title={`Week ${w+1}, Day ${d+1}: lvl ${lvl}`} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="heat-legend">
                <span>less</span>
                <span className="heat-cell"></span>
                <span className="heat-cell heat-l1"></span>
                <span className="heat-cell heat-l2"></span>
                <span className="heat-cell heat-l3"></span>
                <span className="heat-cell heat-l4"></span>
                <span>more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="panel reveal" style={{transitionDelay: '120ms'}}>
          <div className="panel-h"><span>Languages</span><span className="stat">{Y.github.repos} repos · {Y.github.stars}★</span></div>
          {Y.github.languages.map((l, i) => (
            <div key={i} className="lang-row">
              <span style={{width: 100, color: 'var(--text-1)'}}>{l.name}</span>
              <div className="lang-bar"><b style={{width: `${l.pct}%`, background: l.color, boxShadow: `0 0 8px ${l.color}88`}}/></div>
              <span className="lang-pct">{l.pct}%</span>
            </div>
          ))}

          <div style={{marginTop: 22, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 8}}>
            <div style={{padding:12, border:'1px solid var(--line)', borderRadius:10, fontFamily:'Geist Mono, monospace'}}>
              <div style={{fontSize:18, color:'var(--text)'}}>{Y.github.contribCount}</div>
              <div style={{fontSize:9, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.1em'}}>contribs</div>
            </div>
            <div style={{padding:12, border:'1px solid var(--line)', borderRadius:10, fontFamily:'Geist Mono, monospace'}}>
              <div style={{fontSize:18, color:'var(--accent)'}}>{Y.github.streak}d</div>
              <div style={{fontSize:9, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.1em'}}>streak</div>
            </div>
            <div style={{padding:12, border:'1px solid var(--line)', borderRadius:10, fontFamily:'Geist Mono, monospace'}}>
              <div style={{fontSize:18, color:'var(--violet)'}}>{Y.github.stars}★</div>
              <div style={{fontSize:9, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.1em'}}>stars</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 12, marginTop: 20}} className="reveal-stagger">
        {Y.github.pinned.map((r, i) => (
          <a key={i} className="repo-card" href={`https://github.com/va-yash/${r.name}`} target="_blank" rel="noreferrer" data-hover>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <Icon name="github" size={14}/>
              <span className="repo-name">{r.name}</span>
            </div>
            <div className="repo-desc">{r.desc}</div>
            <div className="repo-meta">
              <span style={{display:'inline-flex', alignItems:'center', gap:6}}>
                <span style={{width:8, height:8, borderRadius:99, background: Y.github.languages.find(l => l.name === r.lang)?.color || '#888'}}></span>
                {r.lang}
              </span>
              <span>★ {r.stars}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
function Testimonials() {
  return (
    <section className="section" data-screen-label="Testimonials" id="testimonials">
      <div className="eyebrow reveal">07 / Sounding board</div>
      <h2 className="h-section reveal">What others have said.</h2>
      <div className="testi-grid reveal-stagger">
        {Y.testimonials.map((t, i) => (
          <div key={i} className="testi-card" data-hover>
            <div className="quote">"</div>
            <p>{t.quote}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.avatar}</div>
              <div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- CONTACT ----------
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", msg:"" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name:"", email:"", msg:"" });
  };

  return (
    <>
      <section id="contact" className="contact" data-screen-label="07 Contact">
        <div className="eyebrow reveal" style={{justifyContent:'center', display:'flex'}}>08 / Let's build something</div>
        <h2 className="contact-h reveal">
          So — what are<br/>
          <em>we building?</em>
        </h2>
        <p className="contact-sub reveal">
          Open to senior full-stack roles, AI engineering, aviation × tech crossovers, and the occasional weird side project.
          Reply within 24 hours, usually less.
        </p>

        <form className="contact-form reveal" onSubmit={submit}>
          <input placeholder="Your name" value={form.name} onChange={e => setForm({...form, name:e.target.value})}/>
          <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email:e.target.value})}/>
          <textarea className="full" placeholder="What's the project / role / strange idea?" value={form.msg} onChange={e => setForm({...form, msg:e.target.value})}/>
          <button className="btn btn-accent full" type="submit" data-hover style={{justifyContent:'center'}}>
            {sent ? "Message sent · I'll be in touch" : (<>Send message <Icon name="send" size={14}/></>)}
          </button>
        </form>

        <div className="contact-links reveal">
          <a className="contact-link" href="mailto:vasishtha.yashraj@gmail.com" data-hover><Icon name="mail" size={14}/> vasishtha.yashraj@gmail.com</a>
          <a className="contact-link" href="https://github.com/va-yash" target="_blank" rel="noreferrer" data-hover><Icon name="github" size={14}/> @va-yash</a>
          <a className="contact-link" href="https://linkedin.com/in/yashraj-vasishtha" target="_blank" rel="noreferrer" data-hover><Icon name="linkedin" size={14}/> yashraj-vasishtha</a>
          <a className="contact-link" href="#" data-hover onClick={(e) => { e.preventDefault(); alert("Wire to your résumé PDF link"); }}><Icon name="doc" size={14}/> Résumé · PDF</a>
        </div>
      </section>

      <footer className="foot">
        <div>© 2026 · Yashraj Vasishtha · Built in Toulouse with too much coffee</div>
        <div>v1.0 · last commit 2 days ago</div>
      </footer>
    </>
  );
}

Object.assign(window, { Hero, About, Experience, Projects, Skills, GithubPanel, Testimonials, Contact });
