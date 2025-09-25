import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.RH_Wq4ov.js";import{c as o}from"./createLucideIcon.DCnupLqN.js";import{M as k}from"./mail.BI3-AKjm.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],v=o("code",y);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],N=o("folder-open",j);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],M=o("house",w);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],S=o("menu",_);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],$=o("moon",z);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],I=o("sun",C);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],D=o("user",E);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],p=o("x",H),g=()=>{const[s,r]=c.useState(!1);c.useEffect(()=>{const n=localStorage.getItem("theme"),l=window.matchMedia("(prefers-color-scheme: dark)").matches;(n==="dark"||!n&&l)&&(r(!0),document.documentElement.classList.add("dark"))},[]);const i=()=>{const n=!s;r(n),n?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))};return e.jsxs("button",{onClick:i,className:"relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200","aria-label":"Toggle theme",children:[e.jsx(I,{size:18,className:`absolute transition-all duration-300 ${s?"opacity-0 rotate-90 scale-0":"opacity-100 rotate-0 scale-100"}`}),e.jsx($,{size:18,className:`absolute transition-all duration-300 ${s?"opacity-100 rotate-0 scale-100":"opacity-0 -rotate-90 scale-0"}`})]})},O=()=>{const[s,r]=c.useState(!1),[i,n]=c.useState(!1),[l,b]=c.useState("home"),m=[{name:"Home",href:"#home",icon:M},{name:"About",href:"#about",icon:D},{name:"Skills",href:"#skills",icon:v},{name:"Projects",href:"#projects",icon:N},{name:"Contact",href:"#contact",icon:k}];c.useEffect(()=>{const t=()=>{n(window.scrollY>50);const d=m.map(u=>u.href.substring(1)).find(u=>{const f=document.getElementById(u);if(f){const x=f.getBoundingClientRect();return x.top<=100&&x.bottom>=100}return!1});d&&b(d)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const h=t=>{r(!1);const a=document.querySelector(t);a&&a.scrollIntoView({behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${i?"bg-background/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-border":"bg-transparent"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("a",{href:"#home",onClick:t=>{t.preventDefault(),h("#home")},className:"text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",children:"Ryuzen"})}),e.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[e.jsx("div",{className:"flex items-baseline space-x-2",children:m.map(t=>e.jsx("a",{href:t.href,onClick:a=>{a.preventDefault(),h(t.href)},className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${l===t.href.substring(1)?"bg-primary text-primary-foreground shadow-lg":"text-foreground hover:bg-accent hover:text-accent-foreground"}`,children:t.name},t.name))}),e.jsx(g,{})]}),e.jsxs("div",{className:"md:hidden flex items-center space-x-2",children:[e.jsx(g,{}),e.jsx("button",{onClick:()=>r(!s),className:"inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none transition-colors duration-200",children:s?e.jsx(p,{size:24}):e.jsx(S,{size:24})})]})]})}),s&&e.jsxs("div",{className:"fixed inset-0 z-50 md:hidden",children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 dark:bg-black/70",onClick:()=>r(!1)}),e.jsxs("div",{className:"fixed top-0 right-0 bottom-0 w-64 bg-background shadow-xl transform transition-transform duration-300 border-l border-border",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border",children:[e.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",children:"Ryuzen"}),e.jsx("button",{onClick:()=>r(!1),className:"p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(p,{size:20})})]}),e.jsx("nav",{className:"px-4 py-6 space-y-2",children:m.map(t=>{const a=t.icon;return e.jsxs("a",{href:t.href,onClick:d=>{d.preventDefault(),h(t.href)},className:`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${l===t.href.substring(1)?"bg-primary text-primary-foreground shadow-lg":"text-foreground hover:bg-accent hover:text-accent-foreground"}`,children:[e.jsx(a,{size:20,className:"mr-3"}),t.name]},t.name)})})]})]})]}),e.jsx("div",{className:"h-16"})]})};export{O as default};
