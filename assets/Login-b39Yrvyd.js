import{r as o,j as s}from"./react-328yWDDP.js";import{L as k}from"./react-router-dom-6oCumJkQ.js";import{o as p,p as N,R as I,q as y}from"./react-icons-l7RwqXwD.js";import{a as C}from"./@firebase-tvAkaRvo.js";import{a as S}from"./index-FvNfogVk.js";import{c as F}from"./react-router-1YI5QDov.js";import"./@mapbox-P3eih9Ks.js";import"./react-dom-AjuaLGBG.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-qg_F8xzm.js";import"./idb-IQTssp_s.js";import"./tslib-uVCKAQsh.js";import"./react-player-qe2d_R1M.js";import"./deepmerge-m38oLmcF.js";import"./memoize-one-2aoN688H.js";import"./react-fast-compare-LawLdkOo.js";import"./prop-types-EUydVlhc.js";import"./load-script-KV37v6J9.js";import"./react-use-cart-RfXZ2AJl.js";import"./firebase-68xsxvGW.js";import"./framer-motion-KSOoU1u5.js";import"./scrollreveal-p56AIvCW.js";import"./tealight-1sah5qbi.js";import"./is-dom-node-UIimFn1D.js";import"./is-dom-node-list-rDut-aH9.js";import"./rematrix-PsAVmwnt.js";import"./miniraf--XCH_u-r.js";const D=""+new URL("signin-cover-iDuzHDqo.jpg",import.meta.url).href,ts=()=>{const[e,d]=o.useState({email:"",password:"",isClicked:!1}),u=F(),r=a=>{const{name:t,value:c,type:v,checked:b}=a.target;d(w=>({...w,[t]:v==="checkbox"?b:c}))},[h,n]=o.useState(p),[g,l]=o.useState("password"),[x,m]=o.useState(!1),f=()=>{x?(m(!1),l("password"),n(p)):(m(!0),l("text"),n(y))},i=o.useId(),j=a=>{a.preventDefault(),C(S,e.email,e.password).then(t=>{t.user,u("/"),alert("successfully logged in")}).catch(t=>{t.code,alert("account not found")})};return s.jsxs("div",{className:"signin-container",children:[s.jsx("img",{src:D,alt:""}),s.jsxs("form",{className:"signin-form",onSubmit:j,children:[s.jsx("div",{className:"form-title",children:s.jsx("h1",{children:"sign-in"})}),s.jsxs("label",{htmlFor:i+"-username",children:[s.jsx(N,{className:"form-icon"}),s.jsx("div",{className:"input-info",children:s.jsx("input",{type:"text",id:i+"-email",placeholder:"email...",value:e.email,onChange:r,name:"email",required:!0})})]}),s.jsxs("label",{htmlFor:i+"-password",children:[s.jsx(I,{className:"form-icon"}),s.jsx("div",{className:"input-info",children:s.jsx("input",{type:g,id:i+"-password",placeholder:"password...",value:e.passcode,onChange:r,name:"password",required:!0})}),s.jsx("p",{className:"show-password",onClick:f,children:h})]}),s.jsxs("div",{className:"terms",children:[s.jsx("input",{onChange:r,id:i+"-isclicked",type:"checkbox",checked:e.isClicked,name:"isClicked"}),s.jsx("label",{htmlFor:"isClicked",children:"remember me!"})]}),s.jsx("button",{className:"submit-btn",children:"login"}),s.jsxs("div",{className:"signup-link",children:[s.jsx("p",{children:"still have no account ?"}),s.jsx(k,{to:"/signup",className:"signup",children:"sign-up"})]})]})]})};export{ts as default};