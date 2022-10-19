"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[998],{211:function(n,e,t){t.d(e,{Hg:function(){return o},Jh:function(){return d},_r:function(){return l},s_:function(){return p},z1:function(){return u}});var r=t(861),a=t(687),i=t.n(a),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="38a870c0e4485eebd742c83e630c16d3",o=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.next=5,e.data.results;case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?api_key=".concat(s,"&page=").concat(t,"&language=en&query=").concat(e));case 2:return r=n.sent,n.next=5,r.data.results;case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.data;case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.data;case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},998:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,i,c,s,o,u,p,d,l,f,h,v=t(861),x=t(885),m=t(687),g=t.n(m),Z=t(731),j=t(470),b=t(791),w=t(211),k=t(411),y=t(168),_=t(82),P=_.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  color: blueviolet;\n"]))),O=_.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),z=_.ZP.img(i||(i=(0,y.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.75);\n"]))),U=_.ZP.ul(c||(c=(0,y.Z)(["\n  padding: 15px;\n  list-style: none;\n"]))),C=_.ZP.li(s||(s=(0,y.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),R=_.ZP.h2(o||(o=(0,y.Z)(["\n  margin-bottom: 15px;\n"]))),S=_.ZP.h3(u||(u=(0,y.Z)(["\n  margin-bottom: 15px;\n"]))),G=_.ZP.div(p||(p=(0,y.Z)(["\n  display: flex;\n"]))),H=_.ZP.div(d||(d=(0,y.Z)(["\n  padding: 15px;\n"]))),L=_.ZP.p(l||(l=(0,y.Z)(["\n  margin-bottom: 20px;\n  font-size: large;\n  font-weight: bold;\n"]))),N=_.ZP.li(f||(f=(0,y.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),T=(0,_.ZP)(Z.OL)(h||(h=(0,y.Z)(["\n  color: darkslategrey;\n\n  &.active {\n    color: darkred;\n  }\n"]))),q=t(184),A=function(){var n,e,t=(0,b.useState)(null),r=(0,x.Z)(t,2),a=r[0],i=r[1],c=(0,b.useState)(!1),s=(0,x.Z)(c,2),o=s[0],u=s[1],p=(0,j.UO)(),d=Object.values(p)[0],l=(0,j.TH)(),f=null!==(n=null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,b.useEffect)((function(){function n(){return(n=(0,v.Z)(g().mark((function n(){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,(0,w.s_)(d);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),alert("Movie is not found");case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[d]);return(0,q.jsxs)("div",{children:[o&&(0,q.jsx)(k.Z,{}),(0,q.jsx)(P,{children:(0,q.jsx)(Z.rU,{to:f,children:"Go back"})}),a&&(0,q.jsxs)("div",{children:[(0,q.jsxs)(O,{children:[(0,q.jsx)(z,{src:a.poster_path?"https://image.tmdb.org/t/p/w300".concat(a.poster_path):"https://i.pinimg.com/200x/e4/71/1e/fea9bd6cc64d250f3b3bb2ecec82173d.jpg",alt:a.title}),(0,q.jsxs)(U,{children:[(0,q.jsxs)(C,{children:[(0,q.jsx)(R,{children:a.title}),(0,q.jsxs)("p",{children:["Rating:",a.vote_average?a.vote_average:"No rating for that movie"]})]}),(0,q.jsxs)(C,{children:[(0,q.jsx)(S,{children:"Overview"}),a.overview?(0,q.jsx)("p",{children:a.overview}):(0,q.jsx)("p",{children:"There is no overview for that movie"})]}),(0,q.jsxs)(C,{children:[(0,q.jsx)(S,{children:"Genres"}),(0,q.jsx)(G,{children:a.genres.length>0?(0,q.jsx)("p",{children:a.genres.map((function(n){return n.name})).join(", ")}):(0,q.jsx)("p",{children:"No genres found"})})]})]})]}),(0,q.jsxs)(H,{children:[(0,q.jsx)(L,{children:"Additional information"}),(0,q.jsxs)("ul",{children:[(0,q.jsx)(N,{children:(0,q.jsx)(T,{to:"/movies/".concat(a.id,"/cast"),state:{from:f},children:"Cast"})}),(0,q.jsx)(N,{children:(0,q.jsx)(T,{to:"/movies/".concat(a.id,"/reviews"),state:{from:f},children:"Reviews"})})]})]})]}),(0,q.jsx)(j.j3,{})]})}},168:function(n,e,t){function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=998.aeb16582.chunk.js.map