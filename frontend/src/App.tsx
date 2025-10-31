import React, { useEffect, useRef } from "react";
function useScrollProgress(barId: string) {
  useEffect(() => {
    const el = document.getElementById(barId);
    if (!el) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      (el as HTMLDivElement).style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [barId]);
}
function Styles(){const css=`:root{--bg-a:#0b0b0c;--bg-c:#101014;--text:#fff;--muted:#ffffffbf;--muted2:#ffffff99;--border:#ffffff1f;--glass:#ffffff14;--bronze:#dd8448}*{box-sizing:border-box}html,body{margin:0;padding:0;background:linear-gradient(135deg,var(--bg-a),var(--bg-c));color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Helvetica,Arial}.container{max-width:1120px;margin:0 auto;padding:0 16px}.progress{position:fixed;top:0;left:0;right:0;z-index:60;pointer-events:none}.progress .bar{height:6px;transform-origin:left;background:linear-gradient(90deg,#b5835a,#d69c3d,#f59e0b,#a3e635);transform:scaleX(0)}.topbar{position:sticky;top:0;z-index:40;background:#ffffff0d;backdrop-filter:blur(18px);border-bottom:1px solid var(--border)}.row{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.brand{display:flex;align-items:center;gap:12px}.brand-dot{width:40px;height:40px;border-radius:16px;background:linear-gradient(135deg,#ac874d,#f59e0b,#a3e635);box-shadow:0 0 26px #ac874d73}.btn{border:none;border-radius:14px;padding:12px 18px;font-weight:600;color:#fff;background:linear-gradient(90deg,#ac874d,#f59e0b,#a3e635);cursor:pointer}.section{padding:48px 0}.card{background:var(--glass);border:1px solid var(--border);border-radius:20px;padding:18px}`;return <style dangerouslySetInnerHTML={{__html:css}}/>}
function App(){
  useScrollProgress("progress");
  return (<div><div className='progress'><div id='progress' className='bar'/></div>
  <Styles/>
  <div className='topbar'><div className='container row'><div className='brand'><div className='brand-dot'/><div style={{fontWeight:700}}>GhostLinkSafe</div></div><button className='btn' onClick={()=>alert('Preview: no wallet')}>Connect Wallet (Preview)</button></div></div>
  <div className='container'><div className='card'><h2 style={{marginTop:0}}>GhostLinkSafe — Preview</h2><p>Link-based, addressless transfers. Glossy UI, electric-border ready.</p></div></div>
  </div>);
}
export default App;
