"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[804],{256:function(e,t,r){r.d(t,{Df:function(){return u},Eb:function(){return p},Hu:function(){return d},Pg:function(){return l},Ph:function(){return o}});var n=r(861),a=r(757),c=r.n(a),i=r(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="025d4b48f27df18c675c623e6ea86fa8",u=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},804:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(256),u=r(791),o=r(218),l=r(689),p=r(87),d=r(184);function f(){var e,t,r,c=(0,u.useState)(null),f=(0,a.Z)(c,2),h=f[0],v=f[1],x=(0,l.TH)(),m=(0,l.UO)().movieId,j=null!==(e=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Pg)(m);case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.ZP.error("Oops! Something went wrong.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,d.jsxs)("div",{children:[(0,d.jsx)(p.rU,{to:j,children:"Go back!"}),h&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"".concat(h.poster_path?"https://image.tmdb.org/t/p/w500/"+h.poster_path:"https://via.placeholder.com/182x273?text="+h.original_title),alt:h.original_title}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:h.original_title}),(0,d.jsxs)("h3",{children:["User score: ",10*Math.round(h.vote_average),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:h.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{children:null===(r=h.genres)||void 0===r?void 0:r.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(p.rU,{to:"cast",state:x.state,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(p.rU,{to:"reviews",state:x.state,children:"Reviews"})})]}),(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(l.j3,{})})]}),(0,d.jsx)(o.x7,{})]})}}}]);
//# sourceMappingURL=804.8e6c79b9.chunk.js.map