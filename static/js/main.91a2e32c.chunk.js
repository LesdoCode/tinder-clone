(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{54:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){},64:function(e,n,t){},85:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(15),i=t.n(s),r=(t(54),t(55),t(56),t(38)),o=t.n(r),l=t(104),j=t(39),d=t.n(j),u=t(2);var b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(l.a,{children:Object(u.jsx)(o.a,{fontSize:"large",className:"header__icon"})}),Object(u.jsx)("img",{className:"header__logo",src:"https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-253x300.png",alt:"logo"}),Object(u.jsx)(l.a,{children:Object(u.jsx)(d.a,{fontSize:"large",className:"header__icon"})})]})},f=t(25),h=t.n(f),p=t(40),O=t(26),x=(t(64),t(41)),m=t.n(x),g=t(42),v=t.n(g).a.create({baseURL:"https://lesdocode-tinder-backend.herokuapp.com/"});function w(){var e=Object(c.useState)([]),n=Object(O.a)(e,2),t=n[0],a=n[1];Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(u.jsx)("div",{className:"tinderCards",children:Object(u.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(u.jsx)(m.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing:",t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n,"left the screen");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},e.name)}))})})}t(85);var _=t(43),N=t.n(_),B=t(44),S=t.n(B),C=t(45),k=t.n(C),z=t(46),L=t.n(z),y=t(47),F=t.n(y),I=t(103);function T(){var e=function(){};return Object(u.jsxs)("div",{className:"swipeButtons",children:[Object(u.jsx)(I.a,{onClick:e,className:"swipedButtons__repeat iconButton",children:Object(u.jsx)(N.a,{fontSize:"large"})}),Object(u.jsx)(I.a,{onClick:e,className:"swipedButtons__left iconButton",children:Object(u.jsx)(S.a,{fontSize:"large"})}),Object(u.jsx)(I.a,{onClick:e,className:"swipedButtons__star iconButton",children:Object(u.jsx)(k.a,{fontSize:"large"})}),Object(u.jsx)(I.a,{onClick:e,className:"swipedButtons__right iconButton",children:Object(u.jsx)(L.a,{fontSize:"large"})}),Object(u.jsx)(I.a,{onClick:e,className:"swipedButtons__lightning iconButton",children:Object(u.jsx)(F.a,{fontSize:"large"})})]})}var E=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)(w,{}),Object(u.jsx)(T,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,105)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),J()}},[[87,1,2]]]);
//# sourceMappingURL=main.91a2e32c.chunk.js.map