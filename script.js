const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNavbar = document.querySelector(".mobile-nav-container");
const closeButton = document.querySelector(".close-button");
const mql = window.matchMedia("(min-width:768px)");

hamburgerButton.addEventListener("click", () => {
  mobileNavbar.classList.add("show-mobile-navbar");
});

closeButton.addEventListener("click", () => {
  mobileNavbar.classList.remove("show-mobile-navbar");
});

mql.onchange = (e) => {
  if (e.matches) {
    mobileNavbar.classList.remove("show-mobile-navbar");
  }
};
