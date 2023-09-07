(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{21:function(e,t,c){},27:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(22),n=c.n(s),a=(c(27),c(15)),i=c(3),r=c(0),o=c(4),l=c(1),j=Object(r.createContext)(void 0),b=function(e){var t=e.children,c=Object(r.useState)(""),s=Object(o.a)(c,2),n=s[0],a=s[1];return Object(l.jsx)(j.Provider,{value:{inputValue:n,handleSearch:function(e){a(e.target.value)}},children:t})},d=function(){var e="/phones"===Object(i.l)().pathname,t=function(){var e=Object(r.useContext)(j);if(!e)throw new Error("useHeaderContext must be used within a HeaderProvider");return e}(),c=t.inputValue,s=t.handleSearch;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("nav",{className:"header__content-left",children:[Object(l.jsx)("a",{className:"header-logo",href:"/home",children:Object(l.jsx)("img",{src:"./img/icons/Logo.svg",alt:"logo"})}),Object(l.jsx)("a",{className:"header__content-left-link",href:"/home",children:"home"}),Object(l.jsx)("a",{className:"header__content-left-link",href:"/phones",children:"phones"}),Object(l.jsx)("a",{className:"header__content-left-link",href:"/tablets",children:"tablets"}),Object(l.jsx)("a",{className:"header__content-left-link",href:"/accessories",children:"accessories"})]}),Object(l.jsxs)("nav",{className:"header__content-right",children:[e&&Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"searh-input",children:[Object(l.jsx)("input",{className:"searh-input-text",type:"text",placeholder:"Search in phones...",value:c,onChange:s}),Object(l.jsx)("img",{className:"searh-input-image",src:"./img/icons/icons/Search.svg",alt:"find"})]}),Object(l.jsx)("a",{href:"/favorits",className:"favorits",children:Object(l.jsx)("img",{className:"image",src:"./img/icons/Heart.svg",alt:"like"})}),Object(l.jsx)("a",{href:"/basket",className:"basket",children:Object(l.jsx)("img",{className:"image",src:"./img/icons/Group.svg",alt:"basket"})})]})]})},m=(c(30),function(){return Object(l.jsx)(d,{})}),h=(c(31),[{id:1,src:"../img/banner-phones.png",alt:"banner1"},{id:2,src:"../img/banner-tablets.png",alt:"banner2"},{id:3,src:"../img/banner-accessories.png",alt:"banner3"}]),u=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(h[0].id),a=Object(o.a)(n,2),i=a[0],j=a[1],b=function(e){var t=Math.abs(e/1040),c=h[t].id;j(c)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"slider",children:[Object(l.jsx)("button",{type:"button",className:"slider-button left",id:"prevButton",onClick:function(){var e=Math.min(c+1040,0);s(e),b(e)},children:Object(l.jsx)("img",{src:"../img/icons/icons/left.svg",alt:"Previous"})}),Object(l.jsx)("div",{className:"slider__content",children:Object(l.jsx)("div",{className:"slider__content-center",style:{transform:"translateX(".concat(c,"px)")},children:h.map((function(e){return Object(l.jsx)("img",{className:"slider__content-image",src:e.src,alt:e.alt},e.alt)}))})}),Object(l.jsx)("button",{type:"button",className:"slider-button right",id:"nextButton",onClick:function(){var e=-1040*(h.length-1),t=Math.max(c-1040,e);s(t),b(t)},children:Object(l.jsx)("img",{src:"../img/icons/icons/right.svg",alt:"Next"})})]}),Object(l.jsx)("div",{className:"slider__dots",children:h.map((function(e){return Object(l.jsx)("button",{type:"button",className:"slider-dot ".concat(i===e.id?"is-active":""),"aria-label":"slide-".concat(e.id),onClick:function(){return function(e){var t=h.findIndex((function(t){return t.id===e}));s(1040*-t),j(e)}(e.id)}},e.id)}))})]})},O=(c(21),function(e){var t=e.phones,c=e.showOldPrice;return Object(l.jsx)("div",{className:"card-container",children:Object(l.jsx)("div",{className:"card","data-qa":"card",children:t.map((function(e){return Object(l.jsxs)("div",{className:"card__info",children:[Object(l.jsx)("img",{className:"card__image",src:e.image,alt:"xs"}),Object(l.jsx)("a",{href:"/phones/info",className:"card__description",children:e.name}),Object(l.jsxs)("div",{className:"card__price",children:[Object(l.jsx)("article",{className:"card__new-price",children:"$".concat(e.price)}),c&&Object(l.jsx)("article",{className:"card__old-price",children:"$".concat(e.fullPrice)})]}),Object(l.jsx)("div",{className:"card__line","aria-label":"line"}),Object(l.jsxs)("div",{className:"card__screen",children:[Object(l.jsx)("article",{className:"card__screen-name",children:"Screen"}),Object(l.jsx)("article",{className:"card__screen-value",children:e.screen})]}),Object(l.jsxs)("div",{className:"card__copacity",children:[Object(l.jsx)("article",{className:"card__copacity-name",children:"Copcity"}),Object(l.jsx)("article",{className:"card__copacity-value",children:e.capacity})]}),Object(l.jsxs)("div",{className:"card__ram",children:[Object(l.jsx)("article",{className:"card__ram-name",children:"RAM"}),Object(l.jsx)("article",{className:"card__ram-value",children:e.ram})]}),Object(l.jsxs)("div",{className:"card__buttons",children:[Object(l.jsx)("a",{className:"card__buttons-add",href:"/",children:"Add to cart"}),Object(l.jsx)("a",{className:"card__buttons-heart",href:"/",children:Object(l.jsx)("img",{src:"./img/icons/Heart.svg",alt:"heart"})})]})]},e.id)}))})})}),_=(c(32),function(e){var t=e.phones,c=e.title,s=e.showOldPrice,n=Object(r.useState)(0),a=Object(o.a)(n,2),i=a[0],j=a[1],b=t.slice(i,i+4);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{className:"price",children:c}),Object(l.jsxs)("div",{className:"title__buttons",children:[Object(l.jsx)("button",{type:"button",className:"card-button left",id:"prevButton",onClick:function(){i-4>=0&&j((function(e){return e-4}))},children:Object(l.jsx)("img",{src:"../img/icons/icons/left.svg",alt:"Previous"})}),Object(l.jsx)("button",{type:"button",className:"card-button right",id:"nextButton",onClick:function(){i+4<t.length&&j((function(e){return e+4}))},children:Object(l.jsx)("img",{src:"../img/icons/icons/right.svg",alt:"Next"})})]})]}),Object(l.jsx)(O,{phones:b,showOldPrice:s})]})}),x=(c(33),function(){return Object(l.jsxs)("div",{className:"category",children:[Object(l.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(l.jsxs)("div",{className:"category__products",children:[Object(l.jsxs)("div",{className:"category__products-mobile",children:[Object(l.jsx)("img",{className:"category__photo-phone",src:"../../img/banner-phone.png",alt:"phones"}),Object(l.jsx)("p",{className:"category__products-name",children:"Mobile phones"}),Object(l.jsx)("p",{className:"category__products-count",children:"95 models"})]}),Object(l.jsxs)("div",{className:"category__products-tablets",children:[Object(l.jsx)("img",{className:"category__photo-tablets",src:"../../img/tablets.png",alt:"tablets"}),Object(l.jsx)("p",{className:"category__products-name",children:"Tablets"}),Object(l.jsx)("p",{className:"category__products-count",children:"24 models"})]}),Object(l.jsxs)("div",{className:"category__products-accessories",children:[Object(l.jsx)("img",{className:"category__photo-accessories",src:"../../img/accessories.png",alt:"accessories"}),Object(l.jsx)("p",{className:"category__products-name",children:"Accessories"}),Object(l.jsx)("p",{className:"category__products-count",children:"100 models"})]})]})]})}),p=(c(34),function(e){var t=e.phones,c=e.title,s=e.showOldPrice,n=t.filter((function(e){return e.name.includes("11")}));return Object(l.jsx)("div",{className:"model",children:Object(l.jsx)(_,{phones:n,title:c,showOldPrice:s})})}),g=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(!1),a=Object(o.a)(n,2),i=a[0],j=a[1];return Object(r.useEffect)((function(){j(!0),fetch("../../api/products.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(u,{}),Object(l.jsx)(_,{phones:c,title:"Hot prices",showOldPrice:i}),Object(l.jsx)(x,{}),Object(l.jsx)(p,{phones:c,title:"Brand new models",showOldPrice:!1})]})},f=(c(35),function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"footer__items",children:[Object(l.jsx)("a",{className:"footer__logo",href:"/",children:Object(l.jsx)("img",{src:"./img/icons/Logo.svg",alt:"logo"})}),Object(l.jsxs)("nav",{className:"footer__content-mid",children:[Object(l.jsx)("a",{className:"footer__content-mid-link",href:"/",children:"Github"}),Object(l.jsx)("a",{className:"footer__content-mid-link",href:"/",children:"Contacts"}),Object(l.jsx)("a",{className:"footer__content-mid-link",href:"/",children:"rights"})]}),Object(l.jsxs)("nav",{className:"footer__content-right",children:[Object(l.jsx)("p",{className:"footer__content-right-text",children:"Back to top"}),Object(l.jsx)("a",{className:"footer__up",href:"/",children:Object(l.jsx)("img",{className:"footer__up-back",src:"./img/icons/chevron.png",alt:"up"})})]})]})})}),N=c(6),v=c(39),y=(c(36),["price","year"]),k=[8,16,32],w=function(e){var t=e.phones,c=e.title,s=e.showOldPrice,n=Object(r.useState)(16),a=Object(o.a)(n,2),j=a[0],b=a[1],d=Object(r.useState)(!1),m=Object(o.a)(d,2),h=m[0],u=m[1],_=Object(r.useState)(!1),x=Object(o.a)(_,2),p=x[0],g=x[1],f=Object(r.useState)(""),w=Object(o.a)(f,2),S=w[0],C=w[1],P=Object(r.useState)(1),I=Object(o.a)(P,2),M=I[0],B=I[1],H=Object(i.l)().pathname.split("/"),A=function(e){C(e),u(!1)},E=function(e){b(e),g(!1)},D=function(e){var c=(M-1)*j,s=c+j,n=Object(N.a)(t).slice(c,s);switch(e){case"price":return n.sort((function(e,t){return e.price-t.price}));case"year":return n.sort((function(e,t){return t.year-e.year}));default:return n}}(S);return Object(l.jsxs)("div",{className:"mobile",children:[Object(l.jsxs)("div",{className:"mobile__home",children:[Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{className:"mobile__home-image",src:"./img/icons/Home.png",alt:"home"})}),Object(l.jsx)("img",{className:"mobile__home-right",src:"./img/icons/Icons/right.svg",alt:"right"}),Object(l.jsx)("p",{className:"mobile__home-text",children:H})]}),Object(l.jsx)("h1",{className:"mobile__title",children:c}),Object(l.jsx)("p",{className:"mobile__title-description",children:"".concat(t.length," models")}),Object(l.jsxs)("div",{className:"mobile__sort",children:[Object(l.jsxs)("div",{className:"mobile__sort-by",children:[Object(l.jsx)("p",{className:"mobile__sort-text",children:"Sort by"}),Object(l.jsxs)("button",{type:"button",className:"mobile__sort-button",onClick:function(){u(!h)},children:[Object(l.jsx)("span",{className:"mobile__sort-button-text",children:S||"Select"}),Object(l.jsx)("img",{className:"mobile__sort-button-img",src:"./img/icons/down.svg",alt:"down"})]}),h&&Object(l.jsx)("div",{className:"mobile__sort-dropdown",children:y.map((function(e){return Object(l.jsx)("div",{className:"mobile__sort-option ".concat(S===e?"selected":""),onClick:function(){return A(e)},onKeyDown:function(){return A(e)},tabIndex:0,role:"button",children:e},e)}))})]}),Object(l.jsxs)("div",{className:"mobile__sort-items",children:[Object(l.jsx)("p",{className:"mobile__sort-text",children:"Items on page"}),Object(l.jsxs)("button",{type:"button",className:"mobile__sort-button",onClick:function(){g(!p)},children:[Object(l.jsx)("span",{className:"mobile__sort-button-text",children:j}),Object(l.jsx)("img",{className:"mobile__sort-button-img",src:"./img/icons/down.svg",alt:"down"})]}),p&&Object(l.jsx)("div",{className:"mobile__sort-dropdown",children:k.map((function(e){return Object(l.jsx)("div",{className:"mobile__sort-option ".concat(j===e?"selected":""),onClick:function(){return E(e)},onKeyDown:function(){return E(e)},tabIndex:0,role:"button",children:e},e)}))})]})]}),Object(l.jsx)(O,{phones:D,showOldPrice:s}),Object(l.jsxs)("div",{className:"mobile__pages",children:[Object(l.jsx)("button",{type:"button",className:"mobile__pages-left",onClick:function(){M>1&&B(M-1)},children:Object(l.jsx)("img",{className:"image-left",src:"../img/icons/Icons/left.svg",alt:"left"})}),Array.from({length:Math.ceil(t.length/j)}).map((function(e,t){return Object(l.jsx)("button",{type:"button",className:"mobile__pages-number ".concat(M===t+1?"is-active":""),onClick:function(){B(t+1)},children:t+1},Object(v.a)())})),Object(l.jsx)("button",{type:"button",className:"mobile__pages-right",onClick:function(){M<Math.ceil(t.length/j)&&B(M+1)},children:Object(l.jsx)("img",{className:"image-right",src:"../img/icons/Icons/right.svg",alt:"right"})})]})]})},S=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(r.useEffect)((function(){fetch("../../api/products.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(l.jsx)(w,{phones:c,title:"Mobile phones",showOldPrice:!0})},C=function(){return Object(l.jsx)(a.a,{children:Object(l.jsx)(b,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/home",element:Object(l.jsx)(g,{})}),Object(l.jsx)(i.a,{path:"/phones",element:Object(l.jsx)(S,{})})]}),Object(l.jsx)(f,{})]})})})};n.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0df00915.chunk.js.map