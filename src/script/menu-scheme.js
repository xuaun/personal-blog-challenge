import {
  hamburgerButton,
  hamburgerImage,
  navMenu,
  main,
  lightClosed,
  lightOpened,
  darkClosed,
  darkOpened,
} from "./object/objects.js";

function setMenuToggle() {
  const currentImg = hamburgerImage.src.split("/").pop();

  if (currentImg === lightClosed.split("/").pop()) {
    hamburgerImage.src = darkClosed;
  } else if (currentImg === lightOpened.split("/").pop()) {
    hamburgerImage.src = darkOpened;
  } else if (currentImg === darkOpened.split("/").pop()) {
    hamburgerImage.src = lightOpened;
  } else {
    hamburgerImage.src = lightClosed;
  }
}

function setMenuResize(event) {
  if (document.getElementsByClassName("page")[0].classList.contains("dark")) {
    dark = true;
  } else {
    dark = false;
  }

  if (event.target.innerWidth < 456 && dark) {
    hamburgerImage.src = "./src/assets/images/menu-01.png";
  } else {
    hamburgerImage.src = "./src/assets/images/icon-menu.svg";
  }
}

function highlightCurrentPage() {
  const navLinks = document.querySelectorAll(".header__item-link");
  const currentUrl = window.location.pathname.split("/").pop();

  navLinks.forEach((link, index) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (
      linkPage === currentUrl ||
      (index === 0 &&
        (currentUrl === "" || currentUrl === "personal-blog-challenge"))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function setToggle() {
  navMenu.classList.toggle("active");
  hamburgerButton.classList.toggle("active");
  main.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    toggle = true;
  } else {
    toggle = false;
  }

  if (document.getElementsByClassName("page")[0].classList.contains("dark")) {
    dark = true;
  } else {
    dark = false;
  }

  if (toggle && !dark) {
    hamburgerImage.src = "./src/assets/images/icon-menu-close.svg";
  } else if (toggle && dark) {
    hamburgerImage.src = "./src/assets/images/x-close.png";
  } else if (!toggle && dark) {
    hamburgerImage.src = "./src/assets/images/menu-01.png";
  } else {
    hamburgerImage.src = "./src/assets/images/icon-menu.svg";
  }
}

let toggle = false;
let dark = false;

export { setMenuToggle, setMenuResize, highlightCurrentPage, setToggle };
