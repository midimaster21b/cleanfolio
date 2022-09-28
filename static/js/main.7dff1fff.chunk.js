(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{37:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(6),c=n(14),r=n.n(c),s=n(1),l=n(0),o=Object(s.createContext)(),d=function(e){var t=e.children,n=Object(s.useState)("light"),a=Object(i.a)(n,2),c=a[0],r=a[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(l.jsx)(o.Provider,{value:[{themeName:c,toggleTheme:function(){var e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},j="https://joshuaedgcombe.com",h="JE.",m="Joshua Edgcombe",b="FPGA Engineer",u="I currently work at DornerWorks in Grand Rapids, Michigan and have a strong background in software development, digital design, and electrical engineering. I learned to program in 2008 and have since learned to write software in many different programming languages in a variety of environments including web, native, system, and embedded. I received my MSE in computer and electrical engineering in 2021 where I gained experience implementing and accelerating algorithms on FPGAs, GPUs, and DSPs. Since graduation I have been lucky enough to design, develop, and test a core component of the world's first deep-space radiation-hardened ethernet switch that will be used in a mission-critical capacity for the Artemis missions. I've also been able to significantly contribute to a constellation of satellites that will soon be competing with Starlink, as well as a few defense related projects.",p="https://github.com/midimaster21b/cleanfolio/raw/main/public/JoshuaEdgcombeResume.pdf",g={linkedin:"https://www.linkedin.com/in/joshuaedgcombe/",github:"https://github.com/midimaster21b",youtube:"https://www.youtube.com/c/JoshEdgcombe",twitter:"https://twitter.com/midimaster21b"},f=[{name:"Hardware Acceleration in Image Stitching: GPU vs FPGA",description:"Implemented a full image processing pipeline from scratch that included feature detection, feature matching, image transformation, and image stitching portions. This pipeline was accelerated on an FPGA and a GPU separately for performance comparison.",stack:["C","C++","Cuda","OpenCV","VHDL","Verilog","Python","Tcl","SURF","FPGA","GPU"],sourceCode:"",livePreview:"https://scholarworks.gvsu.edu/theses/1018/"},{name:"Implementing Analog and Digital Transceivers",description:"Implemented analog and digital communication transceivers using software-defined radios and GNU Radio Companion. Custom blocks were created to support the implementation of modulation and demodulation of AM, FM, FSK, PSK, and QAM signals. This included a dive into the theory behind several options for clock and data recovery.",stack:["C","Python","GNU Radio","Software-Defined Radio"],sourceCode:"",livePreview:"https://peer.asee.org/implementation-of-analog-and-digital-communications-transceivers-on-sdr-platforms-using-gnu-radio-companion"},{name:"Ti MSP432 Peripheral Driver Library",description:"Developed a peripheral driver library for the Ti MSP432 microcontroller to gain experience interacting with peripherals.",stack:["C","MSP432"],sourceCode:"https://github.com/midimaster21b/MSP432_DriverLibrary",livePreview:""}],O=[{title:"Hardware Acceleration in Image Stitching: GPU vs FPGA",body:"Implemented a full image processing pipeline from scratch that included feature detection, feature matching, image transformation, and image stitching portions. This pipeline was accelerated on an FPGA and a GPU separately for performance comparison.",stack:["C","C++","Cuda","OpenCV","VHDL","Verilog","Python","Tcl","SURF","FPGA","GPU"],permalink:"/blog/"},{title:"Migration To Ghost",date:"2019-06-07",body:"This is a test.",stack:["C","C++","Cuda","OpenCV","VHDL","Verilog","Python","Tcl","SURF","FPGA","GPU"],permalink:"/blog/"}],x=["VHDL","Verilog","SystemVerilog","Tcl","Python","Ruby","Emacs Lisp","C","C++","MATLAB","Java","C#","PHP","SQL","HTML5","CSS3","JavaScript"],v="joshedgcombe@gmail.com",k=n(19),w=n.n(k),N=n(16),_=n.n(N),P=n(21),y=n.n(P),C=n(20),S=n.n(C),G=(n(37),function(){var e=Object(s.useContext)(o),t=Object(i.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,c=Object(s.useState)(!1),r=Object(i.a)(c,2),d=r[0],j=r[1],h=function(){return j(!d)};return Object(l.jsxs)("nav",{className:"center nav",children:[Object(l.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"/",onClick:h,className:"link link--nav",children:"Home"})}),f.length>5?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"/projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,O.length>5?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"/blog",onClick:h,className:"link link--nav",children:"Blog"})}):null]}),Object(l.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(l.jsx)(_.a,{}):Object(l.jsx)(w.a,{})}),Object(l.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(l.jsx)(S.a,{}):Object(l.jsx)(y.a,{})})]})}),A=(n(41),function(){var e=j,t=h;return Object(l.jsxs)("header",{className:"header center",children:[Object(l.jsx)("h3",{children:e?Object(l.jsx)("a",{href:e,className:"link",children:t}):t}),Object(l.jsx)(G,{})]})}),T=n(22),F=n.n(T),I=(n(42),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(l.jsx)("div",{className:"scroll-top",children:Object(l.jsx)("a",{href:"#top",children:Object(l.jsx)(F.a,{fontSize:"large"})})}):null}),L=(n(43),function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:Object(l.jsx)("br",{})})})}),E=n(11),M=n.n(E),U=n(24),V=n.n(U),D=n(23),H=n.n(D),J=n(25),R=n.n(J),B=n(26),K=n.n(B),z=(n(44),function(){var e=m,t=b,n=u,a=p,i=g;return Object(l.jsxs)("div",{className:"about center",children:[e&&Object(l.jsxs)("h1",{children:["Hi, I am ",Object(l.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(l.jsxs)("h2",{className:"about__role",children:["An ",t,"."]}),Object(l.jsx)("p",{className:"about__desc",children:n&&n}),Object(l.jsx)("div",{className:"about__contact center",children:i&&Object(l.jsxs)(l.Fragment,{children:[i.github&&Object(l.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":"resume",className:"link link--icon",children:Object(l.jsx)(H.a,{})}),i.linkedin&&Object(l.jsx)("a",{href:i.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin",className:"link link--icon",children:Object(l.jsx)(V.a,{})}),i.github&&Object(l.jsx)("a",{href:i.github,target:"_blank",rel:"noopener noreferrer","aria-label":"github",className:"link link--icon",children:Object(l.jsx)(M.a,{})}),i.youtube&&Object(l.jsx)("a",{href:i.youtube,target:"_blank",rel:"noopener noreferrer","aria-label":"youtube",className:"link link--icon",children:Object(l.jsx)(R.a,{})}),i.twitter&&Object(l.jsx)("a",{href:i.twitter,target:"_blank",rel:"noopener noreferrer","aria-label":"twitter",className:"link link--icon",children:Object(l.jsx)(K.a,{})})]})})]})}),Q=(n(45),function(){return v?Object(l.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(l.jsx)("h2",{className:"section__title",children:"Contact"}),Object(l.jsx)("a",{href:"mailto:".concat(v),children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),W=n(7),Y=n.n(W),Z=n(27),q=n.n(Z),X=(n(47),function(e){var t=e.project;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(l.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(l.jsx)("li",{className:"project__stack-item",children:e},Y()())}))}),t.sourceCode&&Object(l.jsx)("a",{href:t.sourceCode,target:"_blank",rel:"noopener noreferrer","aria-label":"source code",className:"link link--icon",children:Object(l.jsx)(M.a,{})}),t.livePreview&&Object(l.jsx)("a",{href:t.livePreview,target:"_blank",rel:"noopener noreferrer","aria-label":"live preview",className:"link link--icon",children:Object(l.jsx)(q.a,{})})]})}),$=(n(48),function(){return f.length?Object(l.jsxs)("section",{id:"projects",className:"section projects",children:[Object(l.jsx)("h2",{className:"section__title",children:"Projects"}),Object(l.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(l.jsx)(X,{project:e},Y()())}))})]}):null}),ee=(n(49),function(){return x.length?Object(l.jsxs)("section",{className:"section skills",id:"skills",children:[Object(l.jsx)("h2",{className:"section__title",children:"Languages"}),Object(l.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(l.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},Y()())}))})]}):null});n(50);r.a.initialize("G-H9N6ZLJ1PK"),r.a.send("pageview");var te=function(){var e=Object(s.useContext)(o),t=Object(i.a)(e,1)[0].themeName;return Object(l.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(l.jsx)(A,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(z,{}),Object(l.jsx)(Q,{}),Object(l.jsx)($,{}),Object(l.jsx)(ee,{})]}),Object(l.jsx)(I,{}),Object(l.jsx)(L,{})]})};n(51);Object(a.render)(Object(l.jsx)(d,{children:Object(l.jsx)(te,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.7dff1fff.chunk.js.map