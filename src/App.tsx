import React, { useEffect } from "react";

function useScrollProgress(id: string){
  useEffect(()=>{
    const el = document.getElementById(id);
    if(!el) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      (el as HTMLDivElement).style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  },[id]);
}

function Styles(){
  const css = `
  :root{--bg-a:#0b0b0c;--bg-c:#101014;--text:#fff;--muted:#ffffffbf;--muted2:#ffffff99;--border:#ffffff1f;--glass:#ffffff14;--bronze:#dd8448}
  *{box-sizing:border-box}html,body{margin:0;padding:0;background:linear-gradient(135deg,var(--bg-a),var(--bg-c));color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Helvetica,Arial}
  a{color:#f7c66a}
  .container{max-width:1120px;margin:0 auto;padding:0 16px}
  .progress{position:fixed;top:0;left:0;right:0;z-index:60;pointer-events:none}
  .progress .bar{height:5px;transform-origin:left;background:linear-gradient(90deg,#b5835a,#d69c3d,#f59e0b,#a3e635);transform:scaleX(0)}
  .topbar{position:sticky;top:0;z-index:40;background:#ffffff0d;backdrop-filter:blur(14px);border-bottom:1px solid var(--border)}
  .row{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
  .brand{display:flex;align-items:center;gap:12px}
  .brand-dot{width:36px;height:36px;border-radius:14px;background:linear-gradient(135deg,#ac874d,#f59e0b,#a3e635);box-shadow:0 0 24px #ac874d73}
  .btn{border:none;border-radius:14px;padding:12px 18px;font-weight:600;color:#fff;background:linear-gradient(90deg,#ac874d,#f59e0b,#a3e635);cursor:pointer}
  .hero{padding:44px 0}
  .grid{display:grid;gap:24px}
  .card{background:var(--glass);border:1px solid var(--border);border-radius:18px;padding:18px}
  .badge{display:inline-flex;align-items:center;gap:8px;border:1px solid #ffffff33;background:#ffffff14;padding:6px 12px;border-radius:999px;font-size:12px}
  .h1{font-weight:900;line-height:1.05;font-size:clamp(32px,4vw,64px);letter-spacing:-0.02em}
  `;
  return <style dangerouslySetInnerHTML={{__html:css}}/>;
}

export default function App(){
  useScrollProgress("progress");
  return (
    <div>
      <div className="progress"><div id="progress" className="bar" /></div>
      <Styles />
      <div className="topbar">
        <div className="container row">
          <div className="brand">
            <div className="brand-dot" />
            <div style={{fontWeight:700}}>GhostLinkSafe</div>
          </div>
          <button className="btn" onClick={()=>alert("Preview only")}>Connect Wallet (Preview)</button>
        </div>
      </div>
      <section className="hero">
        <div className="container grid">
          <div>
            <div className="badge">GhostLinkSafe</div>
            <h1 className="h1">Link-based <span style={{background:"linear-gradient(90deg,#f7e3a6,#f4c27c,#c5f36a)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>instant transfers</span></h1>
            <p style={{color:"var(--muted)",maxWidth:640}}>Non-custodial link claims with expiry. Fully client-side preview, no external dependencies.</p>
          </div>
          <div className="card">
            <div style={{color:"var(--muted)",fontWeight:600,marginBottom:12}}>Demo Dashboard</div>
            <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(3,1fr)'}}>
              <div className="card" style={{padding:12}}><div style={{fontSize:13,color:"var(--muted2)"}}>Tx/sec</div><div style={{fontSize:24,fontWeight:800}}>1,248</div></div>
              <div className="card" style={{padding:12}}><div style={{fontSize:13,color:"var(--muted2)"}}>Latency</div><div style={{fontSize:24,fontWeight:800}}>~0.4s</div></div>
              <div className="card" style={{padding:12}}><div style={{fontSize:13,color:"var(--muted2)"}}>Users</div><div style={{fontSize:24,fontWeight:800}}>12.4k</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
