import{j as e,r as o}from"./react-328yWDDP.js";import{c as d}from"./google-map-react-C-DqdxpT.js";import{j as m,G as h,k as x,l as p,m as j,n as u}from"./react-icons-l7RwqXwD.js";import{m as g}from"./framer-motion-KSOoU1u5.js";import"./@mapbox-P3eih9Ks.js";import"./prop-types-EUydVlhc.js";import"./react-dom-AjuaLGBG.js";import"./scheduler-iwWdm5Ml.js";import"./eventemitter3-kxfTZM1Q.js";import"./@googlemaps-xrxk7TKA.js";const f=s=>e.jsxs("div",{className:"pin",children:[e.jsx("span",{style:{fontSize:"4rem"},children:e.jsx(m,{})}),e.jsx("p",{className:"pin-text",style:{fontSize:"1.2em"},children:s.text})]}),v=({location:s,zoomLevel:n})=>e.jsx("div",{style:{height:"60vh",width:"100%"},children:e.jsx(d,{bootstrapURLKeys:{key:""},defaultCenter:s,defaultZoom:n,children:e.jsx(f,{lat:Location.lat,lng:Location.lng,text:Location.address})})}),N=()=>{const[s,n]=o.useState({fullName:"",emailAddress:"",subject:"",textArea:""}),a=l=>{const{name:t,value:c}=l.target;n(r=>({...r,[t]:c}))},i=l=>{l.prevendDefault(),console.log(s)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"contact-form",onSubmit:i,children:[e.jsx("input",{type:"text",name:"fullName",placeholder:"Full Name",value:s.fullName,onChange:a}),e.jsx("input",{type:"text",name:"emailAddress",placeholder:"Email Address",value:s.emailAddress,onChange:a}),e.jsx("input",{type:"text",name:"subject",placeholder:"Subject",value:s.subject,onChange:a}),e.jsx("textarea",{className:"form-text-area",placeholder:"your message",value:s.textArea,onChange:a}),e.jsx("button",{type:"submit",className:"submit-btn",children:"send"})]})})},y=""+new URL("1-1mCApgEq.png",import.meta.url).href,b=""+new URL("2-_mbi1Mws.png",import.meta.url).href,w=""+new URL("3-CcfZLORN.png",import.meta.url).href,F={address:"Konstantin - Furstenwalde/Spree",lat:52.360438,lng:14.059511},G=()=>e.jsxs("div",{className:"contact",children:[e.jsx("div",{className:"contact-banner",children:e.jsxs("div",{className:"banner-info",children:[e.jsx(g.h1,{animate:{opacity:1,scale:1},transition:{duration:5,delay:.3,ease:[.5,.71,1,1.5]},initial:{opacity:0,scale:.5},whileHover:{scale:1.2},children:"#connectWithUs"}),e.jsx("p",{children:"leave a message. we love to hear from you"})]})}),e.jsxs("div",{className:"contact-info",children:[e.jsxs("div",{className:"our-info",children:[e.jsxs("div",{className:"top-info",children:[e.jsx("p",{children:"get in touch"}),e.jsx("h2",{children:"visit one of our agency locations or contact us today"})]}),e.jsxs("div",{className:"bottom-info",children:[e.jsx("span",{children:"head office"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(h,{className:"icon locate"}),"Fürstenwalde | Spree"]}),e.jsxs("li",{children:[e.jsx(x,{className:"icon"})," Fürstenwalde@gmail.de"]}),e.jsxs("li",{children:[e.jsx(p,{className:"icon"})," +49322382916"]}),e.jsxs("li",{children:[e.jsx(j,{className:"icon"})," monday to saturday 9:00 to 16:00"]})]})]})]}),e.jsx("div",{className:"our-location",children:e.jsx(v,{location:F,zoomLevel:11})})]}),e.jsxs("div",{className:"contact-field",children:[e.jsxs("div",{className:"contact-input",children:[e.jsx("p",{children:"leave a message"}),e.jsxs("h4",{children:["we love to hear from you"," ",e.jsx(u,{className:"face-smile"})]}),e.jsx(N,{})]}),e.jsxs("div",{className:"contact-personal",children:[e.jsxs("div",{className:"contact-per",children:[e.jsx("img",{src:y,alt:"image",width:"70px",height:"70px"}),e.jsxs("div",{className:"person-info",children:[e.jsx("h3",{children:"thomas meier"}),e.jsx("p",{children:"senior product manager"}),e.jsxs("p",{children:[e.jsx("small",{children:"phone :"})," +4936737724"]}),e.jsxs("p",{children:[e.jsx("small",{children:"email :"})," thomasmeier@gmail.de"]})]})]}),e.jsxs("div",{className:"contact-per",children:[e.jsx("img",{src:b,alt:"image",width:"70px",height:"70px"}),e.jsxs("div",{className:"person-info",children:[e.jsx("h3",{children:"albert schmidt"}),e.jsx("p",{children:"senior marketing manager"}),e.jsxs("p",{children:[e.jsx("small",{children:"phone :"})," +4936722912"]}),e.jsxs("p",{children:[e.jsx("small",{children:"email :"})," albertschmidt@gmail.de"]})]})]}),e.jsxs("div",{className:"contact-per",children:[e.jsx("img",{src:w,alt:"image",width:"70px",height:"70px"}),e.jsxs("div",{className:"person-info",children:[e.jsx("h3",{children:"anatalia dorla"}),e.jsx("p",{children:"senior export manager"}),e.jsxs("p",{children:[e.jsx("small",{children:"phone :"})," +49367236723"]}),e.jsxs("p",{children:[e.jsx("small",{children:"email :"})," anataliadorla@gmail.de"]})]})]})]})]})]});export{G as default};
