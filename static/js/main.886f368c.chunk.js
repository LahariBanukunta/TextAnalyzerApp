(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),o=a(12),l=a.n(o),n=(a(19),a(20),a(0));function r(e){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"",children:e.title}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-a active","aria-current":"page",href:"",children:"Home"})})}),Object(n.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(n.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function i(e){const[t,a]=Object(s.useState)("");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(n.jsx)("h2",{children:e.heading}),Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("textarea",{className:"form-control",value:t,onChange:e=>{a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(n.jsx)("button",{className:"btn btn-primary mx-2",onClick:()=>{let s=t.toUpperCase();a(s),e.showAlert("Converted to Uppercase","success")},children:"Convert to UpperCase"}),Object(n.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){let s=t.toLowerCase();a(s),e.showAlert("Converted to Lowercase","success")},children:"Convert to LowerCase"}),Object(n.jsx)("button",{className:"btn btn-primary mx-2",onClick:()=>{let s=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();a(s),e.showAlert("Converted to sentence case","success")},children:"Convert to SentenceCase"}),Object(n.jsx)("button",{className:"btn btn-primary mx-2",onClick:()=>{let s=t.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");a(s),e.showAlert("Converted to Titlecase","success")},children:"Convert to TitleCase"}),Object(n.jsx)("button",{className:"btn btn-primary mx-2",onClick:()=>{a(""),e.showAlert("Text Cleared...!!","success")},children:"Clear"}),Object(n.jsx)("button",{className:"btn btn-primary mx-2",onClick:()=>{let t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")},children:"Copy Text"}),Object(n.jsx)("button",{className:"btn btn-primary mx-2",onClick:()=>{let s=t.split(/[ ]+/);a(s.join(" ")),e.showAlert("Extra spaces are removed","success")},children:"Remove Extra Spaces"})]}),Object(n.jsxs)("div",{className:"container  my-3 ",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(n.jsx)("h2",{children:"Your Text Summary"}),Object(n.jsxs)("p",{children:[t.split(" ").length," words and ",t.length," characters"]}),Object(n.jsxs)("p",{children:[.008*t.split(" ").length," minutes to read"]}),Object(n.jsx)("h2",{children:"Preview"}),Object(n.jsx)("p",{children:t.length>0?t:"Enter something in the above textbox to preview it here..!!"})]})]})}function d(){const[e,t]=Object(s.useState)({color:"black",backgroundColor:"white"}),[a,c]=Object(s.useState)("Enable Light Mode");return Object(n.jsxs)("div",{className:"container",style:e,children:[Object(n.jsx)("h1",{children:"About Us"}),Object(n.jsxs)("div",{class:"accordion",id:"accordionExample",children:[Object(n.jsxs)("div",{class:"accordion-item",children:[Object(n.jsx)("h2",{class:"accordion-header",children:Object(n.jsx)("button",{class:"accordion-button",type:"button",style:e,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(n.jsx)("div",{id:"collapseOne",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample",children:Object(n.jsxs)("div",{class:"accordion-body",style:e,children:[Object(n.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(n.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(n.jsxs)("div",{class:"accordion-item",children:[Object(n.jsx)("h2",{class:"accordion-header",children:Object(n.jsx)("button",{class:"accordion-button collapsed",type:"button",style:e,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(n.jsx)("div",{id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:Object(n.jsxs)("div",{class:"accordion-body",style:e,children:[Object(n.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(n.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(n.jsxs)("div",{class:"accordion-item",children:[Object(n.jsx)("h2",{class:"accordion-header",children:Object(n.jsx)("button",{class:"accordion-button collapsed",type:"button",style:e,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(n.jsx)("div",{id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:Object(n.jsxs)("div",{class:"accordion-body",style:e,children:[Object(n.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(n.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("button",{onClick:()=>{"black"===e.color?(t({color:"white",backgroundColor:"black",border:"2px solid white"}),c("Enable Light Mode")):(t({color:"black",backgroundColor:"white"}),c("Enable Dark  Mode"))},type:"button",className:"btn btn-primary my-3",children:a})})]})}r.defaultProps={title:"Set title here",aboutText:"About"};var h=function(e){return e.alert&&Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(n.jsx)("strong",{children:(e=>{let t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)}),": ",e.alert.msg,Object(n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})},b=a(13),j=a(2);var u=function(){const[e,t]=Object(s.useState)("light"),[a,c]=Object(s.useState)(null),o=(e,t)=>{c({msg:e,type:t}),setTimeout((()=>{c(null)}),1500)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(r,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",o("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(t("light"),document.body.style.backgroundColor="white",o("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(n.jsx)(h,{alert:a}),Object(n.jsx)("div",{className:"container my-3",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/about",children:Object(n.jsx)(d,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)(i,{showAlert:o,heading:"Enter the text to analyze below",mode:e})})]})})]})})};var m=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((t=>{let{getCLS:a,getFID:s,getFCP:c,getLCP:o,getTTFB:l}=t;a(e),s(e),c(e),o(e),l(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.886f368c.chunk.js.map