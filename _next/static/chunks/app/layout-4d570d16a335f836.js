(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1108:(e,t,n)=>{Promise.resolve().then(n.bind(n,7113)),Promise.resolve().then(n.t.bind(n,8346,23)),Promise.resolve().then(n.t.bind(n,347,23))},347:()=>{},8346:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},7113:(e,t,n)=>{"use strict";n.d(t,{D:()=>c,ThemeProvider:()=>d});var r=n(2115),s=(e,t,n,r,s,a,o,l)=>{let i=document.documentElement,m=["light","dark"];function c(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?s.map(e=>a[e]||e):s;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&m.includes(t)&&(i.style.colorScheme=t)}if(r)c(r);else try{let e=localStorage.getItem(t)||n,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(r)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=r.createContext(void 0),m={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(i))?e:m},d=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:m="theme",themes:c=u,defaultTheme:d=s?"system":"light",attribute:h="data-theme",value:v,children:g,nonce:w,scriptProps:E}=e,[S,k]=r.useState(()=>f(m,d)),[C,T]=r.useState(()=>f(m)),_=v?Object.values(v):c,L=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=b());let r=v?v[t]:t,o=n?p(w):null,i=document.documentElement,m=e=>{"class"===e?(i.classList.remove(..._),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(m):m(h),l){let e=a.includes(d)?d:null,n=a.includes(t)?t:e;i.style.colorScheme=n}null==o||o()},[w]),A=r.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(m,t)}catch(e){}},[S]),P=r.useCallback(e=>{T(b(e)),"system"===S&&s&&!t&&L("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===m&&(e.newValue?k(e.newValue):A(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),r.useEffect(()=>{L(null!=t?t:S)},[t,S]);let N=r.useMemo(()=>({theme:S,setTheme:A,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:s?[...c,"system"]:c,systemTheme:s?C:void 0}),[S,A,t,C,s,c]);return r.createElement(i.Provider,{value:N},r.createElement(y,{forcedTheme:t,storageKey:m,attribute:h,enableSystem:s,enableColorScheme:l,defaultTheme:d,value:v,themes:c,nonce:w,scriptProps:E}),g)},y=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:m,themes:c,nonce:d,scriptProps:u}=e,h=JSON.stringify([a,n,i,t,c,m,o,l]).slice(1,-1);return r.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[838,441,517,358],()=>t(1108)),_N_E=e.O()}]);