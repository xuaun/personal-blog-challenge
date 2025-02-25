import { newsletter__input, emailRegex, errorMessage, successMessage, form } from "./object/objects.js";

newsletter__input.addEventListener("change", () => {
  if (newsletter__input.classList.contains("success")) {
    newsletter__input.classList.remove("success");
    successMessage.classList.remove("visible");
  } else if (newsletter__input.classList.contains("error")) {
    newsletter__input.classList.remove("error");
    errorMessage.classList.remove("visible");
  }
});

form.addEventListener("submit", (event) => {
  if (!verifyInput()) {
    event.preventDefault();
  }
});

function verifyInput() {
  if (
    newsletter__input.value === "" ||
    !emailRegex.test(newsletter__input.value)
  ) {
    newsletter__input.classList.add("error");
    errorMessage.classList.add("visible");
  } else {
    newsletter__input.classList.add("success");
    successMessage.classList.add("visible");
  }
  return false;
}
