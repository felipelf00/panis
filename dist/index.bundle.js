(()=>{"use strict";var n,e,t,o,a,r,i,d,c,s,l,p,m,u,h,g={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,':root {\n  --link-color: #402535;\n  --font: "Cabin", sans-serif;\n  /* --header-color: #F3F7F2; */\n  --header-color: #eff5ed;\n  --hover-color: #6d826c;\n  /* --background-color: #F7FCF8; */\n  --background-color: #fcfcf7;\n  --text-color: #1b1619;\n  --line-color: #d9607e;\n  --line-color-transparent: #d9607e15;\n  scroll-padding: 73px;\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: var(--font);\n  text-align: center;\n  box-sizing: border-box;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  letter-spacing: 0.02em;\n  position: relative;\n}\n\nh2 {\n  font-size: 1.7rem;\n  margin-top: 0;\n}\np {\n  font-size: 1.1rem;\n  white-space: pre-line;\n}\n\n.header-container {\n  position: fixed;\n  width: 100%;\n  z-index: 4;\n  background-image: linear-gradient(\n    to right,\n    #f7f1f0,\n    #f7f1f0 5px,\n    #dcebd8 5px,\n    #dcebd8\n  );\n  background-size: 10px 100%;\n  box-shadow: 0 3px var(--line-color);\n}\n\n.shadow--visible {\n  background: rgba(0, 0, 0, 0.7);\n  width: 100vw;\n  height: 100%;\n  position: absolute;\n  z-index: 3;\n}\n\n.header-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#burger {\n  grid-column: 1 / span 2;\n  grid-row: 2;\n}\n\n.navigation {\n  grid-column: 1 / span 2;\n}\n\n.logo-container {\n  height: 70px;\n}\n\n.header-row img {\n  height: 100px;\n  position: relative;\n  left: -4px;\n}\n\n#btn-contato {\n  position: relative;\n  top: 12px;\n  right: -12px;\n  display: inline-block;\n}\n\n#burger {\n  color: var(--link-color);\n  transition: all 300ms ease;\n  position: relative;\n  /* text-shadow: 0px 0px 1px var(--hover-color); */\n  width: 100%;\n  cursor: pointer;\n  /* background-color: rgba(0, 0, 0, 0.1); */\n}\n\n.btn {\n  border-radius: 21px;\n  padding: 12px;\n  background-color: var(--link-color);\n  color: var(--background-color);\n  transition: all 300ms ease;\n  box-shadow: 0 2px var(--line-color);\n}\n\n.btn:hover {\n  box-shadow: 0 4px var(--line-color);\n  transform: translateY(-2px);\n}\n\n.navigation {\n  display: none;\n}\n\n.navigation--visible {\n  display: block;\n}\n\nnav {\n  margin: 0;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.1rem;\n}\n.navigation ul {\n  width: 100%;\n  /* padding: 0 0 7px 0; */\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 6px;\n  /* text-shadow: 0px 0px 1px var(--hover-color); */\n}\n\na {\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1.1rem;\n  white-space: nowrap;\n}\n\n.navlink {\n  color: var(--link-color);\n  background-color: var(--background-color);\n  box-shadow: 0 2px var(--line-color);\n  padding: 8px 8px;\n  cursor: pointer;\n  width: 100%;\n  position: relative;\n  font-weight: 900;\n  white-space: nowrap;\n  transition: all 300ms ease;\n}\n\n.navlink:hover {\n  box-shadow: 0 4px var(--line-color);\n  transform: translateY(-2px);\n}\n\n#main-container {\n  padding-top: 97px;\n}\n\n.main-image {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  /* margin: 0 auto 20px auto; */\n  margin: auto;\n  z-index: -1;\n}\n\n.main-image img {\n  width: 100%;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 28px;\n}\n\n.bem-vindo {\n  padding: 20px;\n  /* margin: 0 12px 0 12px; */\n\n  border: 4px dotted var(--line-color);\n  border-radius: 20px;\n  width: min(80vw, 800px);\n  background-color: var(--line-color-transparent);\n  margin: 40px auto;\n  height: 219px;\n  display: grid;\n  place-content: center;\n}\n\n.bem-vindo p {\n  padding-bottom: 24px;\n}\n\n.bem-vindo .btn {\n  justify-self: center;\n  margin-bottom: 20px;\n}\n\n.carrossel {\n  max-width: 90%;\n  height: 280px;\n  position: relative;\n  margin: 40px auto;\n\n  /* border: 4px dashed var(--line-color);\n  border-radius: 20px;\n  width: min(85vw, 800px);\n  background-color: var(--line-color-transparent); */\n}\n\n.carrossel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.fotos p {\n  margin: 0 10px 50px 10px;\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  z-index: 0;\n  transition: 200ms ease-in-out;\n  transition-delay: 200ms;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.slide[data-ativo] {\n  opacity: 1;\n  transition-delay: 0;\n  z-index: 1;\n}\n\n.slide > img {\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 38px;\n\n  box-sizing: border-box;\n}\n\n.btn-carrossel {\n  position: absolute;\n  z-index: 2;\n  background: none;\n  border: none;\n  border-radius: 8px;\n  font-size: 2.4rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--background-color);\n  opacity: 0.8;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.btn-carrossel:hover,\n.btn-carrossel:focus {\n  color: var(--background-color);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.btn-carrossel.prev {\n  left: 1rem;\n}\n\n.btn-carrossel.next {\n  right: 1rem;\n}\n\n.footer {\n  margin: 20px auto 0 auto;\n  width: 100%;\n  overflow: hidden;\n  background-color: var(--link-color);\n  color: var(--background-color);\n  padding: 40px 0;\n  box-shadow: 0 -3px var(--line-color);\n}\n\n.footer-container {\n  max-width: 90vw;\n  margin: auto;\n  display: grid;\n  /* grid-template-columns: 1fr 1fr; */\n  justify-items: center;\n  gap: 40px;\n}\n\n.contato,\n.horario {\n  /* width: min(30vw, 450px); */\n  max-width: 500px;\n  /* background-color: var(--background-color); */\n  color: var(--text-color);\n  border: 4px solid var(--line-color);\n  border-radius: 20px;\n  padding: 30px;\n\n  background-image: linear-gradient(\n    to right,\n    #f7f1f0,\n    #f7f1f0 5px,\n    #eaefe9 5px,\n    #eaefe9 /* #dcebd8 */\n  );\n  background-size: 10px 100%;\n}\n\n/* .como-chegar,\n.delivery {\n  grid-column: 1 / span 2;\n} */\n\n.footer p {\n  padding: 0 10px;\n}\n\n.footer a {\n  color: var(--text-color);\n  display: flex;\n  align-items: center;\n}\n\n.footer ul {\n  margin: auto;\n  padding: 0;\n}\n\n.footer ul li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n}\n\n.icon {\n  max-height: 40px;\n  padding-left: 10px;\n}\n\n.delivery {\n  background-color: var(--header-color);\n  color: var(--link-color);\n  margin-top: 25px;\n  font-size: 1.5rem;\n  padding: 20px;\n}\n\n/* .delivery {\n  animation: blinker 1s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    background-color: var(--hover-color);\n  }\n} */\n\n#mapa {\n  width: min(90%, 800px);\n}\n\n@media only screen and (min-width: 1200px) {\n  .navigation {\n    display: block;\n  }\n  .navigation ul {\n    flex-direction: row;\n    justify-content: center;\n    gap: 14px;\n  }\n  .navlink {\n    width: min(20vw, 240px);\n  }\n  #burger {\n    display: none;\n  }\n  /* header {\n    max-height: none;  OBSOLETO?\n  } */\n  .header-row {\n    width: 1200px;\n    margin: auto;\n    /* padding-bottom: 0px; obsoleto? */\n  }\n  #main-container {\n    width: 1200px;\n    margin: auto;\n    padding-top: 73px;\n  }\n  #mapa {\n    height: 450px;\n  }\n  .carrossel {\n    height: 600px;\n  }\n  /* teste */\n  .header-row {\n    grid-template-columns: 1fr auto 1fr;\n    grid-template-columns: 202px auto 202px;\n  }\n  .navigation {\n    grid-row: 1 / span 1;\n    grid-column: 2 / span 1;\n  }\n\n  .header-row img {\n    width: 295px;\n    height: 166px;\n    width: auto;\n    object-fit: none;\n    overflow: visible;\n    top: -8px;\n    /* left: -40px; */\n    left: max(-20px, calc(50vw - 700px));\n\n    position: absolute;\n  }\n  #btn-contato {\n    top: 0;\n  }\n  .footer-container {\n    max-width: min(1200px, 66vw);\n    /* margin: auto; */\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    gap: 40px;\n  }\n  .como-chegar,\n  .delivery {\n    grid-column: 1 / span 2;\n  }\n}\n\n.construcao {\n  width: min(90vw, 800px);\n  margin: auto;\n}\n\n.construcao p {\n  text-align: left;\n}\n\n#eumesmo {\n  max-width: 100%;\n}\n',""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=a(u,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var d=t(r[i]);e[d].references--}for(var c=o(n,a),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},393:(n,e,t)=>{t.d(e,{zD:()=>g});const o=t.p+"1490c8d1f995365d042e.png",a=t.p+"ca40d3d9b8ea5704315b.jpg",r=t.p+"c87c6d06146629d07df8.jpg",i=t.p+"3120342cf071925c1251.jpg",d=t.p+"cf1ca2725545e86b7eb0.jpg",c=t.p+"7a20e467cbbb8e5f836d.jpg",s=t.p+"84499ceb70fd37f4d8cf.jpg",l=t.p+"9f061cbd2dbba00d0150.jpg",p=t.p+"7dc3f3267bee9b39fd8d.svg",m=t.p+"8ff7ce92ad753b591ed4.svg",u=t.p+"4d4dc527875cfc4b0cb3.jpeg";function h(){f();const n=document.getElementById("main-container"),e=document.createElement("div");e.classList.add("main-image");const t=new Image;t.src=a,t.alt="alguns produtos",e.appendChild(t);const o=document.createElement("section");o.classList.add("bem-vindo");const p=document.createElement("h1");p.textContent="Bem-vindo à Panis";const m=document.createElement("p");m.textContent="Somos uma padaria artesanal que faz pães de fermentação natural e outras coisas gostosas";const u=document.createElement("a");u.href="https://panis-padaria-artesanal.goomer.app/",u.classList.add("btn"),u.target="_blank",u.textContent="Faça seu pedido!",o.appendChild(p),o.appendChild(m),o.appendChild(u);const h=document.createElement("section");h.classList.add("fotos"),h.ariaLabel="fotos";const g=document.createElement("div");g.classList.add("carrossel"),g.dataset.carrossel="";const v=document.createElement("button");v.classList.add("btn-carrossel","next"),v.dataset.carrosselBtn="next",v.textContent=">";const b=document.createElement("button");b.classList.add("btn-carrossel","prev"),b.dataset.carrosselBtn="prev",b.textContent="<";const C=document.createElement("ul");C.dataset.slides="";const w=[{src:r,alt:"Pão",ativo:!0},{src:i,alt:"Focaccia",ativo:!1},{src:d,alt:"Cookie",ativo:!1},{src:c,alt:"Pão",ativo:!1},{src:s,alt:"Pão",ativo:!1},{src:l,alt:"Pão",ativo:!1}];for(var y=0;y<w.length;y++){const n=w[y],e=document.createElement("li");e.className="slide",n.ativo&&(e.dataset.ativo="");const t=document.createElement("img");t.src=n.src,t.alt=n.alt,e.appendChild(t),C.appendChild(e)}g.appendChild(v),g.appendChild(b),g.appendChild(C);const E=document.createElement("p");return E.textContent="Além dos pães também fazemos os melhores cookies da cidade, focaccia e pães de queijo.\nTodos os nossos produtos são veganos.",h.appendChild(g),h.appendChild(E),n.appendChild(e),n.appendChild(o),n.appendChild(h),x=setInterval((()=>{document.querySelector('[data-carrossel-btn="next"]').click()}),3e3),document.querySelectorAll("[data-carrossel-btn]").forEach((n=>{n.addEventListener("click",(()=>{clearInterval(x),x=setInterval((()=>{document.querySelector('[data-carrossel-btn="next"]').click()}),3e3);const e="next"===n.dataset.carrosselBtn?1:-1,t=n.closest("[data-carrossel]").querySelector("[data-slides]"),o=t.querySelector("[data-ativo]");let a=[...t.children].indexOf(o)+e;a<0&&(a=t.children.length-1),a>=t.children.length&&(a=0),t.children[a].dataset.ativo=!0,delete o.dataset.ativo}))})),n}function g(){const n=document.getElementById("body-container"),e=document.createElement("div");e.id="main-container",n.appendChild(function(){const n=document.createElement("header"),e=document.createElement("div");e.classList.add("header-container");const t=document.createElement("div");t.classList.add("header-row");const a=document.createElement("div");a.classList.add("logo-container");const r=new Image;r.src=o,r.alt="logo",a.appendChild(r);const i=document.createElement("a");i.classList.add("btn"),i.id="btn-contato",i.href="#footer",i.textContent="Contato";const d=document.createElement("div");d.appendChild(i);const c=document.createElement("span");c.classList.add("material-symbols-outlined"),c.id="burger",c.onclick=v,c.textContent="menu";const s=document.createElement("div");return s.classList.add("shadow"),s.onclick=v,t.appendChild(a),t.appendChild(d),t.appendChild(function(){const n=document.createElement("nav");n.classList.add("navigation");const e=document.createElement("ul"),t=document.createElement("li");t.classList.add("navlink"),t.textContent="Página Principal",t.id="principal",t.addEventListener("click",(()=>{h()}));const o=document.createElement("li");o.classList.add("navlink"),o.textContent="Produtos",o.id="produtos",o.addEventListener("click",(()=>{!function(){f(),window.scrollTo({top:0,behavior:"instant"});const n=document.createElement("div");n.classList.add("construcao");const e=document.createElement("h1");e.textContent="Em construção";const t=document.createElement("p");t.textContent="Hoje em dia a Panis é uma padaria de um homem só. O sujeito que compra os ingredientes, mistura a massa, modela os pães, coloca pra fermentar, assa no outro dia, limpa tudo, atende no balcão, é o mesmo que faz o site da padaria. Ainda não consegui terminar o site. Então se você quer saber mais sobre a Panis e seus produtos, dê uma olhada no nosso instagram ou venha pessoalmente bater um papo enquanto o site não fica pronto!";const o=new Image;o.src=u,o.alt="Em construção",o.id="eumesmo";const a=document.getElementById("main-container");n.appendChild(e),n.appendChild(t),n.appendChild(o),a.appendChild(n)}()}));const a=document.createElement("li");return a.classList.add("navlink"),a.textContent="Sobre nós",a.id="sobre",a.addEventListener("click",(()=>{!function(){f(),window.scrollTo({top:0,behavior:"instant"});const n=document.createElement("div");n.classList.add("construcao");const e=document.createElement("h1");e.textContent="Em construção";const t=document.createElement("p");t.textContent="Hoje em dia a Panis é uma padaria de um homem só. O sujeito que compra os ingredientes, mistura a massa, modela os pães, coloca pra fermentar, assa no outro dia, limpa tudo, atende no balcão, é o mesmo que faz o site da padaria. Ainda não consegui terminar o site. Então se você quer saber mais sobre a Panis e seus produtos, dê uma olhada no nosso instagram ou venha pessoalmente bater um papo enquanto o site não fica pronto!";const o=new Image;o.src=u,o.alt="Em construção",o.id="eumesmo";const a=document.getElementById("main-container");n.appendChild(e),n.appendChild(t),n.appendChild(o),a.appendChild(n)}()})),e.appendChild(t),e.appendChild(o),e.appendChild(a),n.appendChild(e),n}()),t.appendChild(c),e.appendChild(t),n.appendChild(e),n.appendChild(s),n}()),n.appendChild(e),n.appendChild(h()),n.appendChild(function(){const n=document.createElement("section");n.classList.add("footer"),n.id="footer";const e=document.createElement("div");e.classList.add("footer-container");const t=document.createElement("div");t.classList.add("contato");const o=document.createElement("h2");o.textContent="Contato";const a=document.createElement("p");a.textContent="Você pode entrar em contato com a gente de diferentes formas:";const r=document.createElement("ul"),i=document.createElement("li");i.textContent="Telefone:"+String.fromCharCode(160);const d=document.createElement("a");d.href="https://wa.me/554130456061",d.target="_blank",d.textContent="41 3045-6061";const c=new Image;c.classList.add("icon"),c.src=p,c.alt="whatsapp",d.appendChild(c),i.appendChild(d);const s=document.createElement("li");s.textContent="Instagram:"+String.fromCharCode(160);const l=document.createElement("a");l.href="https://www.instagram.com/panispaozinho/",l.target="_blank",l.textContent="@panispaozinho";const u=new Image;u.classList.add("icon"),u.src=m,u.alt="instagram",l.appendChild(u),s.appendChild(l);const h=document.createElement("li");h.textContent="E-mail:"+String.fromCharCode(160);const g=document.createElement("a");g.href="panispadaria@gmail.com",g.textContent="panispadaria@gmail.com",h.appendChild(g),r.appendChild(i),r.appendChild(s),r.appendChild(h),t.appendChild(o),t.appendChild(a),t.appendChild(r);const f=document.createElement("div");f.classList.add("horario");const v=document.createElement("h2");v.textContent="Horário de funcionamento:";const x=document.createElement("p");x.textContent="Terça: 14h às 18h30";const b=document.createElement("p");b.textContent="Sábado: 9h às 12h30";const C=document.createElement("p");C.textContent="(observação: aos sábados pela manhã acontece uma feira livre na nossa rua, durante a qual não é possível passar pela rua de carro)",f.appendChild(v),f.appendChild(x),f.appendChild(b),f.appendChild(C);const w=document.createElement("a");w.href="https://panis-padaria-artesanal.goomer.app/",w.classList.add("btn"),w.classList.add("delivery"),w.target="_blank",w.textContent="Delivery";const y=document.createElement("div");y.classList.add("como-chegar");const E=document.createElement("h2");E.textContent="Como chegar?";const k=document.createElement("p");k.textContent="Nossa loja fica em Curitiba, no bairro Juvevê (na rua da feira de sábado)";const L=document.createElement("p");L.textContent="Rua Alberto Bolliger, 553 fundos";const j=document.createElement("iframe");return j.id="mapa",j.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.6144309078004!2d-49.260484884877684!3d-25.41771388379416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5791115fdaf%3A0x2a26677e0e58e555!2sPanis%20-%20Padaria%20Artesanal!5e0!3m2!1spt-BR!2sbr!4v1677958259982!5m2!1spt-BR!2sbr",j.width="90%",j.height="320px",j.style="border: 0;",j.allowFullscreen="",j.loading="lazy",j.referrerPolicy="no-referrer-when-downgrade",y.appendChild(E),y.appendChild(k),y.appendChild(L),y.appendChild(j),e.appendChild(t),e.appendChild(f),e.appendChild(w),e.appendChild(y),n.appendChild(e),n}())}function f(){document.getElementById("main-container").innerHTML="",clearInterval(x)}function v(){const n=document.querySelector(".navigation"),e=document.querySelector(".shadow");n.classList.contains("navigation--visible")?(n.classList.remove("navigation--visible"),e.classList.remove("shadow--visible")):(n.classList.add("navigation--visible"),e.classList.add("shadow--visible"))}let x}},f={};function v(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return g[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;v.g.importScripts&&(n=v.g.location+"");var e=v.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=n})(),v.nc=void 0,n=v(393),e=v(379),t=v.n(e),o=v(795),a=v.n(o),r=v(569),i=v.n(r),d=v(565),c=v.n(d),s=v(216),l=v.n(s),p=v(589),m=v.n(p),u=v(426),(h={}).styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,(0,n.zD)()})();