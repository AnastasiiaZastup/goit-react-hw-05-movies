"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{24:function(n,t,r){r.d(t,{a:function(){return v}});var e,a,c=r(689),u=r(87),o=r(168),i=r(867),s=i.ZP.ul(e||(e=(0,o.Z)(["\n  margin-top: 12px;\n"]))),f=i.ZP.li(a||(a=(0,o.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n  color: #424041;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n    background-color: #f5edee;\n    color: #780a0f;\n  }\n\n  a {\n    display: block;\n    padding: 16px 16px;\n  }\n"]))),p=r(184),v=function(n){var t=n.movies,r=(0,c.TH)();return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,e=n.title;return(0,p.jsx)(f,{children:(0,p.jsx)(u.rU,{to:{pathname:"/movies/".concat(t),state:{location:r}},children:(0,p.jsx)("h5",{children:e})})},t)}))})}},256:function(n,t,r){r.d(t,{Df:function(){return i},Eb:function(){return p},Hu:function(){return v},Pg:function(){return f},Ph:function(){return s}});var e=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="025d4b48f27df18c675c623e6ea86fa8",i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},526:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e,a=r(861),c=r(439),u=r(757),o=r.n(u),i=r(256),s=r(24),f=r(791),p=r(218),v=r(168),l=r(867).ZP.h2(e||(e=(0,v.Z)(["\n  color: #780a0f;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 40px;\n"]))),d=r(184);function h(){var n=(0,f.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Df)();case 3:t=n.sent,e(null!==t&&void 0!==t?t:[]),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),p.ZP.error("Error!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l,{children:"Trending today"}),(0,d.jsx)(s.a,{movies:r}),(0,d.jsx)(p.x7,{})]})}}}]);
//# sourceMappingURL=526.6d848e86.chunk.js.map