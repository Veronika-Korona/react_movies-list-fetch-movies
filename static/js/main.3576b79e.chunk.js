(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(8),n=c.n(s),i=(c(14),c(9)),a=c(3),r=c(1),l=(c(15),c(16),c(17),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},j=c(6),b=c(2),m=c.n(b),u=(c(20),function(){var e=Object(j.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=".concat("cef30696","&t=").concat(t));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("".concat(c.status,": ").concat(c.text));case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=function(e){var t=e.addMovie,c=Object(r.useState)(""),s=Object(a.a)(c,2),n=s[0],i=s[1],d=Object(r.useState)(null),b=Object(a.a)(d,2),h=b[0],v=b[1],O=Object(r.useState)(""),x=Object(a.a)(O,2),f=x[0],p=x[1],N=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(n);case 3:if("False"!==(t=e.sent).Response){e.next=6;break}throw new Error("Problem with downloading");case 6:v(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),v(null),p("Cant find a movie with such title");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",value:n,onChange:function(e){i(e.target.value),p("")},className:"input is-danger"})})]}),f]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:N,disabled:f.length>0||!n,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){h&&(!1===t(h)&&p("This movie is already on your list"),i(""),v(null))},disabled:f.length>0||!n,children:"Add to the list"})})]})]}),h&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:h})]})]})},v=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{addMovie:function(e){return!c.find((function(t){return t.imdbID===e.imdbID}))&&s([].concat(Object(i.a)(c),[e]))}})})]})};n.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3576b79e.chunk.js.map