"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[842],{7842:function(n,e,t){t.r(e);var i=t(9439),r=t(2791),a=t(1087),s=t(1991),o=t(9244),c=t(7576),d=t(854),l=t(3692),p=t(184),u=function(n){var e=n.genres,t=(0,a.lr)(),u=(0,i.Z)(t,2),x=u[0],f=u[1],g=Number(x.get("page")),h=(0,r.useState)([]),m=(0,i.Z)(h,2),v=m[0],Z=m[1],j=(0,r.useState)(0),b=(0,i.Z)(j,2),w=b[0],_=b[1],y=g||1,P=(0,l.a)(),k=P.state,I=k.loading,z=k.error,N=P.data,C=P.dataQuery;(0,r.useEffect)((function(){C("trending",y,"")}),[y,C]),(0,r.useEffect)((function(){var n=N.results,t=N.total_pages;if(t){_(t),Z(n.map((function(n){return{id:n.id,poster:n.poster_path,title:n.title,release_date:n.release_date,genres:(t=n.genre_ids,e.reduce((function(n,e){return t.includes(Number(e.id))&&n.push(e.name),n}),[])),vote_average:n.vote_average};var t})))}}),[N,e]);return(0,p.jsxs)(p.Fragment,{children:[I&&(0,p.jsx)(d.Z,{}),v.length&&!I&&(0,p.jsx)(o.Z,{movies:v}),v.length&&!I&&(0,p.jsx)(s.Z,{onPagination:function(n){Z([]),f({page:n})},total:w,curent:y}),!v.length&&!I&&(0,p.jsx)(c.Z,{message:z?"Something went wrong, please try again.":"Movies not found"})]})};e.default=(0,r.memo)(u)},9244:function(n,e,t){t.d(e,{Z:function(){return z}});var i,r,a,s,o,c,d,l,p,u=t(7689),x=t(168),f=t(6444),g=t(1087),h=f.ZP.ul(i||(i=(0,x.Z)(["\n  width: 100%;\n  margin-top: 75px;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n\n  grid-auto-rows: auto-fit;\n  grid-gap: 15px;\n  justify-content: center;\n\n  @media screen and (min-width: 372px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media screen and (min-width: 729px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media screen and (min-width: 1101px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"]))),m=f.ZP.li(r||(r=(0,x.Z)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n\n  border-radius: 5px;\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n\n  &:hover {\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    transform: scale(1.05);\n    cursor: zoom-in;\n  }\n"]))),v=(0,f.ZP)(g.rU)(a||(a=(0,x.Z)(["\n  height: 100%;\n  width: 100%;\n  text-decoration: none;\n"]))),Z=f.ZP.img(s||(s=(0,x.Z)(["\n  height: 89%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 5px 5px 0 0;\n"]))),j=f.ZP.div(o||(o=(0,x.Z)(["\n  position: absolute;\n  bottom: 50px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 18px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 1.1;\n"]))),b=f.ZP.div(c||(c=(0,x.Z)(["\n  width: 100%;\n  height: 11%;\n  padding: 0px 2px 3px 2px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),w=f.ZP.span(d||(d=(0,x.Z)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin: auto 5px auto 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #3575f5;\n"]))),_=f.ZP.span(l||(l=(0,x.Z)(["\n  width: 100%;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 14px;\n  line-height: 1;\n  color: #0294fc;\n"]))),y=f.ZP.span(p||(p=(0,x.Z)(["\n  border-radius: 5px;\n  padding: 2px 5px;\n  margin: auto 0;\n  font-weight: 700;\n  line-height: 1;\n  font-size: 22px;\n  color: #ffffff;\n  background-color: #3575f5;\n"]))),P=t(6207),k=t(184),I=function(n){var e=n.path,t=n.src,i=n.alt,r=n.year,a=n.genres,s=n.reyt,o=(0,u.TH)(),c=[];return a&&(c=a.map((function(n,e){return function(n,e){return e>0&&e<3?", "+n:0===e?n:void 0}(n,e)}))),(0,k.jsx)(m,{children:(0,k.jsxs)(v,{to:e,state:{from:o},children:[(0,k.jsx)(Z,{src:t?"https://image.tmdb.org/t/p/w342".concat(t):P,alt:i,loading:"lazy"}),!t&&(0,k.jsx)(j,{children:i}),(0,k.jsxs)(b,{children:[(0,k.jsx)(w,{children:r}),(0,k.jsx)(_,{children:c&&c}),s>0&&(0,k.jsx)(y,{children:s})]})]})})},z=function(n){var e=n.movies;return(0,k.jsx)(h,{children:e.map((function(n){var e=n.id,t=n.poster,i=n.title,r=n.release_date,a=n.genres,s=n.vote_average;return(0,k.jsx)(I,{path:"/movies/"+e,src:t,alt:i,year:r?r.substr(0,4):"    ",genres:a,reyt:s.toFixed(1)},e)}))})}},7576:function(n,e,t){t.d(e,{Z:function(){return o}});var i,r=t(168),a=t(6444).ZP.p(i||(i=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto 0;\n  font-size: 24px;\n  color: red;\n  padding-top: 15px;\n\n  @media screen and (min-width: 480px) {\n    height: 100px;\n    padding: 0;\n  }\n"]))),s=t(184),o=function(n){var e=n.message;return(0,s.jsx)(a,{children:e})}},1991:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(2113),r="PaginationBlock_block__QCtjq",a=t(184),s=function(n){var e=n.total,t=n.curent,s=n.onPagination,o=[],c=t;1!==t&&e>9&&o.push((0,a.jsx)(i.Z.Prev,{},"n1"));for(var d=1;d<=e;d++)o.push(e<=8&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d),e>8&&t>4&&1===d&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d),e>8&&1===t&&d<=6&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d),e>8&&t>4&&2===d&&(0,a.jsx)(i.Z.Ellipsis,{disabled:!0},"e1"),e>8&&t<=4&&d<=5&&1!==t&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d),e>8&&t===e&&d>=e-5&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d),e>8&&t>=e-4&&d>=e-4&&t!==e&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d),e>8&&t>4&&t<e-4&&d>t-2&&d<t+2&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d),e>8&&t<e-4&&d===e-1&&(0,a.jsx)(i.Z.Ellipsis,{disabled:!0},"e2"),e>8&&t<e-4&&d===e&&(0,a.jsx)(i.Z.Item,{active:d===t,children:d},d));t!==e&&e>9&&o.push((0,a.jsx)(i.Z.Next,{},"n2"));return(0,a.jsx)("div",{className:r,children:(0,a.jsx)(i.Z,{onClick:function(n){return function(n){var e=n.target.text;e||(e=n.target.innerHTML),e.includes("\u2026")||(Number.isInteger(Number(e))&&(c=Number(e)),e.includes("\u203a")&&++c,e.includes("\u2039")&&--c,s(c))}(n)},children:o})})}},6207:function(n,e,t){n.exports=t.p+"static/media/unknown.490035dd3b721560b4f7.jpg"}}]);
//# sourceMappingURL=842.65385770.chunk.js.map