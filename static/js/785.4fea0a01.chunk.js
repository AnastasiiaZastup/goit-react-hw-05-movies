"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(r,t,n){n.r(t),n.d(t,{default:function(){return v}});var e=n(861),a=n(439),u=n(757),c=n.n(u),s=n(256),i=n(791),o=n(218),p=n(689),f=n(184);function v(){var r=(0,i.useState)([]),t=(0,a.Z)(r,2),n=t[0],u=t[1],v=(0,p.UO)().movieId;return(0,i.useEffect)((function(){var r=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Hu)(v);case 3:t=r.sent,u(t),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),o.ZP.error("Error"),u([]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[v]),(0,f.jsxs)("div",{children:[n.length>0?(0,f.jsx)("ul",{children:n.map((function(r){var t=r.id,n=r.author,e=r.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Author:"})," ",n]}),(0,f.jsx)("p",{children:e})]},t)}))}):(0,f.jsx)("h4",{children:"We don't have any reviews for this movie."}),(0,f.jsx)(o.x7,{})]})}},256:function(r,t,n){n.d(t,{Df:function(){return i},Eb:function(){return f},Hu:function(){return v},Pg:function(){return p},Ph:function(){return o}});var e=n(861),a=n(757),u=n.n(a),c=n(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="025d4b48f27df18c675c623e6ea86fa8",i=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=785.4fea0a01.chunk.js.map