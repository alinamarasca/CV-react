(this.webpackJsonpcv_react=this.webpackJsonpcv_react||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/photo.178edffc.jpg"},,,,function(e,a,t){e.exports=t.p+"static/media/front-end_Alina_Marasca_CV.92e909fb.pdf"},function(e,a,t){e.exports=t(33)},function(e,a,t){},,,,,function(e,a,t){var n={"./icons/css.svg":18,"./icons/cv.svg":19,"./icons/github.svg":20,"./icons/html.svg":21,"./icons/jq.svg":22,"./icons/js.svg":23,"./icons/node.svg":24,"./icons/react.svg":25,"./icons/sass.svg":26,"./photo.jpg":6,"./projects/calc.jpg":27,"./projects/cv.jpg":28,"./projects/glass.jpg":29,"./projects/hp.jpg":30,"./projects/quiz.jpg":31,"./projects/zipfs.jpg":32};function l(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=c,e.exports=l,l.id=17},function(e,a,t){e.exports=t.p+"static/media/css.e04ffc80.svg"},function(e,a,t){e.exports=t.p+"static/media/cv.f87a298c.svg"},function(e,a,t){e.exports=t.p+"static/media/github.1acf1264.svg"},function(e,a,t){e.exports=t.p+"static/media/html.ad0af567.svg"},function(e,a,t){e.exports=t.p+"static/media/jq.6a38d7ce.svg"},function(e,a,t){e.exports=t.p+"static/media/js.133bc065.svg"},function(e,a,t){e.exports=t.p+"static/media/node.89ccb090.svg"},function(e,a,t){e.exports=t.p+"static/media/react.8c728ff1.svg"},function(e,a,t){e.exports=t.p+"static/media/sass.461014d2.svg"},function(e,a,t){e.exports=t.p+"static/media/calc.b7b3faa9.jpg"},function(e,a,t){e.exports=t.p+"static/media/cv.3d274d78.jpg"},function(e,a,t){e.exports=t.p+"static/media/glass.d2b03fb6.jpg"},function(e,a,t){e.exports=t.p+"static/media/hp.5be940f9.jpg"},function(e,a,t){e.exports=t.p+"static/media/quiz.e43d23dd.jpg"},function(e,a,t){e.exports=t.p+"static/media/zipfs.5cf143ed.jpg"},function(e,a,t){"use strict";t.r(a);t(12);var n=t(0),l=t.n(n),c=t(9),r=t.n(c),i=t(7),s=t(4),o=t(1);var m=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"section-title"},e.title))},u=[{skill:"js",name:"JavaScript"},{skill:"sass",name:"SASS"},{skill:"html",name:"HTML5"},{skill:"css",name:"CSS3"},{skill:"jq",name:"jQuery"},{skill:"node",name:"Node.js"},{skill:"github",name:"Git"},{skill:"react",name:"React"}],p=function(e,a,n,c,r,i){return l.a.createElement("img",{key:i,className:c,src:t(17)("./".concat(e,"/").concat(a,".").concat(n)),alt:r})};var d=function(e,a){return l.a.createElement("div",{className:"skill",key:a},p("icons",e.skill,"svg","icon","".concat(e,"-icon")),l.a.createElement("p",{className:"skill-name"},e.name))};var f=function(){return l.a.createElement("div",{className:"skills"},l.a.createElement(m,{title:"Skills"}),l.a.createElement("div",{className:"practising"},u.map((function(e,a){return d(e,a)}))),l.a.createElement(m,{title:"Current project"}),l.a.createElement("div",{className:"learning"},l.a.createElement("p",null,"I am working on"," ",l.a.createElement("a",{href:"https://alinamarasca.github.io/zipfs-law/"},"Lingvobutcher app")," ","inspired by"," ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Zipf%27s_law"},"Zipf's law")," ","which states that frequency of any word is inversely proportional to its rank in the frequency table. I was fascinated with this fact and thought it would be a fun idea for a project."," ")))};var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about"},l.a.createElement(m,{title:"About me"}),l.a.createElement("div",{className:"motivation"},l.a.createElement("p",null,"I am a ",l.a.createElement("span",null,"curiosity driven")," person, who"," ",l.a.createElement("span",null,"enjoys learning")," and using their skills. I"," ",l.a.createElement("span",null,"love challenges"),", I like ",l.a.createElement("span",null,"working in a team")," ","and it's important for me to deliver an"," ",l.a.createElement("span",null,"efficient product"),".")),l.a.createElement(f,null)))},h=[{title:"Silly Quiz",thumbnail:"quiz",url:"https://alinamarasca.github.io/jQuery-quizz/",repo:"https://github.com/alinamarasca/jQuery-quizz",tools:["jq","js","sass","html"]},{title:"My Portfolio",thumbnail:"cv",url:"https://alinamarasca.github.io/CV/",repo:"https://github.com/alinamarasca/CV",tools:["react","js","sass","html"]},{title:"Hand & Paw - HYF final project",thumbnail:"hp",url:"https://handandpaw.herokuapp.com/",repo:"https://github.com/alinamarasca/hand-and-paw",tools:["js","html","css"]},{title:"Lingvobutcher - based on Zipfs law",thumbnail:"zipfs",url:"https://alinamarasca.github.io/zipfs-law/index/",repo:"https://github.com/alinamarasca/zipfs-law",tools:["react","sass"]}],v=t(3),g=function(e,a){var t=e.title,n=e.thumbnail,c=e.url,r=e.repo,i=e.tools;return l.a.createElement("div",{className:"project-card",key:a},l.a.createElement("div",{className:"preview"},l.a.createElement("div",{className:"control"},l.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(v.c,null)),l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"}," ",l.a.createElement(v.b,null))),p("projects",n,"jpg","thumbnail","project-thumbnail"),l.a.createElement("h4",{className:"project-name"},t)),l.a.createElement("div",{className:"description"},i.map((function(e,a){return p("icons",e,"svg","icon","".concat(e,"-icon"),a)}))))};var b=function(){return l.a.createElement("div",{className:"projects"},l.a.createElement(m,{title:"Projects"}),l.a.createElement("div",{className:"project-cards"},h.map((function(e,a){return g(e,a)}))))};var j=function(){return l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Hello!"),l.a.createElement("p",null,"My name is ",l.a.createElement("span",null," Alina Marasca."),l.a.createElement("br",null),"I am searching for a ",l.a.createElement("span",null," front-end web developer")," ","position, but also consider ",l.a.createElement("span",null,"internship"),"."," "))},k=t(6),w=t.n(k),N=t(10),x=t.n(N),y=l.a.createContext();var C=function(){var e=Object(n.useContext)(y).openModal;return l.a.createElement("div",{className:"general-info"},l.a.createElement("div",{className:"photo"},l.a.createElement("img",{src:w.a,alt:"Alina Marasca"})),l.a.createElement("div",{className:"contact"},l.a.createElement(v.a,{onClick:function(a){return e()}}),l.a.createElement(v.b,{onClick:function(e){return window.open("https://github.com/alinamarasca","_blank").focus}}),l.a.createElement(v.d,{onClick:function(e){return window.open("https://www.linkedin.com/in/alina-marasca-18b603229/","_blank").focus}})),l.a.createElement("div",{className:"extra-info"},l.a.createElement("p",null,l.a.createElement("span",null,"Location: "),"Gent,Belgium"),l.a.createElement("p",null,l.a.createElement("span",null,"Languages: "),l.a.createElement("br",null),"English ",l.a.createElement("br",null),"Russian ",l.a.createElement("br",null),"Dutch ",l.a.createElement("br",null))),l.a.createElement("div",{className:"cv-link"},l.a.createElement("a",{href:x.a,className:"download-cv",download:!0},"download CV(pdf)")))};var _=function(e){var a=e.open,t=e.children,c=Object(n.useContext)(y).closeModal;return a?l.a.createElement("div",{className:"backdrop",onClick:function(e){c()}},l.a.createElement("div",{className:"modal",onClick:function(e){return e.stopPropagation()}},l.a.createElement(v.e,{className:"close-modal",onClick:function(e){c()}}),l.a.createElement("div",{className:"modal-content"},t))):null};var q=function(){return l.a.createElement("div",null,l.a.createElement("form",{id:"contact-form",action:"https://formsubmit.co/alinamarasca@gmail.com",method:"POST"},l.a.createElement("div",{className:"input-control"},l.a.createElement("input",{type:"hidden",name:"_next",value:"https://alinamarasca.github.io/CV"}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{required:!0,id:"email",type:"email",name:"email"})),l.a.createElement("div",{className:"input-control"},l.a.createElement("input",{type:"hidden",name:"_next",value:"https://alinamarasca.github.io/CV"})," ",l.a.createElement("label",null,"Name:"),l.a.createElement("input",{required:!0,id:"name",type:"name",name:"name"})),l.a.createElement("div",{className:"input-control"},l.a.createElement("input",{type:"hidden",name:"_next",value:"https://alinamarasca.github.io/CV"})," ",l.a.createElement("label",null,"Message:"),l.a.createElement("textarea",{id:"message",name:"message",required:!0})),l.a.createElement("button",{type:"submit",id:"submit",form:"contact-form"},"Send")))};var z=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r={modal:t,closeModal:function(){console.log("close modal"),c(!1)},openModal:function(){console.log("open modal"),c(!0)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.Provider,{value:r},l.a.createElement("div",{className:"wrapper"},l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/CV",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement(C,null),l.a.createElement(E,null),l.a.createElement(b,null),l.a.createElement(_,{open:t,children:q()}))}),l.a.createElement(o.b,{path:"/cv",element:l.a.createElement(o.a,{to:"/CV"})})))))},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)}))};r.a.render(l.a.createElement(i.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null))),document.getElementById("root")),M()}],[[11,1,2]]]);
//# sourceMappingURL=main.620d0c23.chunk.js.map