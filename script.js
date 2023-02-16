const buttons = document.querySelectorAll("[data-carrossel-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carrosselBtn === "next" ? 1: -1;
        const slides = button.closest("[data-carrossel").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-ativo]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.ativo = true;
        delete activeSlide.dataset.ativo;
    })
})

setInterval( () => {
    const autoNext = document.querySelector('[data-carrossel-btn="next"');
    autoNext.click();
}, 5000)

