"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[375],{5028:function(n,e,t){t.d(e,{r:function(){return d}});var r,i,o=t(2791),a=["title","titleId"];function c(){return c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},c.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function s(n,e){var t=n.title,s=n.titleId,d=l(n,a);return o.createElement("svg",c({width:30,height:30,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":s},d),t?o.createElement("title",{id:s},t):null,r||(r=o.createElement("path",{d:"M8 8L22 22",strokeWidth:2})),i||(i=o.createElement("path",{d:"M8 22L22 8",strokeWidth:2})))}var d=o.forwardRef(s);t.p},854:function(n,e,t){var r=t(9133),i=t.n(r),o=t(184);e.Z=function(){return(0,o.jsx)(i(),{color:"#b5daf4",loading:!0,cssOverride:{display:"block",height:"95vh",margin:"0 auto"},size:100,"aria-label":"Loading Spinner","data-testid":"loader"})}},2658:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,o,a=t(2791),c=t(5028),l=t(168),s=t(6444),d=s.ZP.div(r||(r=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 999;\n"]))),u=s.ZP.div(i||(i=(0,l.Z)(["\n  position: relative;\n  max-width: 80vw;\n  max-height: 90vh;\n"]))),p=s.ZP.button(o||(o=(0,l.Z)(["\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: inherit;\n  border: 1px solid #212121;\n  color: #212121;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border-radius: 50%;\n  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  \n  &:focus,\n  &:hover {\n    transform: scale(1.05);\n    border: 1px solid #f32013;\n    color: #f32013;\n  }\n"]))),f=t(184),h=function(n){var e=n.onClose,t=n.children;(0,a.useEffect)((function(){var n=function(n){"Escape"===n.code&&(n.preventDefault(),e())};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,f.jsx)(d,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,f.jsxs)(u,{children:[t,(0,f.jsx)(p,{onClick:e,title:"\u0421lick to close",children:(0,f.jsx)(c.r,{stroke:"currentColor"})})]})})}},8375:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,i=t(8683),o=t(9439),a=t(4952),c=t(2791),l=t(854),s=t(5028),d=t(7689),u=t(7576),p=t(2658),f=t(6207),h=["title","titleId"];function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},x.apply(this,arguments)}function g(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function v(n,e){var t=n.title,i=n.titleId,o=g(n,h);return c.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:32,height:50,viewBox:"0 0 28 32",ref:e,"aria-labelledby":i},o),void 0===t?c.createElement("title",{id:i},"Play trailer"):t?c.createElement("title",{id:i},t):null,r||(r=c.createElement("path",{d:"M6 4l20 12-20 12z"})))}var m,b,j,w,y,Z,O,P,k,_,F,S,E,M,C,L,z,R=c.forwardRef(v),I=(t.p,t(168)),A=t(6444),V=t(1087),D=A.ZP.div(m||(m=(0,I.Z)(["\nposition: relative;\n  width: 850px;\nmin-height: 500px;\n  margin: 75px auto 15px auto;\n  // margin: auto;\n\n  padding: 30px 15px 15px 15px;\n//   height: 50px;\n  display: flex;\n  flex-direction: column;\n  // align-items: flex-start;\n  align-items: center;\n\njustify-content: center;\n// border: 1px solid black;\nborder-radius: 10px;\nbackground-color: #ffff0910;\nbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n"]))),U=A.ZP.div(b||(b=(0,I.Z)(["\nposition: relative;\ndisplay: flex;\n// margin-top: 10px;\nheight: 100%;\nwidth: 450px;\n// object-fit: cover;\n// border-radius: 5px;\n"]))),B=A.ZP.img(j||(j=(0,I.Z)(["\nwidth: auto;\nheight: auto;\nobject-fit: cover;\nborder-radius: 5px;\n"]))),H=A.ZP.button(w||(w=(0,I.Z)(["\nposition: absolute;\nwidth: 70px;\nheight: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\njustify-content: center;\n// bottom: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1) rotate(0);\n\n  // left: 105px;\n  background-color: #b5daf482;\n  border: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border-radius: 50%;\n  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n\n  &:focus,\n  &:hover {\n    // transform: scale(1.05);\n    background-color: #3575f5;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n"]))),T=A.ZP.div(y||(y=(0,I.Z)(["\n  width: 100%;\n  margin-left: 15px;\n  height: 100%;\n  gap: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\njustify-content: center;\n"]))),q=A.ZP.div(Z||(Z=(0,I.Z)(["\n  width: 100%;\n  // display: flex;\n  // align-items: flex-start;\n  // justify-content: flex-start;\n  font-weight: 700;\n  line-height: 1;\n  font-size: 32px;\n"]))),W=A.ZP.ul(O||(O=(0,I.Z)(["\nmargin: 0;\npadding: 0;\ngap: 10px;\n\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  // align-items: flex-start;\n  // justify-content: flex-start;\n  font-size: 16px;\n"]))),$=A.ZP.li(P||(P=(0,I.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  font-size: 16px;\n"]))),G=A.ZP.div(k||(k=(0,I.Z)(["\nfont-weight: 700;\n  width: 30%;\n"]))),Y=A.ZP.div(_||(_=(0,I.Z)(["\n  width: 70%;\n"]))),J=A.ZP.div(F||(F=(0,I.Z)(["\n  width: 100%;\ntext-align: justify;\n"]))),K=A.ZP.div(S||(S=(0,I.Z)(["\n  width: 100%;\ntext-align: left;\n"]))),N=(0,A.ZP)(V.OL)(E||(E=(0,I.Z)(["\n  text-decoration: none;\nfont-weight: 700;\n\n\n  &.active {\n    color: #3d3c3ca4;\n  }\n"]))),Q=(0,A.ZP)(V.OL)(M||(M=(0,I.Z)(["\nwidth: 30px;\nheight: 30px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: inherit;\n  border: 1px solid #212121;\n  color: #212121;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border-radius: 50%;\n  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  \n  &:focus,\n  &:hover {\n    transform: scale(1.05);\n    border: 1px solid #f32013;\n    color: #f32013;\n  }\n"]))),X=A.ZP.div(C||(C=(0,I.Z)(["\n  width: 100%;\n  // margin-top: 15px;\n//   height: 50px;\n  display: block;\n  // flex-direction: column;\n  // align-items: baseline;\n// justify-content: center;\n"]))),nn=A.ZP.div(L||(L=(0,I.Z)(["\n  width: 100%;\n  display: flex;\n  // flex-direction: column;\n  // align-items: baseline;\n// justify-content: center;\n"]))),en=A.ZP.span(z||(z=(0,I.Z)(["\nborder-radius: 5px;\npadding: 2px 5px;\ncolor: #ffffff;\nbackground-color: #3575f5;\n// background-color: #b5daf4;\nfont-weight: 700;\n"]))),tn=t(184),rn=(0,c.lazy)((function(){return t.e(972).then(t.bind(t,4972))})),on=function(){var n,e,t=(0,c.useState)([]),r=(0,o.Z)(t,2),h=r[0],x=r[1],g=(0,c.useState)([]),v=(0,o.Z)(g,2),m=v[0],b=v[1],j=(0,c.useState)({modalShow:!1,loading:!1,error:!1}),w=(0,o.Z)(j,2),y=w[0],Z=w[1],O=(0,d.UO)().moviesId,P=(0,d.TH)();(0,c.useEffect)((function(){Z((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!0})})),(0,a.Z)("details",1,O).then((function(n){return x(n)})).catch((function(){Z((function(n){return(0,i.Z)((0,i.Z)({},n),{},{error:!0})}))})).finally((function(){return Z((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!1})}))})),(0,a.Z)("trailer",1,O).then((function(n){var e=n.results;return b(e.filter((function(n){return"Trailer"===n.type&&"YouTube"===n.site})))})).catch((function(){return b([])}))}),[O]);var k=function(){document.querySelector("body").classList.toggle("no-scroll"),Z((function(n){return(0,i.Z)((0,i.Z)({},n),{},{modalShow:!n.modalShow})}))};console.log(h),console.log("trailer",m);var _=[],F=[],S=y.loading,E=y.error,M=y.modalShow;console.log(S,E);var C=h.release_date,L=h.title,z=h.budget,I=h.runtime,A=h.homepage,V=h.vote_average,on=h.vote_count,an=h.popularity,cn=h.overview,ln=h.genres,sn=h.poster_path,dn=h.production_countries,un=new Date(C);ln&&(_=ln.map((function(n){return n.name})).join(", ")),dn&&(F=dn.map((function(n){return n.name})).join(", "));var pn=null!==(n=null===P||void 0===P||null===(e=P.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,tn.jsxs)(tn.Fragment,{children:[!S&&(0,tn.jsxs)(D,{children:[(0,tn.jsx)(Q,{to:pn,title:"\u0421lick to back",children:(0,tn.jsx)(s.r,{stroke:"currentColor"})}),E?(0,tn.jsx)(u.Z,{message:E?"Something went wrong, please try again.":"Movie details not found"}):(0,tn.jsxs)(nn,{children:[(0,tn.jsxs)(U,{children:[(0,tn.jsx)(B,{src:sn?"https://image.tmdb.org/t/p/w342"+sn:f,alt:L}),m.length?(0,tn.jsx)(H,{onClick:k,children:(0,tn.jsx)(R,{fill:"white"})}):""]}),(0,tn.jsxs)(T,{children:[(0,tn.jsx)(q,{children:L}),(0,tn.jsxs)(W,{children:[V?(0,tn.jsxs)($,{children:[(0,tn.jsx)(G,{children:" Vote / Votes"}),(0,tn.jsxs)(Y,{children:[(0,tn.jsx)(en,{children:V.toFixed(1)})," / ",on]})]}):"",an?(0,tn.jsxs)($,{children:[(0,tn.jsx)(G,{children:"Popularity"}),(0,tn.jsx)(Y,{children:an.toFixed(2)})]}):"",I?(0,tn.jsxs)($,{children:[(0,tn.jsx)(G,{children:"Rruntime"}),(0,tn.jsxs)(Y,{children:[Math.floor(I/60),"h ",I-60*Math.floor(I/60),"m"]})]}):"",z?(0,tn.jsxs)($,{children:[(0,tn.jsx)(G,{children:"Budget"}),(0,tn.jsxs)(Y,{children:["$",(z/1e6).toFixed(2)," millions"]})]}):"",C&&(0,tn.jsxs)($,{children:[(0,tn.jsx)(G,{children:"Release date"}),(0,tn.jsx)(Y,{children:un.toLocaleDateString()})]}),_&&(0,tn.jsxs)($,{children:[(0,tn.jsx)(G,{children:"Genres"}),(0,tn.jsx)(Y,{children:_})]}),F&&(0,tn.jsxs)($,{children:[(0,tn.jsx)(G,{children:"Countries"}),(0,tn.jsx)(Y,{children:F})]})]}),(0,tn.jsx)(N,{to:"/movies/".concat(O,"/cast"),state:{from:"/movies/".concat(O)},children:" Cast \u203a"}),A&&(0,tn.jsxs)(K,{children:[(0,tn.jsx)("b",{children:"Home page: "}),(0,tn.jsx)("a",{href:A,children:A})]}),cn&&(0,tn.jsxs)(J,{children:[(0,tn.jsx)("b",{children:"About: "}),cn]}),(0,tn.jsx)(N,{to:"/movies/".concat(O,"/reviews"),state:{from:"/movies/".concat(O)},children:" Reviews \u203a"})]})]}),(0,tn.jsx)(X,{children:(0,tn.jsx)(d.j3,{})})]}),M&&(0,tn.jsx)(p.Z,{onClose:k,children:(0,tn.jsx)(c.Suspense,{fallback:(0,tn.jsx)(l.Z,{}),children:(0,tn.jsx)(rn,{src:m[0].key})})})]})}},7576:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),o=t(6444).ZP.p(r||(r=(0,i.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto 0;\n  font-size: 24px;\n  color: red;\n  padding-top: 15px;\n\n  @media screen and (min-width: 480px) {\n    height: 150px;\n    // height: 100vh;\n    padding: 0;\n  }\n"]))),a=t(184),c=function(n){var e=n.message;return(0,a.jsx)(o,{children:e})}},4952:function(n,e,t){var r=t(5861),i=t(4687),o=t.n(i),a=t(3263),c="https://api.themoviedb.org/3/",l=function(){var n=(0,r.Z)(o().mark((function n(e,t,r){var i,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c+"genre/movie/list",l={params:{api_key:"7ecf05e00775ac597ec403d449a4c667",language:"en-US"}},"movies"===e&&(i=c+"search/movie",l.params.page=t,l.params.query=r,l.params.include_adult="false"),"trending"===e&&(i=c+"trending/movie/day",l.params.page=t,l.params.include_adult="false"),"reviews"===e&&(i=c+"movie/"+r+"/reviews",l.params.page=t),"details"===e&&(i=c+"movie/"+r),"credits"===e&&(i=c+"movie/"+r+"/credits"),"person"===e&&(i=c+"person/"+r),"trailer"===e&&(i=c+"movie/"+r+"/videos"),n.next=11,a.Z.get("".concat(i),l).then((function(n){return n.data}));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}();e.Z=l},9133:function(n,e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(e,t);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,i)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&i(e,n,t);return o(e,n),e},c=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};Object.defineProperty(e,"__esModule",{value:!0});var l=a(t(2791)),s=t(779),d=t(8945),u=t(7074);e.default=function(n){var e=n.loading,t=void 0===e||e,i=n.color,o=void 0===i?"#000000":i,a=n.speedMultiplier,p=void 0===a?1:a,f=n.cssOverride,h=void 0===f?{}:f,x=n.size,g=void 0===x?50:x,v=c(n,["loading","color","speedMultiplier","cssOverride","size"]),m=(0,d.parseLengthAndUnit)(g),b=m.value,j=m.unit,w=r({display:"inherit",position:"relative",width:(0,d.cssValue)(g),height:(0,d.cssValue)(g),transform:"rotate(165deg)"},h),y=b/5,Z=(b-y)/2,O=Z-y,P=(0,s.calculateRgba)(o,.75),k=(0,u.createAnimation)("HashLoader","0% {width: ".concat(y,"px; box-shadow: ").concat(Z,"px ").concat(-O,"px ").concat(P,", ").concat(-Z,"px ").concat(O,"px ").concat(P,"}\n    35% {width: ").concat((0,d.cssValue)(g),"; box-shadow: 0 ").concat(-O,"px ").concat(P,", 0 ").concat(O,"px ").concat(P,"}\n    70% {width: ").concat(y,"px; box-shadow: ").concat(-Z,"px ").concat(-O,"px ").concat(P,", ").concat(Z,"px ").concat(O,"px ").concat(P,"}\n    100% {box-shadow: ").concat(Z,"px ").concat(-O,"px ").concat(P,", ").concat(-Z,"px ").concat(O,"px ").concat(P,"}"),"before"),_=(0,u.createAnimation)("HashLoader","0% {height: ".concat(y,"px; box-shadow: ").concat(O,"px ").concat(Z,"px ").concat(o,", ").concat(-O,"px ").concat(-Z,"px ").concat(o,"}\n    35% {height: ").concat((0,d.cssValue)(g),"; box-shadow: ").concat(O,"px 0 ").concat(o,", ").concat(-O,"px 0 ").concat(o,"}\n    70% {height: ").concat(y,"px; box-shadow: ").concat(O,"px ").concat(-Z,"px ").concat(o,", ").concat(-O,"px ").concat(Z,"px ").concat(o,"}\n    100% {box-shadow: ").concat(O,"px ").concat(Z,"px ").concat(o,", ").concat(-O,"px ").concat(-Z,"px ").concat(o,"}"),"after"),F=function(n){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(b/5).concat(j),height:"".concat(b/5).concat(j),borderRadius:"".concat(b/10).concat(j),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(1===n?k:_," ").concat(2/p,"s infinite")}};return t?l.createElement("span",r({style:w},v),l.createElement("span",{style:F(1)}),l.createElement("span",{style:F(2)})):null}},7074:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,a="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(a,0),r}},779:function(n,e){var t;Object.defineProperty(e,"__esModule",{value:!0}),e.calculateRgba=void 0,function(n){n.maroon="#800000",n.red="#FF0000",n.orange="#FFA500",n.yellow="#FFFF00",n.olive="#808000",n.green="#008000",n.purple="#800080",n.fuchsia="#FF00FF",n.lime="#00FF00",n.teal="#008080",n.aqua="#00FFFF",n.blue="#0000FF",n.navy="#000080",n.black="#000000",n.gray="#808080",n.silver="#C0C0C0",n.white="#FFFFFF"}(t||(t={}));e.calculateRgba=function(n,e){if(Object.keys(t).includes(n)&&(n=t[n]),"#"===n[0]&&(n=n.slice(1)),3===n.length){var r="";n.split("").forEach((function(n){r+=n,r+=n})),n=r}var i=(n.match(/.{2}/g)||[]).map((function(n){return parseInt(n,16)})).join(", ");return"rgba(".concat(i,", ").concat(e,")")}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(n.match(/[^0-9]*$/)||"").toString();return t[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return"".concat(e.value).concat(e.unit)}},6207:function(n,e,t){n.exports=t.p+"static/media/unknown.490035dd3b721560b4f7.jpg"}}]);
//# sourceMappingURL=375.dcbad268.chunk.js.map