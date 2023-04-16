let myInterval = setInterval(() => {
  const autoNext = document.querySelector('[data-carrossel-btn="next"');
  autoNext.click();
}, 3000);

// myInterval;

function createSlider() {
  const buttons = document.querySelectorAll("[data-carrossel-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      clearInterval(myInterval);
      myInterval = setInterval(() => {
        const autoNext = document.querySelector('[data-carrossel-btn="next"');
        autoNext.click();
      }, 3000);
      myInterval;
      const offset = button.dataset.carrosselBtn === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carrossel")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-ativo]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.ativo = true;
      delete activeSlide.dataset.ativo;
    });
  });
}

// createSlider();

function toggleMenu() {
  const nav = document.querySelector(".navigation");
  const header = document.querySelector("header");
  if (nav.style.display === "none") {
    nav.style.display = "block";
    header.style.maxHeight = "none";
  } else {
    nav.style.display = "none";
    header.style.maxHeight = "124px";
  }
}

export { myInterval, createSlider, toggleMenu };

// export { myInterval, createSlider };
