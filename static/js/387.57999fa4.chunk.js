"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{2940:function(n,t,e){e.d(t,{Z:function(){return a}});var r,o=e(168),c=e(6444).ZP.button(r||(r=(0,o.Z)(["\n  padding: ","px;\n  border-radius: ",";\n  border: none;\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n  cursor: pointer;\n\n  font-weight: ",";\n  text-shadow: ",";\n\n  transition-property: transform;\n  transition-timing-function: linear;\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.darkRed}),(function(n){return n.theme.shadow.black}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.shadow.black})),i=e(184),a=function(n){var t=n.func,e=n.text,r=n.type;return(0,i.jsx)(c,{type:r,onClick:t,children:e})}},4387:function(n,t,e){e.r(t),e.d(t,{Reviews:function(){return y},default:function(){return S}});var r,o,c,i=e(885),a=e(2791),u=e(6871),s=e(9545),d=e(966),h=e(5346),f=e(2940),l=e(168),p=e(6444),m=p.ZP.span(r||(r=(0,l.Z)(["\n  color: ",";\n  font-weight: ",";\n  text-shadow: ",";\n"])),(function(n){return n.theme.colors.darkRed}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.shadow.black})),x=p.ZP.img(o||(o=(0,l.Z)(["\n  display: block;\n  width: 62px;\n\n  border-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),g=p.ZP.li(c||(c=(0,l.Z)(["\n  display: flex;\n\n  margin-bottom: ","px;\n  box-shadow: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.shadow.black})),b=e(7596),v=e(3213),w=e(184),j="idle",k="pending",_="resolved",Z="rejected",y=function(){var n=(0,u.UO)().movieId,t=(0,a.useState)(""),e=(0,i.Z)(t,2),r=e[0],o=e[1],c=(0,a.useState)(1),l=(0,i.Z)(c,2),p=l[0],y=l[1],S=(0,a.useState)(j),D=(0,i.Z)(S,2),L=D[0],P=D[1];(0,a.useEffect)((function(){(0,s.Tn)(n,p).then((function(n){if(P(k),n.data.total_pages<p)return P(Z);o(n.data.results),P(_)})).catch((function(n){(0,b.Am)(n)}))}),[n,p]);return r?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(v.x,{as:"ul",p:4,children:[L===k&&(0,w.jsx)(d.Z,{}),r.map((function(n){var t=n.author_details.avatar_path,e=n.content,r=n.created_at,o=n.updated_at,c=n.id,i=n.author;return(0,w.jsxs)(g,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(x,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):h,alt:"author"})}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("p",{children:[(0,w.jsx)(m,{children:"date:"}),new Date(r).toLocaleDateString("en-GB")]}),(0,w.jsxs)("p",{children:[(0,w.jsx)(m,{children:"author:"})," ",i]}),(0,w.jsxs)("p",{children:[(0,w.jsx)(m,{children:"review:"})," ",e]}),(0,w.jsxs)("p",{children:[(0,w.jsx)(m,{children:"update:"})," ",new Date(o).toLocaleDateString("en-GB")]})]})]},c)}))]}),L===_&&r.length%20===0&&(0,w.jsx)(f.Z,{func:function(){y((function(n){return n+1}))},text:"Load more",type:"button"})]}):(0,w.jsx)("p",{children:"Sorry, there are no reviews :("})},S=y},9545:function(n,t,e){e.d(t,{IQ:function(){return s},Tn:function(){return d},XT:function(){return i},on:function(){return a},rs:function(){return u}});var r=e(4569),o=e.n(r),c="c01f14dcdb58e9cec669b1017a4d540c";o().defaults.baseURL="https://api.themoviedb.org/3";var i=function(n){return o().get("/trending/movie/week?api_key=".concat(c,"&page=").concat(n))},a=function(n,t){return o().get("/search/movie?api_key=".concat(c,"&page=").concat(t,"&query=").concat(n))},u=function(n){return o().get("/movie/".concat(n,"?api_key=").concat(c))},s=function(n){return o().get("/movie/".concat(n,"/credits?api_key=").concat(c))},d=function(n,t){return o().get("/movie/".concat(n,"/reviews?api_key=").concat(c,"&page=").concat(t))}},5346:function(n,t,e){n.exports=e.p+"static/media/TemplateActor.09aed3b55dea4a15af94.webp"}}]);
//# sourceMappingURL=387.57999fa4.chunk.js.map