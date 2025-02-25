import { hamburgerButton, hamburgerImage } from "./object/objects.js";
import {
  setMenuToggle,
  setMenuResize,
  highlightCurrentPage,
  setToggle,
} from "./menu-scheme.js";

document.addEventListener("DOMContentLoaded", highlightCurrentPage);

window.addEventListener("resize", setMenuResize);

hamburgerButton.addEventListener("click", setToggle);

document
  .getElementsByClassName("header__toggle")[0]
  .addEventListener("click", setMenuToggle);

if (document.getElementsByClassName("page")[0].classList.contains("dark")) {
  hamburgerImage.src = "./src/assets/images/menu-01.png";
}
