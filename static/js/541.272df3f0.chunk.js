"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(t,r,n){n.r(r),n.d(r,{default:function(){return v}});var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(256),i=n(791),o=n(689),p=n(218),f=n(184);function v(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),n=r[0],c=r[1],v=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Eb)(v);case 3:r=t.sent,c(r),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),p.ZP.error("Cast not found"),c([]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[v]),(0,f.jsxs)("div",{children:[(0,f.jsx)("ul",{children:n.map((function(t){var r=t.id,n=t.profile_path,e=t.original_name,a=t.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"".concat(n?"https://image.tmdb.org/t/p/w500/"+n:"https://via.placeholder.com/182x273?text="+e),alt:e}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Actor:"})," ",e]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Character:"})," ",a]})]},r)}))}),(0,f.jsx)(p.x7,{})]})}},256:function(t,r,n){n.d(r,{Df:function(){return i},Eb:function(){return f},Hu:function(){return v},Pg:function(){return p},Ph:function(){return o}});var e=n(861),a=n(757),c=n.n(a),u=n(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="025d4b48f27df18c675c623e6ea86fa8",i=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.272df3f0.chunk.js.map