(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{56:function(t,e,n){"use strict";n.d(e,"e",(function(){return p})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(58),a=n.n(r),c=n(59),o=n(60),u=n.n(o),i="c3e6752e64cec5b5c28af375350e47bc",s="https://api.themoviedb.org/3",p=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(s,"/trending/movie/day?api_key=").concat(i)).then((function(t){return t.data.results}));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(s,"/search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(t){return t.data.results}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(i)).then((function(t){return t.data}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i)).then((function(t){return t.data})).then((function(t){return t.cast}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i)).then((function(t){return t.data})).then((function(t){return t.results}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},61:function(t,e,n){"use strict";n(0);var r,a,c,o,u=n(4),i=n(11),s=n(9),p=n(10),l=p.a.ul(r||(r=Object(s.a)(["\ndisplay: grid;\n  max-width: calc(100vw - 200px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 60px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=p.a.li(a||(a=Object(s.a)(["\n overflow: hidden;\n  background-color: rgb(247 68 8);\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover{\n       transform: scale(1.05);\n  cursor: pointer;\n  }\n  "]))),d=p.a.img(c||(c=Object(s.a)(["\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n"]))),h=p.a.h2(o||(o=Object(s.a)(["\ntext-align: center;\n  color: rgb(255, 255, 255);\n  "]))),b=n(1);e.a=function(t){var e=t.movies,n=Object(u.h)();return Object(b.jsx)(l,{children:e&&e.map((function(t){return Object(b.jsxs)(f,{children:[Object(b.jsx)(i.b,{to:{pathname:"/movies/".concat(t.id),state:{from:n}},children:Object(b.jsx)(d,{src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png",alt:t.title})}),Object(b.jsx)(h,{children:t.title})]},t.id)}))})}},89:function(t,e,n){"use strict";n.r(e);var r=n(58),a=n.n(r),c=n(59),o=n(57),u=n(0),i=n(4),s=n(17),p=n(61),l=n(56),f=n(1);e.default=function(){var t=Object(u.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],d=Object(u.useState)("idle"),h=Object(o.a)(d,2),b=h[0],v=h[1],x=Object(i.j)().isExact,j=Object(i.g)();switch(Object(u.useEffect)((function(){x||j.push("/"),Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v("pending"),t.prev=1,t.next=4,Object(l.e)().then((function(t){0===t.lenght&&(v("rejected"),alert("Error!")),r(t),v("resolved")}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),alert("Error!");case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))()}),[j,x]),b){case"idle":return Object(f.jsx)("div",{});case"pending":return Object(f.jsx)(s.a,{});case"resolved":return Object(f.jsx)("div",{children:Object(f.jsx)(p.a,{movies:n})});case"rejected":return Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"Something goes wrong! Reload page please"})});default:return}}}}]);
//# sourceMappingURL=4.31021033.chunk.js.map