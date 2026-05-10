// Main app — composes everything, wires tweaks panel, command menu, keyboard shortcuts.

const { useState: useS, useEffect: useE } = React;

function App() {
  const [t, setTweak] = useTweaks(window.TWEAKS_DEFAULTS);
  const [cmdOpen, setCmdOpen] = useS(false);

  const active = useActiveSection();
  useReveal();

  useE(() => {
    document.documentElement.setAttribute('data-palette', t.palette);
  }, [t.palette]);

  useE(() => {
    let pendingG = false;
    const onKey = (e) => {
      const tgt = e.target;
      const inField = tgt && (tgt.tagName === 'INPUT' || tgt.tagName === 'TEXTAREA');
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault(); setCmdOpen(o => !o); return;
      }
      if (inField) return;
      if (e.key === '/') { e.preventDefault(); setCmdOpen(true); return; }
      if (e.key.toLowerCase() === 't') { window.dispatchEvent(new CustomEvent('toggle-term')); return; }
      if (e.key.toLowerCase() === 'g') { pendingG = true; setTimeout(() => pendingG = false, 800); return; }
      if (pendingG) {
        const map = { h: 'hero', a: 'about', e: 'experience', p: 'projects', s: 'skills', c: 'contact', i: 'github' };
        const id = map[e.key.toLowerCase()];
        if (id) { location.hash = `#${id}`; pendingG = false; }
      }
    };
    window.addEventListener('keydown', onKey);
    const openCmd = () => setCmdOpen(true);
    window.addEventListener('open-cmd', openCmd);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-cmd', openCmd);
    };
  }, []);

  return (<>
    <div className="ambient"></div>
    <div className="grid-bg"></div>
    <div className="grain"></div>

    <Loader enabled={t.showLoader}/>
    <CustomCursor enabled={t.showCursor}/>

    <TopBar/>
    {t.showDock && <Dock active={active} onCmd={() => setCmdOpen(true)}/>}
    <Terminal/>
    <CmdPalette open={cmdOpen} onClose={() => setCmdOpen(false)}/>

    <main className="app">
      <Hero variant={t.heroVariant}/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <GithubPanel/>
      <Testimonials/>
      <Contact/>
    </main>

    <TweaksPanel title="Portfolio · Tweaks">
      <TweakSection label="Palette"/>
      <TweakRadio
        label="Theme"
        value={t.palette}
        options={["electric","aurora","ember","mono"]}
        onChange={(v) => setTweak('palette', v)}/>

      <TweakSection label="Hero variant"/>
      <TweakRadio
        label="Style"
        value={t.heroVariant}
        options={["spotlight","grid"]}
        onChange={(v) => setTweak('heroVariant', v)}/>

      <TweakSection label="Chrome"/>
      <TweakToggle label="Custom cursor" value={t.showCursor} onChange={(v) => setTweak('showCursor', v)}/>
      <TweakToggle label="Floating dock"  value={t.showDock}   onChange={(v) => setTweak('showDock', v)}/>
      <TweakToggle label="Intro loader"   value={t.showLoader} onChange={(v) => setTweak('showLoader', v)}/>
    </TweaksPanel>
  </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
