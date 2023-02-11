"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{5990:function(n,e,t){t.d(e,{Z:function(){return c}});var i,r=t(2113),a=(t(7632),t(168)),o=t(6444).ZP.div(i||(i=(0,a.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin-bottom: 15px;\n"]))),s=t(184),c=function(n){var e=n.total,t=n.curent,i=n.onPagination,a=[];1!==t&&e>9&&a.push((0,s.jsx)(r.Z.Prev,{},"n1"));for(var c=1;c<=e;c++)a.push(e<=8&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c),e>8&&t>4&&1===c&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c),e>8&&1===t&&c<=6&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c),e>8&&t>4&&2===c&&(0,s.jsx)(r.Z.Ellipsis,{disabled:!0},"e1"),e>8&&t<=4&&c<=5&&1!==t&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c),e>8&&t===e&&c>=e-5&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c),e>8&&t>=e-4&&c>=e-4&&t!==e&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c),e>8&&t>4&&t<e-4&&c>t-2&&c<t+2&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c),e>8&&t<e-4&&c===e-1&&(0,s.jsx)(r.Z.Ellipsis,{disabled:!0},"e2"),e>8&&t<e-4&&c===e&&(0,s.jsx)(r.Z.Item,{active:c===t,children:c},c));return t!==e&&e>9&&a.push((0,s.jsx)(r.Z.Next,{},"n2")),(0,s.jsx)(o,{children:(0,s.jsx)(r.Z,{onClick:function(n){return i(n)},children:a})})}},5115:function(n,e,t){t.r(e);var i=t(8683),r=t(9439),a=t(1087),o=t(4952),s=t(9244),c=t(5990),d=t(7576),p=t(2791),l=t(184);e.default=function(){var n=(0,p.useState)([]),e=(0,r.Z)(n,2),t=e[0],u=e[1],g=(0,p.useState)([]),x=(0,r.Z)(g,2),f=x[0],h=x[1],m=(0,p.useState)(""),v=(0,r.Z)(m,2),Z=v[0],w=v[1],j=(0,p.useState)({page:1,totalPage:0}),b=(0,r.Z)(j,2),y=b[0],_=b[1],P=(0,p.useState)({loading:!1,error:!1}),k=(0,r.Z)(P,2),I=k[0],z=k[1],S=(0,a.lr)(),N=(0,r.Z)(S,1)[0],E=y.totalPage,C=y.page;(0,p.useEffect)((function(){var n=N.get("search");n&&n!==Z&&(w(n),h([]),_({page:1,totalPage:0})),(0,o.Z)().then((function(n){u(n.genres)}))}),[Z,N]),(0,p.useEffect)((function(){if(Z){console.log("search by",Z),z((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!0})}));(0,o.Z)("movies",C,Z).then((function(n){var e=n.results,r=n.total_pages;_((function(n){return(0,i.Z)((0,i.Z)({},n),{},{totalPage:r})})),h(e.map((function(n){return{id:n.id,poster:n.poster_path,title:n.title,release_date:n.release_date,genres:(e=n.genre_ids,t.reduce((function(n,t){return e.includes(Number(t.id))&&n.push(t.name),n}),[])),vote_average:n.vote_average,vote_count:n.vote_count};var e})))})).catch((function(){z((function(n){return(0,i.Z)((0,i.Z)({},n),{},{error:!0})}))})).finally((function(){return z((function(n){return(0,i.Z)((0,i.Z)({},n),{},{loading:!1})}))}))}}),[t,C,Z]);var F=I.loading,H=I.error;return(0,l.jsxs)(l.Fragment,{children:[f.length&&!F&&(0,l.jsx)(s.Z,{movies:f}),f.length&&!F&&(0,l.jsx)(c.Z,{onPagination:function(n){var e=C,t=n.target.text;t||(t=n.target.innerHTML),t.includes("\u2026")||(Number.isInteger(Number(t))&&(e=Number(t)),t.includes("\u203a")&&++e,t.includes("\u2039")&&--e,h([]),_((function(n){return(0,i.Z)((0,i.Z)({},n),{},{page:e})})))},total:E,curent:C}),Z&&!f.length&&!F&&(0,l.jsx)(d.Z,{message:H?"Something went wrong, please try again.":"Movies not found"})]})}},9244:function(n,e,t){t.d(e,{Z:function(){return z}});var i,r,a,o,s,c,d,p,l,u=t(7689),g=t(168),x=t(6444),f=t(1087),h=x.ZP.ul(i||(i=(0,g.Z)(["\n  width: 100%;\n  // height: calc(100\u0441h - 136px);\n  margin-top: 75px;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n\n  // grid-template-columns: repeat(auto-fit, 1fr);\n  grid-auto-rows: auto-fit;\n  grid-gap: 15px;\n  justify-content: center;\n\n  @media screen and (min-width: 372px) {\n    grid-template-columns: repeat(2, 1fr);\n    // grid-auto-rows: 185px;\n  }\n\n  @media screen and (min-width: 729px) {\n    grid-template-columns: repeat(3, 1fr);\n    // grid-auto-rows: 185px;\n  }\n\n  @media screen and (min-width: 1101px) {\n    // max-width: 1230px;\n    grid-template-columns: repeat(5, 1fr);\n    // grid-auto-rows: calc((100\u0441h - 90px) / 2);\n\n    // grid-auto-rows: 185px;\n  }\n"]))),m=x.ZP.li(r||(r=(0,g.Z)(["\nposition: relative;\ndisplay: block;\n  width: 100%;\n  overflow: hidden;\n\n// height: 100%;\n  border-radius: 5px;\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  // box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    // 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    transform: scale(1.05);\n    cursor: zoom-in;\n  }\n"]))),v=(0,x.ZP)(f.OL)(a||(a=(0,g.Z)(["\n  height: 100%;\n  width: 100%;\n  text-decoration: none;\n"]))),Z=x.ZP.img(o||(o=(0,g.Z)(["\nheight: 89%;\n  // height: calc(100% - 30px);\n  width: 100%;\n  object-fit: cover;\n  // border-radius: 5px;\n  border-radius: 5px 5px 0 0;\n"]))),w=x.ZP.div(s||(s=(0,g.Z)(["\nposition: absolute;\nbottom: 50px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\njustify-content: center;\n  font-weight: 700;\n  font-size: 18px;\n  color: #ffffff;\ntext-align: center;\n  line-height: 1.1;\n\n"]))),j=x.ZP.div(c||(c=(0,g.Z)(["\n  width: 100%;\nheight: 11%;\n  padding: 0px 2px 3px 2px;\n  // height: 10%;\n\n  // height: 50px;\n  display: flex;\n  // flex-direction: column;\n  align-items: center;\n  // align-items: flex-start;\njustify-content: space-between;\n// gap: 5px; \n\n"]))),b=x.ZP.span(d||(d=(0,g.Z)(["\nheight: 100%;\n\n// width: 100%;\ndisplay: flex;\nalign-items: center;\nmargin: auto 5px auto 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #3575f5;\n"]))),y=x.ZP.span(p||(p=(0,g.Z)(["\nwidth: 100%;\n\n  padding: 0;\ndisplay: flex;\nalign-items: center;\njustify-content: flex-start;\nfont-size: 14px;\nline-height: 1;\ncolor: #0294fc;\n"]))),_=x.ZP.span(l||(l=(0,g.Z)(["\nborder-radius: 5px;\npadding: 2px 5px;\nmargin: auto 0;\nfont-weight: 700;\nline-height: 1;\nfont-size: 22px;\ncolor: #ffffff;\nbackground-color: #3575f5;\n\n// width: 100%;\n// height: 100%;\n// display: flex;\n// align-items: center;\n  // color: #3d3c3ca4;\n"]))),P=t(6207),k=t(184),I=function(n){var e=n.path,t=n.src,i=n.alt,r=n.year,a=n.genres,o=n.reyt,s=(0,u.TH)(),c=[];return a&&(c=a.map((function(n,e){return function(n,e){return e>0&&e<3?", "+n:0===e?n:void 0}(n,e)}))),(0,k.jsx)(m,{children:(0,k.jsxs)(v,{to:e,state:{from:s},children:[(0,k.jsx)(Z,{src:t?"https://image.tmdb.org/t/p/w342".concat(t):P,alt:i,loading:"lazy"}),!t&&(0,k.jsx)(w,{children:i}),(0,k.jsxs)(j,{children:[(0,k.jsx)(b,{children:r}),(0,k.jsx)(y,{children:c&&c}),o>0&&(0,k.jsx)(_,{children:o})]})]})})},z=function(n){var e=n.movies;return(0,k.jsx)(h,{children:e.map((function(n){var e=n.id,t=n.poster,i=n.title,r=n.release_date,a=n.genres,o=n.vote_average;return(0,k.jsx)(I,{path:"/movies/"+e,src:t,alt:i,year:r?r.substr(0,4):"    ",genres:a,reyt:o.toFixed(1)},e)}))})}},7576:function(n,e,t){t.d(e,{Z:function(){return s}});var i,r=t(168),a=t(6444).ZP.p(i||(i=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto 0;\n  font-size: 24px;\n  color: red;\n  padding-top: 15px;\n\n  @media screen and (min-width: 480px) {\n    height: 150px;\n    // height: 100vh;\n    padding: 0;\n  }\n"]))),o=t(184),s=function(n){var e=n.message;return(0,o.jsx)(a,{children:e})}},4952:function(n,e,t){var i=t(5861),r=t(4687),a=t.n(r),o=t(3263),s="https://api.themoviedb.org/3/",c=function(){var n=(0,i.Z)(a().mark((function n(e,t,i){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s+"genre/movie/list",c={params:{api_key:"7ecf05e00775ac597ec403d449a4c667",language:"en-US"}},"movies"===e&&(r=s+"search/movie",c.params.page=t,c.params.query=i,c.params.include_adult="false"),"trending"===e&&(r=s+"trending/movie/day",c.params.page=t,c.params.include_adult="false"),"details"===e&&(r=s+"movie/"+i),"reviews"===e&&(r=s+"movie/"+i+"/reviews",c.params.page=t),"credits"===e&&(r=s+"movie/"+i+"/credits"),"person"===e&&(r=s+"person/"+i),"trailer"===e&&(r=s+"movie/"+i+"/videos"),n.next=11,o.Z.get("".concat(r),c).then((function(n){return n.data}));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n)})));return function(e,t,i){return n.apply(this,arguments)}}();e.Z=c},6207:function(n,e,t){n.exports=t.p+"static/media/unknown.490035dd3b721560b4f7.jpg"}}]);
//# sourceMappingURL=115.c70bf174.chunk.js.map