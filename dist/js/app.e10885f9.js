(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],v=0,f=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"199c":function(t,e){},"23be":function(t,e,a){"use strict";var n=a("199c"),r=a.n(n);e["default"]=r.a},"34bd":function(t,e,a){"use strict";var n=a("544d"),r=a.n(n);r.a},"3d40":function(t,e,a){},"3dfd":function(t,e,a){"use strict";var n=a("ae52"),r=a("23be"),s=a("2877"),i=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"544d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("3dfd"),s=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container"},[a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.selecionar(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Selecionar região")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.country.name,expression:"country.name"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.country,"name",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Escolha uma região")]),a("option",{attrs:{value:"br"}},[t._v("BR")]),a("option",{attrs:{value:"us"}},[t._v("USA")]),a("option",{attrs:{value:"gb"}},[t._v("UK")])])]),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[t._v("Prosseguir")])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("API Gateway - NEWS")])])}],l=a("bc3a"),c=a.n(l),u=c.a.create({baseURL:"https://api-gateway-nodejs.herokuapp.com/api/"}),v=c.a.create({baseURL:"https://api-spring-1.herokuapp.com/api/"}),f={listar:function(){return u.get("data")},selecionar:function(t){return u.post("country",t)}},d={data:function(){return{country:{name:""}}},methods:{selecionar:function(){var t=this;f.selecionar(this.country).then((function(e){t.$router.push("/load")}))}}},p=d,h=(a("34bd"),a("2877")),m=Object(h["a"])(p,i,o,!1,null,"f7666534",null),b=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("API Gateway - NEWS")]),a("ul",[a("li",["br"===t.country?a("img",{attrs:{src:"https://image.flaticon.com/icons/svg/330/330430.svg",width:"30px"}}):t._e(),"us"===t.country?a("img",{attrs:{src:"https://image.flaticon.com/icons/svg/330/330459.svg",width:"30px"}}):t._e(),"gb"===t.country?a("img",{attrs:{src:"https://image.flaticon.com/icons/svg/330/330425.svg",width:"30px"}}):t._e()]),a("li",[a("a",{attrs:{href:"/salvo",title:"Ver notícias salvas"}},[a("div",{staticClass:"contadorLer"},[a("span",[t._v(t._s(t.salvos.length))])])])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"currency"},[a("ul",[a("li",[a("span",[t._v("USD $")]),a("br"),a("span",[t._v(" R$"+t._s(t.dolar)+" ")])]),a("li",[a("span",[t._v("GBP £")]),a("br"),a("span",[t._v(" R$"+t._s(t.libra)+" ")])])])]),t._l(t.articles,(function(e,n){return a("ul",{key:e.id},[a("li",[a("a",{attrs:{href:""+e.url}},[a("div",{staticClass:"news",class:{active:0===n}},[a("div",{staticClass:"news-image"},[a("img",{attrs:{src:""+e.urlToImage,alt:""}})]),a("div",{staticClass:"text"},[a("small",[t._v(t._s(e.publishedAt.substring(0,10).split("-").reverse().join("-")))]),t._v(" "),a("br"),e.title.length<90?a("span",{attrs:{title:""+e.title}},[t._v(" "+t._s(e.title.substring(0,90))+" ")]):t._e(),e.title.length>90?a("span",{attrs:{title:""+e.title}},[t._v(" "+t._s(e.title.substring(0,90))+" ... ")]):t._e(),a("br"),a("small",[t._v(" "+t._s(e.source.name)+" ")])])])]),a("button",{staticStyle:{"background-color":"white",border:"none","font-size":"20px",position:"absoute"},attrs:{type:"submit",title:"Ler mais tarde"},on:{click:function(a){t.lerMaisTarde(e.title,e.url,e.urlToImage,e.publishedAt.substring(0,10).split("-").reverse().join("-"))}}},[a("img",{attrs:{src:"https://img.icons8.com/ios-glyphs/30/000000/bookmark-ribbon.png"}})])])])}))],2)])},_=[],y={listar:function(){return v.get("noticias")},marcarLerDepois:function(t){return v.post("noticia",t)},remover:function(t){return v.delete("noticia",t)}},w=a("d4ec"),C=function t(e,a,n,r){Object(w["a"])(this,t),this.titulo=e,this.url=a,this.imagem=n,this.data=r},x={data:function(){return{dolar:"",libra:"",country:"",articles:[],salvos:[]}},mounted:function(){var t=this;f.listar().then((function(e){console.log(e.data[2]),t.dolar=e.data[1].USD.low,t.libra=e.data[1].GBP.low,t.country=e.data[0].country,t.articles=e.data[2].articles})),y.listar().then((function(e){console.log(e.data),t.salvos=e.data}))},methods:{lerMaisTarde:function(t,e,a,n){var r=this,s=new C(t,e,a,n);console.log(s),y.marcarLerDepois(s).then((function(t){r.$router.push("/load")}))}}},j=x,S=(a("fcec"),Object(h["a"])(j,g,_,!1,null,"499fe654",null)),O=S.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container"},[a("div",{attrs:{id:"app"}},[a("scaling-squares-spinner",{attrs:{"animation-duration":1250,size:65,color:"#000"}})],1)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("API Gateway - NEWS")])])}],E=a("4583"),k={components:{ScalingSquaresSpinner:E["a"]},created:function(){setInterval()},mounted:function(){setInterval((function(){window.location.href="/home"}),3200),setInterval()}},I=k,A=(a("cd20"),Object(h["a"])(I,$,P,!1,null,"62d077d6",null)),L=A.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("API Gateway - NEWS")]),a("ul",[t._m(0),a("li",[a("a",{attrs:{href:"/salvo",title:"Ver notícias salvas"}},[a("div",{staticClass:"contadorLer"},[a("span",[t._v(t._s(t.articles.length))])])])])])]),a("div",{staticClass:"container"},t._l(t.articles.reverse(),(function(e,n){return a("ul",{key:e.id},[a("li",[a("a",{attrs:{href:""+e.url}},[a("div",{staticClass:"news",class:{active:100===n}},[a("div",{staticClass:"news-image"},[a("img",{attrs:{src:""+e.imagem,alt:""}})]),a("div",{staticClass:"text"},[a("small",[t._v(t._s(e.data))]),t._v(" "),a("br"),e.titulo.length<90?a("span",{attrs:{title:""+e.titulo}},[t._v(" "+t._s(e.titulo)+" ")]):t._e(),e.titulo.length>90?a("span",{attrs:{title:""+e.titulo}},[t._v(" "+t._s(e.titulo)+" ... ")]):t._e(),a("br")])])])])])})),0)])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/home",title:"Ver notícias salvas"}},[a("span",[t._v("Home")])])])}],G=function t(e,a,n,r,s){Object(w["a"])(this,t),this.id=e,this.titulo=a,this.url=n,this.imagem=r,this.data=s},M={data:function(){return{articles:[]}},mounted:function(){var t=this;y.listar().then((function(e){console.log(e.data),t.articles=e.data}))},methods:{removerDaLista:function(t,e,a,n,r){var s=new G(t,e,a,n,r);console.log(s),y.remover(s).then((function(t){}))}}},U=M,N=(a("c338"),Object(h["a"])(U,T,D,!1,null,"331328c6",null)),R=N.exports;n["a"].config.productionTip=!1,n["a"].use(s["a"]);var W=[{path:"/",component:b},{path:"/home",component:O},{path:"/load",component:L},{path:"/salvo",component:R}],B=new s["a"]({routes:W,mode:"history"});new n["a"]({router:B,render:function(t){return t(r["default"])}}).$mount("#app")},ae52:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},bea6:function(t,e,a){},c338:function(t,e,a){"use strict";var n=a("ec8b"),r=a.n(n);r.a},cd20:function(t,e,a){"use strict";var n=a("3d40"),r=a.n(n);r.a},ec8b:function(t,e,a){},fcec:function(t,e,a){"use strict";var n=a("bea6"),r=a.n(n);r.a}});
//# sourceMappingURL=app.e10885f9.js.map