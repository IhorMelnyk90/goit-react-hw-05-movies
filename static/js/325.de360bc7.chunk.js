"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[325],{211:function(e,t,n){n.d(t,{Hg:function(){return i},Jh:function(){return p},_r:function(){return l},s_:function(){return f},z1:function(){return o}});var r=n(861),a=n(687),u=n.n(a),c=n(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="38a870c0e4485eebd742c83e630c16d3",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/search/movie?api_key=".concat(s,"&page=").concat(n,"&language=en&query=").concat(t));case 2:return r=e.sent,e.next=5,r.data.results;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},325:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(885),u=n(687),c=n.n(u),s=n(791),i=n(211),o=n(731),f=n(470),p=n(411),l=n(184),v=function(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===u.trim())return alert("Your search is empty");t(u),c("")},children:[(0,l.jsx)("input",{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Enter your film",value:u,onChange:function(e){c(e.currentTarget.value.toLowerCase())}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},d=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,s.useState)([]),h=(0,a.Z)(d,2),m=h[0],x=h[1],y=(0,o.lr)(),b=(0,a.Z)(y,2),g=b[0],k=b[1],w=(0,f.TH)(),Z=g.get("findFilm");function _(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.log("Opps, bad request"),e.abrupt("return");case 3:return u(!0),e.prev=4,e.next=7,(0,i.z1)(t);case 7:if(0!==(n=e.sent).length){e.next=11;break}return alert("Sorry, film not found"),e.abrupt("return");case 11:x(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),alert("Sorry, film not found... :-( try again");case 17:return e.prev=17,u(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[4,14,17,20]])})))).apply(this,arguments)}return(0,s.useEffect)((function(){Z&&_(Z)}),[Z]),(0,l.jsxs)("div",{children:[(0,l.jsx)(v,{onSubmit:function(e){k({findFilm:e}),_(e)}}),n&&(0,l.jsx)(p.Z,{}),m&&(0,l.jsx)("ul",{children:m.map((function(e){var t=e.id,n=e.title;return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:w},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=325.de360bc7.chunk.js.map