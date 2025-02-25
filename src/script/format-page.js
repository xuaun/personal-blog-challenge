function formatDate(date) {
  const format = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return format.format(new Date(date));
}

function setCallout() {
  const isBlockquote = document.querySelectorAll("blockquote");

  if (
    isBlockquote.length > 0 &&
    document.querySelectorAll("blockquote strong").length > 0
  ) {
    isBlockquote.forEach((quote) => {
      if (quote.querySelector("strong")) {
        if (
          quote &&
          quote.querySelector("strong").textContent.startsWith("Tip:")
        ) {
          quote.classList.add("callout");
          quote.classList.add("tip");
        } else if (
          quote &&
          quote.querySelector("strong").textContent.startsWith("Warning:")
        ) {
          quote.classList.add("callout");
          quote.classList.add("warning");
        } else if (
          quote &&
          quote.querySelector("strong").textContent.startsWith("Information:")
        ) {
          quote.classList.add("callout");
          quote.classList.add("information");
        }
      }
    });
  }
}

function setCode() {
  const hasHtmlCode = document.querySelector("code.language-html") !== null;
  const hasCssCode = document.querySelector("code.language-css") !== null;
  const hasJsCode =
    document.querySelector("code.language-javascript") !== null ||
    document.querySelector("code.language-js");

  if (hasHtmlCode) {
    const codeElements = document.querySelectorAll("code:not([class])");

    codeElements.forEach((code) => {
      code.classList.add("language-html");
    });
  } else if (hasCssCode) {
    const codeElements = document.querySelectorAll("code:not([class])");

    codeElements.forEach((code) => {
      code.classList.add("language-css");
    });
  } else if (hasJsCode) {
    const codeElements = document.querySelectorAll("code:not([class])");

    codeElements.forEach((code) => {
      code.classList.add("language-javascript");
    });
  }
}

export { formatDate, setCallout, setCode };
