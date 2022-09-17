"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[30],{6030:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,o,c,a,s=t(885),u=t(2791),d=t(6871),l=t(9545),h=t(3213),f=t(168),m=t(6444),p=t(3504),x=m.ZP.h2(r||(r=(0,f.Z)(["\n  margin-bottom: ","px;\n  text-transform: uppercase;\n  color: ",";\n  text-shadow: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.darkRed}),(function(n){return n.theme.shadow.redText})),g=(0,m.ZP)(p.OL)(i||(i=(0,f.Z)(["\n  display: inline-block;\n  margin-left: ","px;\n  border-radius: ",";\n  padding: ","px;\n  color: ",";\n  background-color: ",";\n\n  text-decoration: none;\n\n  box-shadow: ",";\n  cursor: pointer;\n\n  font-weight: ",";\n  text-shadow: ",";\n\n  transition-property: transform;\n  transition-timing-function: linear;\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.darkRed}),(function(n){return n.theme.shadow.black}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.shadow.black})),v=m.ZP.img(o||(o=(0,f.Z)(["\n  display: block;\n  width: 480px;\n  margin-right: ","px;\n  border-radius: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal})),b=m.ZP.p(c||(c=(0,f.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),j=m.ZP.span(a||(a=(0,f.Z)(["\n  color: ",";\n  font-weight: ",";\n  text-shadow: ",";\n"])),(function(n){return n.theme.colors.darkRed}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.shadow.black})),k=t(966),w=t(184),_=function(){var n,e,t=(0,u.useState)(""),r=(0,s.Z)(t,2),i=r[0],o=r[1],c=(0,u.useState)(""),a=(0,s.Z)(c,2),f=a[0],m=a[1],p=(0,d.UO)().movieId,_=(0,d.TH)();if((0,u.useEffect)((function(){(0,l.rs)(p).then((function(n){o(n.data),m(n.data.genres.map((function(n){return n.name})).join(", "))}))}),[p]),i)return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{to:null!==(n=null===(e=_.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",children:"Back"}),(0,w.jsxs)(h.x,{display:"flex",textAlign:"center",p:4,children:[(0,w.jsx)(v,{src:"https://image.tmdb.org/t/p/w500".concat(i.backdrop_path),alt:i.title}),(0,w.jsxs)("div",{children:[(0,w.jsx)(x,{children:i.title}),(0,w.jsxs)(b,{children:[(0,w.jsx)(j,{children:"User score: "}),Math.round(10*i.vote_average),"%"]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(j,{children:"Tagline: "}),i.tagline]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(j,{children:"Synopsis: "}),i.overview]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(j,{children:"Genres: "}),f]})]})]}),(0,w.jsxs)(h.x,{as:"ul",display:"flex",justifyContent:"center",mb:3,children:[(0,w.jsx)("li",{children:(0,w.jsx)(g,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(g,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(u.Suspense,{fallback:(0,w.jsx)(k.Z,{}),children:(0,w.jsx)(d.j3,{})})]})}},9545:function(n,e,t){t.d(e,{IQ:function(){return u},Tn:function(){return d},XT:function(){return c},on:function(){return a},rs:function(){return s}});var r=t(4569),i=t.n(r),o="c01f14dcdb58e9cec669b1017a4d540c";i().defaults.baseURL="https://api.themoviedb.org/3";var c=function(n){return i().get("/trending/movie/week?api_key=".concat(o,"&page=").concat(n))},a=function(n,e){return i().get("/search/movie?api_key=".concat(o,"&page=").concat(e,"&query=").concat(n))},s=function(n){return i().get("/movie/".concat(n,"?api_key=").concat(o))},u=function(n){return i().get("/movie/".concat(n,"/credits?api_key=").concat(o))},d=function(n,e){return i().get("/movie/".concat(n,"/reviews?api_key=").concat(o,"&page=").concat(e))}}}]);
//# sourceMappingURL=30.df9bd95f.chunk.js.map