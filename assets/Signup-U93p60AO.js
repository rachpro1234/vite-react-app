import{r as t,j as s}from"./react-328yWDDP.js";import{L as b}from"./react-router-dom-6oCumJkQ.js";import{o as p,p as k,k as y,R as C,q as F}from"./react-icons-l7RwqXwD.js";import{c as I}from"./@firebase-tvAkaRvo.js";import{a as S}from"./index-FvNfogVk.js";import{c as U}from"./react-router-1YI5QDov.js";import"./@mapbox-P3eih9Ks.js";import"./react-dom-AjuaLGBG.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-qg_F8xzm.js";import"./idb-IQTssp_s.js";import"./tslib-uVCKAQsh.js";import"./react-player-qe2d_R1M.js";import"./deepmerge-m38oLmcF.js";import"./memoize-one-2aoN688H.js";import"./react-fast-compare-LawLdkOo.js";import"./prop-types-EUydVlhc.js";import"./load-script-KV37v6J9.js";import"./react-use-cart-RfXZ2AJl.js";import"./firebase-68xsxvGW.js";import"./framer-motion-KSOoU1u5.js";import"./scrollreveal-p56AIvCW.js";import"./tealight-1sah5qbi.js";import"./is-dom-node-UIimFn1D.js";import"./is-dom-node-list-rDut-aH9.js";import"./rematrix-PsAVmwnt.js";import"./miniraf--XCH_u-r.js";const E=""+new URL("signup-cover-mquoUNr4.jpg",import.meta.url).href,rs=()=>{const[i,d]=t.useState({username:"",email:"",password:"",isClicked:!1,showPassword:!1}),u=U(),o=n=>{const{name:a,value:r,type:w,checked:v}=n.target;d(N=>({...N,[a]:w==="checkbox"?v:r}))},[h,l]=t.useState("password"),[x,m]=t.useState(p),[g,c]=t.useState(!1),j=()=>{g?(c(!1),l("password"),m(p)):(c(!0),l("text"),m(F))},e=t.useId(),f=n=>{n.preventDefault(),I(S,i.email,i.password).then(a=>{const r=a.user;u("/login"),console.log(r),alert("successfully created account")}).catch(a=>{a.code;const r=a.message;alert(r)})};return s.jsxs("div",{className:"signup-container",children:[s.jsx("img",{src:E,alt:""}),s.jsxs("form",{className:"signup-form",onSubmit:f,children:[s.jsx("div",{className:"form-title",children:s.jsx("h1",{children:"sign-up"})}),s.jsxs("label",{htmlFor:e+"-username",children:[s.jsx(k,{className:"form-icon"}),s.jsx("div",{className:"input-info",children:s.jsx("input",{type:"text",id:e+"-username",placeholder:"Full-Name...",value:i.username,onChange:o,name:"username",required:!0})})]}),s.jsxs("label",{htmlFor:e+"-email",children:[s.jsx(y,{className:"form-icon"}),s.jsx("div",{className:"input-info",children:s.jsx("input",{type:"email",id:e+"-email",placeholder:"email...",value:i.email,onChange:o,name:"email",required:!0})})]}),s.jsxs("label",{htmlFor:e+"-password",children:[s.jsx(C,{className:"form-icon"}),s.jsx("div",{className:"input-info",children:s.jsx("input",{type:h,id:e+"-password",placeholder:"password...",value:i.password,onChange:o,name:"password",required:!0})}),s.jsx("p",{className:"show-password",onClick:j,children:x})]}),s.jsxs("div",{className:"terms",children:[s.jsx("input",{onChange:o,id:e+"-isclicked",type:"checkbox",checked:i.isClicked,name:"isClicked"}),s.jsx("label",{htmlFor:"isClicked",children:"I want to join the newsletter"})]}),s.jsx("button",{className:"submit-btn",children:"sign-up"}),s.jsxs("div",{className:"signin-link",children:[s.jsx("p",{children:"already have an account ?"}),s.jsx(b,{to:"/login",className:"signin",children:"sign-In"})]})]})]})};export{rs as default};
