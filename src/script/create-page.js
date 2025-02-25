import { renderScreen } from "./screen.js";

fetch("./src/json/data.json")
  .then((response) => response.json())
  .then((posts) => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("article");

    const post = posts.find((p) => p.slug === slug);

    renderScreen(post);
  })
  .catch((error) => {
    console.error("Error loading JSON file:", error);
  });
