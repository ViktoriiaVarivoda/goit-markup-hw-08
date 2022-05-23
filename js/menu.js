(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-open-button"),
    closeMenuBtn: document.querySelector(".header-close-button"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();