(()=>{"use strict";var n,e,t,a,o,r,i,c,d,s,l,p,m,u,h,g,f={426:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([n.id,':root {\n  --link-color: #402535;\n  --font: "Cabin", sans-serif;\n  /* --header-color: #F3F7F2; */\n  --header-color: #eff5ed;\n  --hover-color: #6d826c;\n  /* --background-color: #F7FCF8; */\n  --background-color: #fcfcf7;\n  --logo-height: 80px;\n  --text-color: #1b1619;\n  scroll-padding: 124px;\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--font);\n  text-align: center;\n  box-sizing: border-box;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  letter-spacing: 0.07em;\n}\n\nheader {\n  position: fixed;\n  width: 100%;\n  max-height: 124px;\n  z-index: 3;\n  background-image: linear-gradient(\n    to right,\n    #f7f1f0,\n    #f7f1f0 5px,\n    #dcebd8 5px,\n    #dcebd8\n  );\n  background-size: 10px 100%;\n}\n\n.header--expanded {\n  max-height: none;\n}\n\n.header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.header-row img {\n  height: var(--logo-height);\n}\n\n#burger {\n  color: var(--link-color);\n  transition: all 300ms ease;\n  position: relative;\n  /* text-shadow: 0px 0px 1px var(--hover-color); */\n  width: 100%;\n  cursor: pointer;\n  /* background-color: rgba(0, 0, 0, 0.1); */\n}\n\n#burger:hover {\n  color: var(--hover-color);\n  /* background-color: rgba(0, 0, 0, 0.2); */\n}\n\n.btn {\n  border-radius: 21px;\n  padding: 12px;\n  background-color: var(--link-color);\n  color: var(--background-color);\n  transition: all 300ms ease;\n}\n\n.btn:hover {\n  background-color: var(--hover-color);\n}\n\n.navigation {\n  display: none;\n}\n\n.navigation--visible {\n  display: block;\n}\n\nnav {\n  margin: 0;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.navigation ul {\n  width: 100%;\n  padding: 0 0 7px 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 6px;\n  /* text-shadow: 0px 0px 1px var(--hover-color); */\n}\n\na {\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.navlink {\n  color: var(--link-color);\n  background-color: var(--background-color);\n  box-shadow: 0 2px var(--link-color);\n  padding: 8px 8px;\n  cursor: pointer;\n  width: 100%;\n  position: relative;\n  font-weight: 900;\n  white-space: nowrap;\n  transition: all 300ms ease;\n}\n\n.navlink:hover {\n  box-shadow: 0 4px var(--link-color);\n  transform: translateY(-2px);\n}\n\n.main-image {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  margin: 0 auto 20px auto;\n  z-index: -1;\n  padding-top: calc(20px + var(--logo-height));\n}\n\n.main-image img {\n  width: 100%;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 28px;\n}\n\n.bem-vindo {\n  padding-bottom: 24px;\n  margin: 0 12px 0 12px;\n}\n\n.bem-vindo p {\n  padding-bottom: 24px;\n}\n\n.carrossel {\n  max-width: 90%;\n  height: 280px;\n  position: relative;\n  margin: 40px auto;\n}\n\n.carrossel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.fotos p {\n  margin: 0 10px 50px 10px;\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  z-index: 0;\n  transition: 200ms ease-in-out;\n  transition-delay: 200ms;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.slide[data-ativo] {\n  opacity: 1;\n  transition-delay: 0;\n  z-index: 1;\n}\n\n.slide > img {\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 38px;\n}\n\n.btn-carrossel {\n  position: absolute;\n  z-index: 2;\n  background: none;\n  border: none;\n  border-radius: 8px;\n  font-size: 2.4rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--background-color);\n  opacity: 0.8;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.btn-carrossel:hover,\n.btn-carrossel:focus {\n  color: var(--background-color);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.btn-carrossel.prev {\n  left: 1rem;\n}\n\n.btn-carrossel.next {\n  right: 1rem;\n}\n\n.contato {\n  margin: 20px auto;\n  width: 100%;\n  overflow: hidden;\n  background-color: var(--link-color);\n  color: var(--background-color);\n  padding-bottom: 20px;\n}\n\n.contato p {\n  padding: 0 10px;\n}\n\n.contato a {\n  color: var(--background-color);\n  display: flex;\n  align-items: center;\n}\n\n.contato ul {\n  margin: auto;\n  padding: 0;\n  padding-bottom: 16px;\n}\n\n.contato ul li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n}\n\n.icon {\n  max-height: 40px;\n  padding-left: 10px;\n}\n\n.contato .alt {\n  background-color: var(--header-color);\n  color: var(--link-color);\n}\n\n.contato .alt:hover {\n  background-color: var(--hover-color);\n  color: var(--background-color);\n}\n\n.contato .btn {\n  margin-top: 25px;\n}\n\n#mapa {\n  width: min(90%, 800px);\n}\n\n@media only screen and (min-width: 768px) {\n  .navigation {\n    display: block;\n  }\n  .navigation ul {\n    flex-direction: row;\n    justify-content: center;\n    gap: 14px;\n  }\n  .navlink {\n    width: 240px;\n  }\n  #burger {\n    display: none;\n  }\n  header {\n    max-height: none;\n  }\n  .header-row {\n    width: 1200px;\n    margin: auto;\n    padding-bottom: 0px;\n  }\n  .main-container {\n    width: 1200px;\n    margin: auto;\n  }\n  #mapa {\n    height: 450px;\n  }\n  .carrossel {\n    height: 600px;\n  }\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},i=[],c=0;c<n.length;c++){var d=n[c],s=a.base?d[0]+a.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var d=a(n,o),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},408:(n,e,t)=>{t.d(e,{Z:()=>h});const a=t.p+"11e2cfb289376783653d.png",o=t.p+"ca40d3d9b8ea5704315b.jpg",r=t.p+"c87c6d06146629d07df8.jpg",i=t.p+"3120342cf071925c1251.jpg",c=t.p+"cf1ca2725545e86b7eb0.jpg",d=t.p+"7a20e467cbbb8e5f836d.jpg",s=t.p+"84499ceb70fd37f4d8cf.jpg",l=t.p+"9f061cbd2dbba00d0150.jpg",p=t.p+"7dc3f3267bee9b39fd8d.svg",m=t.p+"8ff7ce92ad753b591ed4.svg";var u=t(495);function h(){const n=document.getElementById("body-container");n.appendChild(function(){const n=document.createElement("header"),e=document.createElement("div");e.classList.add("header-row");const t=new Image;t.src=a,t.alt="logo";const o=document.createElement("a");o.classList.add("btn"),o.id="btn-contato",o.href="#contato",o.textContent="Contato";const r=document.createElement("span");return r.classList.add("material-symbols-outlined"),r.id="burger",r.onclick=u.js,r.textContent="menu",e.appendChild(t),e.appendChild(o),n.appendChild(e),n.appendChild(function(){const n=document.createElement("nav");n.classList.add("navigation");const e=document.createElement("ul"),t=document.createElement("li");t.classList.add("navlink"),t.textContent="Página Principal";const a=document.createElement("li");a.classList.add("navlink"),a.textContent="Produtos";const o=document.createElement("li");return o.classList.add("navlink"),o.textContent="Sobre nós",e.appendChild(t),e.appendChild(a),e.appendChild(o),n.appendChild(e),n}()),n.appendChild(r),n}()),n.appendChild(function(){const n=document.createElement("div");n.className="main-container";const e=document.createElement("div");e.classList.add("main-image");const t=new Image;t.src=o,t.alt="alguns produtos",e.appendChild(t);const a=document.createElement("section");a.classList.add("bem-vindo");const p=document.createElement("h1");p.textContent="Bem-vindo à Panis";const m=document.createElement("p");m.textContent="Somos uma padaria artesanal que faz pães de fermentação natural e outras coisas gostosas";const u=document.createElement("a");u.href="https://panis-padaria-artesanal.goomer.app/",u.classList.add("btn"),u.target="_blank",u.textContent="Faça seu pedido!",a.appendChild(p),a.appendChild(m),a.appendChild(u);const h=document.createElement("section");h.classList.add("fotos"),h.ariaLabel="fotos";const g=document.createElement("div");g.classList.add("carrossel"),g.dataset.carrossel="";const f=document.createElement("button");f.classList.add("btn-carrossel","next"),f.dataset.carrosselBtn="next",f.textContent=">";const v=document.createElement("button");v.classList.add("btn-carrossel","prev"),v.dataset.carrosselBtn="prev",v.textContent="<";const b=document.createElement("ul");b.dataset.slides="";const x=[{src:r,alt:"Pão",ativo:!0},{src:i,alt:"Focaccia",ativo:!1},{src:c,alt:"Cookie",ativo:!1},{src:d,alt:"Pão",ativo:!1},{src:s,alt:"Pão",ativo:!1},{src:l,alt:"Pão",ativo:!1}];for(var C=0;C<x.length;C++){const n=x[C],e=document.createElement("li");e.className="slide",n.ativo&&(e.dataset.ativo="");const t=document.createElement("img");t.src=n.src,t.alt=n.alt,e.appendChild(t),b.appendChild(e)}g.appendChild(f),g.appendChild(v),g.appendChild(b);const y=document.createElement("p");return y.textContent="Além dos pães também fazemos os melhores cookies da cidade, focaccia e pães de queijo. Todos os nossos produtos são veganos.",h.appendChild(g),h.appendChild(y),n.appendChild(e),n.appendChild(a),n.appendChild(h),n}()),n.appendChild(function(){const n=document.createElement("section");n.classList.add("contato");const e=document.createElement("h2");e.textContent="Contato";const t=document.createElement("p");t.textContent="Você pode entrar em contato com a gente de diferentes formas:";const a=document.createElement("ul"),o=document.createElement("li");o.textContent="Telefone:"+String.fromCharCode(160);const r=document.createElement("a");r.href="https://wa.me/554130456061",r.target="_blank",r.textContent="41 3045-6061";const i=new Image;i.classList.add("icon"),i.src=p,i.alt="whatsapp",r.appendChild(i),o.appendChild(r);const c=document.createElement("li");c.textContent="Instagram:"+String.fromCharCode(160);const d=document.createElement("a");d.href="https://www.instagram.com/panispaozinho/",d.target="_blank",d.textContent="@panispaozinho";const s=new Image;s.classList.add("icon"),s.src=m,s.alt="instagram",d.appendChild(s),c.appendChild(d);const l=document.createElement("li");l.textContent="E-mail:"+String.fromCharCode(160);const u=document.createElement("a");u.href="panispadaria@gmail.com",u.textContent="panispadaria@gmail.com",l.appendChild(u);const h=document.createElement("li"),g=document.createElement("a");g.href="https://panis-padaria-artesanal.goomer.app/",g.classList.add("btn"),g.classList.add("alt"),g.target="_blank",g.textContent="Delivery",h.appendChild(g),a.appendChild(o),a.appendChild(c),a.appendChild(l),a.appendChild(h);const f=document.createElement("h2");f.textContent="Horário de funcionamento:";const v=document.createElement("p");v.textContent="Terça: 14h às 18h30";const b=document.createElement("p");b.textContent="Sábado: 9h às 12h30";const x=document.createElement("p");x.textContent="(observação: aos sábados pela manhã acontece uma feira livre na nossa rua, durante a qual não é possível passar pela rua de carro)";const C=document.createElement("h2");C.textContent="Como chegar?";const y=document.createElement("p");y.textContent="Nossa loja fica em Curitiba, no bairro Juvevê (na rua da feira de sábado)";const w=document.createElement("p");w.textContent="Rua Alberto Bolliger, 553 fundos";const E=document.createElement("iframe");return E.id="mapa",E.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.6144309078004!2d-49.260484884877684!3d-25.41771388379416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5791115fdaf%3A0x2a26677e0e58e555!2sPanis%20-%20Padaria%20Artesanal!5e0!3m2!1spt-BR!2sbr!4v1677958259982!5m2!1spt-BR!2sbr",E.width="90%",E.height="320px",E.style="border: 0;",E.allowFullscreen="",E.loading="lazy",E.referrerPolicy="no-referrer-when-downgrade",n.appendChild(e),n.appendChild(t),n.appendChild(a),n.appendChild(f),n.appendChild(v),n.appendChild(b),n.appendChild(x),n.appendChild(C),n.appendChild(y),n.appendChild(w),n.appendChild(E),n}())}},495:(n,e,t)=>{t.d(e,{UO:()=>o,js:()=>r});let a=setInterval((()=>{document.querySelector('[data-carrossel-btn="next"]').click()}),3e3);function o(){document.querySelectorAll("[data-carrossel-btn]").forEach((n=>{n.addEventListener("click",(()=>{clearInterval(a),a=setInterval((()=>{document.querySelector('[data-carrossel-btn="next"]').click()}),3e3);const e="next"===n.dataset.carrosselBtn?1:-1,t=n.closest("[data-carrossel]").querySelector("[data-slides]"),o=t.querySelector("[data-ativo]");let r=[...t.children].indexOf(o)+e;r<0&&(r=t.children.length-1),r>=t.children.length&&(r=0),t.children[r].dataset.ativo=!0,delete o.dataset.ativo}))}))}function r(){const n=document.querySelector(".navigation"),e=document.querySelector("header");n.classList.contains("navigation--visible")?(n.classList.remove("navigation--visible"),e.classList.remove("header--expanded")):(n.classList.add("navigation--visible"),e.classList.add("header--expanded"))}}},v={};function b(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return f[n](t,t.exports,b),t.exports}b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var t in e)b.o(e,t)&&!b.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;b.g.importScripts&&(n=b.g.location+"");var e=b.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=n})(),b.nc=void 0,n=b(408),e=b(495),t=b(379),a=b.n(t),o=b(795),r=b.n(o),i=b(569),c=b.n(i),d=b(565),s=b.n(d),l=b(216),p=b.n(l),m=b(589),u=b.n(m),h=b(426),(g={}).styleTagTransform=u(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),a()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,(0,n.Z)(),(0,e.UO)()})();