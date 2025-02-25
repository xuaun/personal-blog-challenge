function setColorScheme(scheme) {
  const themeImg = document.getElementsByClassName("header__toggle-img")[0];
  const footerSocials = document.getElementsByClassName("footer__social");
  const introSocials = document.getElementsByClassName("intro__social");
  const aboutSocials = document.getElementsByClassName("about__social");

  switch (scheme) {
    case "dark":
      localStorage.setItem("scheme", "dark");

      if (!body.classList.contains("dark")) {
        body.classList.add("dark");
        themeImg.src = "./src/assets/images/icon-sun.svg";

        footerSocials[0].src = "./src/assets/images/logo-x-dark.png";
        footerSocials[1].src = "./src/assets/images/logo-github-dark.png";
        footerSocials[2].src = "./src/assets/images/logo-linkedin-dark.png";
        footerSocials[3].src =
          "./src/assets/images/logo-frontendmentor-dark.png";

        if (introSocials.length !== 0) {
          introSocials[0].src = "./src/assets/images/logo-x-dark.png";
          introSocials[1].src = "./src/assets/images/logo-github-dark.png";
          introSocials[2].src = "./src/assets/images/logo-linkedin-dark.png";
          introSocials[3].src =
            "./src/assets/images/logo-frontendmentor-dark.png";
        }

        if (aboutSocials.length !== 0) {
          aboutSocials[0].src = "./src/assets/images/logo-x-dark.png";
          aboutSocials[1].src = "./src/assets/images/logo-github-dark.png";
          aboutSocials[2].src = "./src/assets/images/logo-linkedin-dark.png";
          aboutSocials[3].src =
            "./src/assets/images/logo-frontendmentor-dark.png";
        }
      }

      break;
    case "light":
      localStorage.setItem("scheme", "light");

      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeImg.src = "./src/assets/images/icon-moon.svg";

        footerSocials[0].src = "./src/assets/images/logo-x.svg";
        footerSocials[1].src = "./src/assets/images/logo-github.svg";
        footerSocials[2].src = "./src/assets/images/logo-linkedin.svg";
        footerSocials[3].src = "./src/assets/images/logo-frontend-mentor.svg";

        if (introSocials.length !== 0) {
          introSocials[0].src = "./src/assets/images/logo-x.svg";
          introSocials[1].src = "./src/assets/images/logo-github.svg";
          introSocials[2].src = "./src/assets/images/logo-linkedin.svg";
          introSocials[3].src = "./src/assets/images/logo-frontend-mentor.svg";
        }

        if (aboutSocials.length !== 0) {
          aboutSocials[0].src = "./src/assets/images/logo-x.svg";
          aboutSocials[1].src = "./src/assets/images/logo-github.svg";
          aboutSocials[2].src = "./src/assets/images/logo-linkedin.svg";
          aboutSocials[3].src = "./src/assets/images/logo-frontend-mentor.svg";
        }
      }

      break;
    default:
      localStorage.setItem("scheme", "light");

      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeImg.src = "./src/assets/images/icon-moon.svg";

        footerSocials[0].src = "./src/assets/images/logo-x.svg";
        footerSocials[1].src = "./src/assets/images/logo-github.svg";
        footerSocials[2].src = "./src/assets/images/logo-linkedin.svg";
        footerSocials[3].src = "./src/assets/images/logo-frontend-mentor.svg";

        introSocials[0].src = "./src/assets/images/logo-x.svg";
        introSocials[1].src = "./src/assets/images/logo-github.svg";
        introSocials[2].src = "./src/assets/images/logo-linkedin.svg";
        introSocials[3].src = "./src/assets/images/logo-frontend-mentor.svg";

        aboutSocials[0].src = "./src/assets/images/logo-x.svg";
        aboutSocials[1].src = "./src/assets/images/logo-github.svg";
        aboutSocials[2].src = "./src/assets/images/logo-linkedin.svg";
        aboutSocials[3].src = "./src/assets/images/logo-frontend-mentor.svg";
      }

      break;
  }
}

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  }
  return "light";
}

function updateColorSchemePreferred() {
  if (prefered === null) {
    setColorScheme(getPreferredColorScheme());
  } else {
    setColorScheme(prefered);
  }
}

const body = document.getElementsByClassName("page")[0];
let prefered = localStorage.getItem("scheme");

export { setColorScheme, updateColorSchemePreferred };
