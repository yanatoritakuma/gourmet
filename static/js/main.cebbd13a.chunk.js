(this["webpackJsonpgourmet-react"]=this["webpackJsonpgourmet-react"]||[]).push([[0],{48:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var c,a,r,i,j,o,s,d,l,b,x,h,O,u,p,g,m,f,w,k,y,v,S=t(0),C=t.n(S),F=t(21),z=t.n(F),A=(t(48),t(22)),E=t(6),J=t(3),M=t(14),B=t(4),G=t.p+"static/media/Gourmet.16a74196.jpeg",I=t(1),N=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(Y,{children:[Object(I.jsx)(P,{src:G}),Object(I.jsx)(q,{children:"\u30b0\u30eb\u30e1\u30a2\u30d7\u30ea"}),Object(I.jsx)(D,{to:"/",children:"\u767b\u9332\u753b\u9762\u3078"})]})})},P=B.a.img(c||(c=Object(J.a)(["\n  display: block;\n  width:6%;\n  height:auto;\n  object-fit: cover;\n"]))),Y=B.a.header(a||(a=Object(J.a)(["\n  margin: 20px auto;\n  display: flex;\n  align-items: center;\n  width: 80%;\n  border-bottom: 1px solid black;\n"]))),q=B.a.h1(r||(r=Object(J.a)(["\n  margin-left: 120px;\n  font-size: 30px;\n"]))),D=Object(B.a)(A.b)(i||(i=Object(J.a)(["\n  margin:14px 0;\n  margin-left: 300px;\n  padding: 20px;\n  background-color:#87ecdb;\n  display: block;\n  width:20%;\n  text-align: center;\n  font-size: 26px;\n  border-radius: 10px;\n"]))),H=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(K,{children:[Object(I.jsx)(Q,{to:"/all",children:Object(I.jsx)(L,{children:"\u5168\u3066"})}),Object(I.jsx)(Q,{to:"/meat",children:Object(I.jsx)(L,{children:"\u8089"})}),Object(I.jsx)(Q,{to:"/fish",children:Object(I.jsx)(L,{children:"\u9b5a"})}),Object(I.jsx)(Q,{to:"/noodle",children:Object(I.jsx)(L,{children:"\u9eba"})})]})})},K=B.a.footer(j||(j=Object(J.a)(["\n  padding:20px;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: space-around;\n  background-color: skyblue;\n  width:100%;\n"]))),L=B.a.button(o||(o=Object(J.a)(["\n  padding: 16px 0;\n  display: block;\n  background-color:#fff;\n  box-shadow: 0 4px 0 #d8d8d8;\n  border-radius: 10px;\n  width: 80%;\n  text-align: center;\n"]))),Q=Object(B.a)(A.b)(s||(s=Object(J.a)(["\n  display:block;\n  width: 10%;\n"]))),R=t(29),T=Object(S.createContext)({}),U=function(e){var n=e.children,t=Object(S.useState)([]),c=Object(M.a)(t,2),a=c[0],r=c[1],i=Object(S.useState)([]),j=Object(M.a)(i,2),o=j[0],s=j[1],d=Object(S.useState)([]),l=Object(M.a)(d,2),b=l[0],x=l[1],h=Object(S.useState)([]),O=Object(M.a)(h,2),u=O[0],p=O[1];return Object(I.jsx)(T.Provider,{value:{onClickAdd:function(e,n,t,c,i,j,d,l,h,O){""!==e?(r([].concat(Object(R.a)(a),[{name:e,tel:n,streetAddress:t,memo:d}])),"meat"===h&&s([].concat(Object(R.a)(o),[{name:e,tel:n,streetAddress:t,memo:d}])),"fish"===h&&x([].concat(Object(R.a)(b),[{name:e,tel:n,streetAddress:t,memo:d}])),"noodle"===h&&p([].concat(Object(R.a)(u),[{name:e,tel:n,streetAddress:t,memo:d}])),c(""),i(""),j(""),l(""),O("")):alert("\u5e97\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")},allState:a,setAllState:r,meatState:o,setMeatState:s,fishState:b,setFishState:x,noodleState:u,setNoodleState:p},children:n})},V=t(80),W=t(41),X=t.n(W),Z=function(){return Object(I.jsx)("div",{children:Object(I.jsx)(V.a,{children:Object(I.jsxs)("label",{children:[Object(I.jsx)(X.a,{}),Object(I.jsx)($,{type:"file",id:"image"})]})})})},$=B.a.input(d||(d=Object(J.a)(["\n  display:none;\n"]))),_=function(){var e=Object(S.useContext)(T).onClickAdd,n=Object(S.useState)(""),t=Object(M.a)(n,2),c=t[0],a=t[1],r=Object(S.useState)(""),i=Object(M.a)(r,2),j=i[0],o=i[1],s=Object(S.useState)(""),d=Object(M.a)(s,2),l=d[0],b=d[1],x=Object(S.useState)(""),h=Object(M.a)(x,2),O=h[0],u=h[1],p=Object(S.useState)(""),g=Object(M.a)(p,2),m=g[0],f=g[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{}),Object(I.jsx)(ee,{children:"\u767b\u9332\u753b\u9762"}),Object(I.jsxs)(ne,{children:[Object(I.jsx)(Z,{}),Object(I.jsx)("label",{children:"\u5e97\u540d"}),Object(I.jsx)("input",{placeholder:"\u5e97\u540d",value:c,onChange:function(e){a(e.target.value)}}),Object(I.jsx)("label",{children:"\u96fb\u8a71\u756a\u53f7"}),Object(I.jsx)("input",{placeholder:"\u96fb\u8a71\u756a\u53f7",value:j,onChange:function(e){o(e.target.value)}}),Object(I.jsx)("label",{children:"\u4f4f\u6240"}),Object(I.jsx)("input",{placeholder:"\u4f4f\u6240",value:l,onChange:function(e){b(e.target.value)}}),Object(I.jsx)("label",{for:"category",children:"\u30ab\u30c6\u30b4\u30ea\u30fc"}),Object(I.jsxs)("select",{id:"category",value:m,onChange:function(e){f(e.target.value)},children:[Object(I.jsx)("option",{value:"",children:"\u30ab\u30c6\u30b4\u30ea\u30fc\u9078\u629e"}),Object(I.jsx)("option",{value:"meat",children:"\u8089"}),Object(I.jsx)("option",{value:"fish",children:"\u9b5a"}),Object(I.jsx)("option",{value:"noodle",children:"\u9eba"})]}),Object(I.jsx)("label",{children:"\u30e1\u30e2"}),Object(I.jsx)("textarea",{placeholder:"\u30e1\u30e2",value:O,onChange:function(e){u(e.target.value)}}),Object(I.jsx)("button",{type:"button",onClick:function(){return e(c,j,l,a,o,b,O,u,m,f)},children:"\u767b\u9332"})]}),Object(I.jsx)(H,{})]})},ee=B.a.h2(l||(l=Object(J.a)(["\n  font-size:40px;\n  text-align:center;\n"]))),ne=B.a.form(b||(b=Object(J.a)(["\n  margin: 60px auto;\n  padding: 10px;\n  display: block;\n  background-color: #e6e6e6;\n  width: 60%;\n  label{\n    margin-top:20px;\n    margin: auto;\n    display:block;\n    font-size:24px;\n    width:80%;\n  }\n  input{\n    margin:0 auto;\n    display: block;\n    background-color: #FFF;\n    width:80%;\n    height:30px;\n    border: 1px solid #aaa;\n  }\n  textarea{\n    margin: 0 auto;\n    display:block;\n    background-color: #FFF;\n    width:80%;\n    height:120px;\n    border: 1px solid #aaa;\n  }\n  select{\n    margin: 0 auto;\n    display: block;\n    background-color: #fff;\n    border: 1px solid #aaa;\n    width:80%;\n  }\n  button{\n    margin: 20px auto;\n    padding: 20px;\n    display: block;\n    background-color: #9CFAE4;\n    border-radius:20px;\n    box-shadow: 0 4px 0 #8ed1c2;\n    &:hover{\n      box-shadow: 0 0 0;\n      transform: translateY(3px);\n    }\n  }\n"]))),te=function(){var e=Object(S.useContext)(T).allState;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{}),Object(I.jsx)(ce,{children:"\u5168\u3066"}),Object(I.jsx)(ae,{children:e.map((function(e,n){return Object(I.jsxs)(re,{children:[Object(I.jsx)("img",{src:G}),Object(I.jsx)("h3",{children:e.name}),Object(I.jsx)("p",{children:e.tel}),Object(I.jsx)("p",{children:e.streetAddress}),Object(I.jsx)("p",{children:e.memo})]},n)}))}),Object(I.jsx)(H,{})]})},ce=B.a.h2(x||(x=Object(J.a)(["\n  margin: 0 auto;\n  padding: 16px;\n  text-align: center;\n  background-color: #fc7979;\n  border-radius:10px;\n  font-size:30px;\n  font-weight: bold;\n  color: #333;\n  width:18%;\n"]))),ae=B.a.ul(h||(h=Object(J.a)(["\n  padding-bottom:100px;\n"]))),re=B.a.li(O||(O=Object(J.a)(["\n  margin: 20px auto;\n  display:flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: gray;\n  width:50%;\n\n  img{\n    width:16%;\n  }\n  h3{\n    font-size: 28px;\n    width:50%;\n  }\n"]))),ie=function(){var e=Object(S.useContext)(T).meatState;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{}),Object(I.jsx)(je,{children:"\u8089\u985e"}),Object(I.jsx)(oe,{children:e.map((function(e,n){return Object(I.jsxs)(se,{children:[Object(I.jsx)("img",{src:G}),Object(I.jsx)("h3",{children:e.name}),Object(I.jsx)("p",{children:e.tel}),Object(I.jsx)("p",{children:e.streetAddress}),Object(I.jsx)("p",{children:e.memo})]},n)}))}),Object(I.jsx)(H,{})]})},je=B.a.h2(u||(u=Object(J.a)(["\n  margin: 0 auto;\n  padding: 16px;\n  text-align: center;\n  background-color: #f08137;\n  border-radius:10px;\n  font-size:30px;\n  font-weight: bold;\n  color: #333;\n  width:18%; \n"]))),oe=B.a.ul(p||(p=Object(J.a)(["\n  padding-bottom:100px;\n"]))),se=B.a.li(g||(g=Object(J.a)(["\n  margin: 20px auto;\n  display:flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: gray;\n  width:50%;\n\n  img{\n    width:16%;\n  }\n  h3{\n    font-size: 28px;\n    width:50%;\n  }\n"]))),de=function(){var e=Object(S.useContext)(T).fishState;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{}),Object(I.jsx)(le,{children:"\u9b5a\u985e"}),Object(I.jsx)(be,{children:e.map((function(e,n){return Object(I.jsxs)(xe,{children:[Object(I.jsx)("img",{src:G}),Object(I.jsx)("h3",{children:e.name}),Object(I.jsx)("p",{children:e.tel}),Object(I.jsx)("p",{children:e.streetAddress}),Object(I.jsx)("p",{children:e.memo})]},n)}))}),Object(I.jsx)(H,{})]})},le=B.a.h2(m||(m=Object(J.a)(["\n  margin: 0 auto;\n  padding: 16px;\n  text-align: center;\n  background-color: #4bc7f8;\n  border-radius:10px;\n  font-size:30px;\n  font-weight: bold;\n  color: #333;\n  width:18%; \n"]))),be=B.a.ul(f||(f=Object(J.a)(["\n  padding-bottom:100px;\n"]))),xe=B.a.li(w||(w=Object(J.a)(["\n  margin: 20px auto;\n  display:flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: gray;\n  width:50%;\n\n  img{\n    width:16%;\n  }\n  h3{\n    font-size: 28px;\n    width:50%;\n  }\n"]))),he=function(){var e=Object(S.useContext)(T).noodleState;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{}),Object(I.jsx)(Oe,{children:"\u9eba\u985e"}),Object(I.jsx)(ue,{children:e.map((function(e,n){return Object(I.jsxs)(pe,{children:[Object(I.jsx)("img",{src:G}),Object(I.jsx)("h3",{children:e.name}),Object(I.jsx)("p",{children:e.tel}),Object(I.jsx)("p",{children:e.streetAddress}),Object(I.jsx)("p",{children:e.memo})]},n)}))}),Object(I.jsx)(H,{})]})},Oe=B.a.h2(k||(k=Object(J.a)(["\n  margin: 0 auto;\n  padding: 16px;\n  text-align: center;\n  background-color: #eb25b9;\n  border-radius:10px;\n  font-size:30px;\n  font-weight: bold;\n  color: #333;\n  width:18%; \n"]))),ue=B.a.ul(y||(y=Object(J.a)(["\n  padding-bottom:100px;\n"]))),pe=B.a.li(v||(v=Object(J.a)(["\n  margin: 20px auto;\n  display:flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: gray;\n  width:50%;\n\n  img{\n    width:16%;\n  }\n  h3{\n    font-size: 28px;\n    width:50%;\n  }\n"]))),ge=function(){return Object(I.jsx)(A.a,{children:Object(I.jsxs)(E.c,{children:[Object(I.jsx)(E.a,{exact:!0,path:"/",children:Object(I.jsx)(_,{})}),Object(I.jsx)(E.a,{path:"/all",children:Object(I.jsx)(te,{})}),Object(I.jsx)(E.a,{path:"/meat",children:Object(I.jsx)(ie,{})}),Object(I.jsx)(E.a,{path:"/fish",children:Object(I.jsx)(de,{})}),Object(I.jsx)(E.a,{path:"/noodle",children:Object(I.jsx)(he,{})})]})})},me=function(){return Object(I.jsx)(U,{children:Object(I.jsx)(ge,{})})};z.a.render(Object(I.jsx)(C.a.StrictMode,{children:Object(I.jsx)(me,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.cebbd13a.chunk.js.map