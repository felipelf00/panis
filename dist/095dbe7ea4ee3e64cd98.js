let myInterval = setInterval(() => {
  document.querySelector('[data-carrossel-btn="next"').click();
}, 3e3);
const buttons = document.querySelectorAll("[data-carrossel-btn");
function toggleMenu() {
  const e = document.querySelector(".navigation"),
    t = document.querySelector("header");
  "none" === e.style.display
    ? ((e.style.display = "block"),
      (t.style.maxHeight = "none"),
      console.log(t))
    : ((e.style.display = "none"), (t.style.maxHeight = "124px"));
}
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    clearInterval(myInterval),
      (myInterval = setInterval(() => {
        document.querySelector('[data-carrossel-btn="next"').click();
      }, 3e3));
    const t = "next" === e.dataset.carrosselBtn ? 1 : -1,
      l = e.closest("[data-carrossel").querySelector("[data-slides]"),
      n = l.querySelector("[data-ativo]");
    let a = [...l.children].indexOf(n) + t;
    a < 0 && (a = l.children.length - 1),
      a >= l.children.length && (a = 0),
      (l.children[a].dataset.ativo = !0),
      delete n.dataset.ativo;
  });
});
