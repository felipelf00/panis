let myInterval = setInterval(() => {
  const autoNext = document.querySelector('[data-carrossel-btn="next"]');
  autoNext.click();
}, 3000);

// myInterval;

function createSlider() {
  // let myInterval = setInterval(() => {
  //   const autoNext = document.querySelector('[data-carrossel-btn="next"]');
  //   autoNext.click();
  // }, 3000);

  const buttons = document.querySelectorAll("[data-carrossel-btn]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      clearInterval(myInterval);
      myInterval = setInterval(() => {
        const autoNext = document.querySelector('[data-carrossel-btn="next"]');
        autoNext.click();
      }, 3000);
      myInterval;
      const offset = button.dataset.carrosselBtn === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carrossel]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-ativo]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.ativo = true;
      delete activeSlide.dataset.ativo;
    });
  });

  // window.addEventListener("onunload", () => {
  //   clearInterval(myInterval);
  // });

  // return myInterval;
}

// let myInterval = createSlider();

function toggleMenu() {
  const nav = document.querySelector(".navigation");
  const shadow = document.querySelector(".shadow");
  if (nav.classList.contains("navigation--visible")) {
    nav.classList.remove("navigation--visible");
    shadow.classList.remove("shadow--visible");
  } else {
    nav.classList.add("navigation--visible");
    shadow.classList.add("shadow--visible");
  }
}

// export { createSlider, toggleMenu };
export { myInterval, createSlider, toggleMenu };
