import logo from "./imagens/logo2.png";
import produtos from "./imagens/produtos.jpg";
import paoInteiro from "./imagens/pão-inteiro.jpg";
import focaccia from "./imagens/focaccia.jpg";
import cookie2 from "./imagens/cookie2.jpg";
import paoCortado from "./imagens/pão-cortado.jpg";
import paoChoco from "./imagens/pão-choco.jpg";
import modelados from "./imagens/modelados.jpg";
import zapIcon from "./imagens/icons8-whatsapp-48.svg";
import instaIcon from "./imagens/instagram-48.svg";
import { toggleMenu } from "./script.js";

function createHeader() {
  const header = document.createElement("header");
  const headerRow = document.createElement("div");
  headerRow.classList.add("header-row");
  const myLogo = new Image();
  myLogo.src = logo;
  myLogo.alt = "logo";

  const contato = document.createElement("a");
  contato.classList.add("btn");
  contato.id = "btn-contato";
  contato.href = "#contato";
  contato.textContent = "Contato";
  const burger = document.createElement("span");
  burger.classList.add("material-symbols-outlined");
  burger.id = "burger";
  burger.onclick = toggleMenu;
  burger.textContent = "menu";
  headerRow.appendChild(myLogo);
  headerRow.appendChild(contato);
  header.appendChild(headerRow);
  header.appendChild(createNav());
  header.appendChild(burger);
  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  const lista = document.createElement("ul");

  const principal = document.createElement("li");
  principal.classList.add("navlink");

  principal.textContent = "Página Principal";

  const produtos = document.createElement("li");
  produtos.classList.add("navlink");
  produtos.textContent = "Produtos";

  const sobre = document.createElement("li");
  sobre.classList.add("navlink");
  sobre.textContent = "Sobre nós";

  lista.appendChild(principal);
  lista.appendChild(produtos);
  lista.appendChild(sobre);
  nav.appendChild(lista);

  return nav;
}

function createMain() {
  const container = document.createElement("div");
  container.className = "main-container";

  //Imagem principal
  const mainImageContainer = document.createElement("div");
  mainImageContainer.classList.add("main-image");
  // const mainImage = document.createElement("img");

  const mainImage = new Image();
  mainImage.src = produtos;
  mainImage.alt = "alguns produtos";
  mainImageContainer.appendChild(mainImage);

  //Bem-vindo
  const bemVindo = document.createElement("section");
  bemVindo.classList.add("bem-vindo");
  const titulo = document.createElement("h1");
  titulo.textContent = "Bem-vindo à Panis";
  const para = document.createElement("p");
  para.textContent =
    "Somos uma padaria artesanal que faz pães de fermentação natural e outras coisas gostosas";
  const pedido = document.createElement("a");
  pedido.href = "https://panis-padaria-artesanal.goomer.app/";
  pedido.classList.add("btn");
  pedido.target = "_blank";
  pedido.textContent = "Faça seu pedido!";

  bemVindo.appendChild(titulo);
  bemVindo.appendChild(para);
  bemVindo.appendChild(pedido);

  //Carrossel
  const fotos = document.createElement("section");
  fotos.classList.add("fotos");
  fotos.ariaLabel = "fotos";

  const carrossel = document.createElement("div");
  carrossel.classList.add("carrossel");
  carrossel.dataset.carrossel = "";

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("btn-carrossel", "next");
  nextBtn.dataset.carrosselBtn = "next";
  nextBtn.textContent = ">";
  const prevBtn = document.createElement("button");
  prevBtn.classList.add("btn-carrossel", "prev");
  prevBtn.dataset.carrosselBtn = "prev";
  prevBtn.textContent = "<";

  const lista = document.createElement("ul");
  lista.dataset.slides = "";

  const slides = [
    { src: paoInteiro, alt: "Pão", ativo: true },
    { src: focaccia, alt: "Focaccia", ativo: false },
    { src: cookie2, alt: "Cookie", ativo: false },
    { src: paoCortado, alt: "Pão", ativo: false },
    { src: paoChoco, alt: "Pão", ativo: false },
    { src: modelados, alt: "Pão", ativo: false },
  ];

  for (var i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const slideLi = document.createElement("li");
    slideLi.className = "slide";
    if (slide.ativo) {
      slideLi.dataset.ativo = "";
    }
    const img = document.createElement("img");
    img.src = slide.src;
    img.alt = slide.alt;
    slideLi.appendChild(img);
    lista.appendChild(slideLi);
  }
  carrossel.appendChild(nextBtn);
  carrossel.appendChild(prevBtn);
  carrossel.appendChild(lista);

  const para2 = document.createElement("p");
  para2.textContent =
    "Além dos pães também fazemos os melhores cookies da cidade, focaccia e pães de queijo. Todos os nossos produtos são veganos.";

  fotos.appendChild(carrossel);
  fotos.appendChild(para2);

  container.appendChild(mainImageContainer);
  container.appendChild(bemVindo);
  container.appendChild(fotos);

  return container;
}

