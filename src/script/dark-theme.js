import { setColorScheme, updateColorSchemePreferred } from "./set-scheme.js";

const body = document.getElementsByClassName("page")[0];
const btn = document.getElementsByClassName("header__toggle")[0];

btn.addEventListener("click", () => {
  if (!body.classList.contains("dark")) {
    setColorScheme("dark");
  } else {
    setColorScheme("light");
  }
});

if (window.matchMedia) {
  var colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  colorSchemeQuery.addEventListener("change", updateColorSchemePreferred);
}

updateColorSchemePreferred();
