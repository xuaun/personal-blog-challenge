const newsletter__input =
  document.getElementsByClassName("newsletter__input")[0];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errorMessage = document.getElementsByClassName(
  "newsletter__text-error"
)[0];
const successMessage = document.getElementsByClassName(
  "newsletter__text-success"
)[0];

const form = document.getElementsByClassName("newsletter__form")[0];

const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerImage = document.querySelector("#hamburger-button img");
const navMenu = document.getElementsByClassName("header__navbar")[0];
const main = document.getElementsByClassName("main")[0];

const lightClosed = "./src/assets/images/icon-menu.svg";
const lightOpened = "./src/assets/images/icon-menu-close.svg";
const darkClosed = "./src/assets/images/menu-01.png";
const darkOpened = "./src/assets/images/x-close.png";

export {
  newsletter__input,
  emailRegex,
  errorMessage,
  successMessage,
  form,
  hamburgerButton,
  hamburgerImage,
  navMenu,
  main,
  lightClosed,
  lightOpened,
  darkClosed,
  darkOpened,
};