function createFooter() {
  const footer = document.createElement("section");
  footer.classList.add("contato");
  // footer.id = "contato";
  const titulo1 = document.createElement("h2");
  titulo1.textContent = "Contato";
  const para1 = document.createElement("p");
  para1.textContent =
    "Você pode entrar em contato com a gente de diferentes formas:";

  const lista = document.createElement("ul");

  const tel = document.createElement("li");
  tel.textContent = "Telefone:" + String.fromCharCode(160);
  const link1 = document.createElement("a");
  link1.href = "https://wa.me/554130456061";
  link1.target = "_blank";
  link1.textContent = "41 3045-6061";
  const myZap = new Image();
  myZap.classList.add("icon");
  myZap.src = zapIcon;
  myZap.alt = "whatsapp";
  link1.appendChild(myZap);
  tel.appendChild(link1);

  const insta = document.createElement("li");
  insta.textContent = "Instagram:" + String.fromCharCode(160);
  const link2 = document.createElement("a");
  link2.href = "https://www.instagram.com/panispaozinho/";
  link2.target = "_blank";
  link2.textContent = "@panispaozinho";
  const myInsta = new Image();
  myInsta.classList.add("icon");
  myInsta.src = instaIcon;
  myInsta.alt = "instagram";
  link2.appendChild(myInsta);
  insta.appendChild(link2);

  const email = document.createElement("li");
  email.textContent = "E-mail:" + String.fromCharCode(160);
  const link3 = document.createElement("a");
  link3.href = "panispadaria@gmail.com";
  link3.textContent = "panispadaria@gmail.com";
  email.appendChild(link3);

  const delivery = document.createElement("li");
  const link4 = document.createElement("a");
  link4.href = "https://panis-padaria-artesanal.goomer.app/";
  link4.classList.add("btn");
  link4.classList.add("alt");
  link4.target = "_blank";
  link4.textContent = "Delivery";
  delivery.appendChild(link4);

  lista.appendChild(tel);
  lista.appendChild(insta);
  lista.appendChild(email);
  lista.appendChild(delivery);

  const titulo2 = document.createElement("h2");
  titulo2.textContent = "Horário de funcionamento:";
  const para2 = document.createElement("p");
  para2.textContent = "Terça: 14h às 18h30";
  const para3 = document.createElement("p");
  para3.textContent = "Sábado: 9h às 12h30";
  const para4 = document.createElement("p");
  para4.textContent =
    "(observação: aos sábados pela manhã acontece uma feira livre na nossa rua, durante a qual não é possível passar pela rua de carro)";
  const titulo3 = document.createElement("h2");
  titulo3.textContent = "Como chegar?";
  const para5 = document.createElement("p");
  para5.textContent =
    "Nossa loja fica em Curitiba, no bairro Juvevê (na rua da feira de sábado)";
  const para6 = document.createElement("p");
  para6.textContent = "Rua Alberto Bolliger, 553 fundos";

  const mapa = document.createElement("iframe");
  mapa.id = "mapa";
  mapa.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.6144309078004!2d-49.260484884877684!3d-25.41771388379416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5791115fdaf%3A0x2a26677e0e58e555!2sPanis%20-%20Padaria%20Artesanal!5e0!3m2!1spt-BR!2sbr!4v1677958259982!5m2!1spt-BR!2sbr";
  mapa.width = "90%";
  mapa.height = "320px";
  mapa.style = "border: 0;";
  mapa.allowFullscreen = "";
  mapa.loading = "lazy";
  mapa.referrerPolicy = "no-referrer-when-downgrade";

  footer.appendChild(titulo1);
  footer.appendChild(para1);
  footer.appendChild(lista);
  footer.appendChild(titulo2);
  footer.appendChild(para2);
  footer.appendChild(para3);
  footer.appendChild(para4);
  footer.appendChild(titulo3);
  footer.appendChild(para5);
  footer.appendChild(para6);
  footer.appendChild(mapa);

  return footer;
}

export default function load() {
  const container = document.getElementById("body-container");

  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());
}

// export default function loadMain() {
//   const main = document.getElementById("main");

//   main.appendChild(createMain());
// }
