function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  const lista = document.createElement("ul");

  //adicionar lógica aos botões
  const principal = document.createElement("li");
  principal.classList.add("navlink");

  const produtos = document.createElement("li");
  produtos.classList.add("navlink");

  const sobre = document.createElement("li");
  sobre.classList.add("navlink");

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
  const mainImage = document.createElement("img");
  mainImage.src = "imagens/produtos.jpg";
  mainImage.alt = "alguns produtos";
  mainImageContainer.appendChild(mainImage);

  //Bem-vindo
  const bemVindo = document.createElement("section");
  bemVindo.classList.add = "bem-vindo";
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
  nextBtn.textContent = "&#62";
  const prevBtn = document.createElement("button");
  prevBtn.classList.add("btn-carrossel", "prev");
  prevBtn.dataset.carrosselBtn = "prev";
  prevBtn.textContent = "&#60";

  const lista = document.createElement("ul");
  lista.dataset.slides = "";

  const slides = [
    { src: "imagens/pão-inteiro.jpg", alt: "Pão", ativo: true },
    { src: "imagens/focaccia.jpg", alt: "Focaccia", ativo: false },
    { src: "imagens/cookie2.jpg", alt: "Cookie", ativo: false },
    { src: "imagens/pão-cortado.jpg", alt: "Pão", ativo: false },
    { src: "imagens/pão-choco.jpg", alt: "Pão", ativo: false },
    { src: "imagens/modelados.jpg", alt: "Pão", ativo: false },
  ];

  for (var i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const slideLi = document.createElement("li");
    slideLi.className = "slide";
    if (slide.ativo) {
      slideLi.dataset.ativo = "";
    }
    const img = document.createElement("img");
    img.src = slide[i].src;
    img.alt = slide[i].alt;
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

function loadMain() {
  const main = document.getElementsByTagName("main");

  main.appendChild(createMain());
}

export default loadMain;
