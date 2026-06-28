import{u as a,b as n,h as s,r as d,k as p,j as e}from"./index-77d2b444.js";import{n as r,m as u,a as o,b as l,t as x,c as m,d as c,e as g,f as h,g as b,S as k,A as f}from"./SignUpPage.styled-3c2192c3.js";const w=r.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: -10;
  background-image: url(${u}), url(${o});
  background-size: 100%, cover;
  background-repeat: no-repeat;
  background-position:
    top 400px left 20px,
    center;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${l}), url(${o});
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
    width: 100%;
    height: 100vh;
    top: -20px;
    left: 0;
    right: 30px;
    background-image: url(${x});
    background-size: cover;
    background-position: center;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${m});
    }
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1404px;
    width: 100%;
    height: 100vh;
    top: 60px;
    left: 18px;
    background-image: url(${c}), url(${g});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      center;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${h}), url(${b});
    }
  }
`,v=r.p`
  margin-top: 20px;
  width: 280px;
  font-size: 18px;
  text-align: left;
  color: var(--secondary-color-red);
  @media (min-width: 768px) {
    width: 320px;
    margin-right: auto;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 133px;
  }
`,E=()=>{const i=a(),t=n(s);return d.useEffect(()=>()=>{i(p())},[i]),e.jsxs(k,{children:[e.jsx(w,{}),e.jsx(f,{}),t&&e.jsx(v,{children:t})]})};export{E as default};
