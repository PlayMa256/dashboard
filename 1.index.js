(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{614:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(3),i=o(4);const l=a.default.div`
  ${({isOpen:e})=>e?a.css`
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100vw;
        height: 150vh;
        background-color: #07070767;
        bottom: 70%;
        transform: translateY(50%);
        z-index: 200;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      `:a.css`
        display: none;
      `}
`,s=a.default.div`
  background-color: ${e=>e.theme.style.wikiTabBackground};
  border-radius: 1.2rem;
  width: 56rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  border: ${e=>e.theme.style.mainBorder};
  box-shadow: ${e=>e.theme.style.panelBoxShadow};
  .error-title {
    font-family: ${i.b.headerFont};
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    color: ${e=>e.theme.style.primaryFontColor};
    font-family: ${i.b.contentFont};
    margin-bottom: 0;
  }
`,m=a.default.span`
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${e=>e.theme.style.buttonFontColor};

  .fas {
    position: relative;
    &:hover {
      top: 1.5px;
    }
  }
`;t.default=({state:e,onClose:t})=>n.a.createElement(a.ThemeProvider,{theme:"dark"===e.theme?i.a:i.c},n.a.createElement(l,{isOpen:e.error.display},n.a.createElement(s,null,n.a.createElement("h4",{className:"error-title"},"Whoa, partner!"),n.a.createElement("p",null,e.error.message),n.a.createElement(m,{onClick:t},n.a.createElement("i",{className:"fas fa-times-circle fa-2x"})))))}}]);
//# sourceMappingURL=1.index.js.map