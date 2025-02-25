import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { Prism } from "./prism.js";
import { formatDate, setCallout, setCode } from "./format-page.js";

function renderScreen(post) {
  if (post) {
    const contentHtml = marked.parse(post.content);

    const tempDiv = document.getElementsByClassName("article__content")[0];
    tempDiv.innerHTML = contentHtml;

    setCallout();

    setCode();

    document.title += ` ${post.title}`;
    document.getElementsByClassName("article__title")[0].innerHTML = post.title;
    document.getElementsByClassName(
      "article__date"
    )[0].innerHTML += `Published ${formatDate(post.publishedAt)}`;
    document.getElementsByClassName("article__content")[0].innerHTML =
      tempDiv.innerHTML;
    Prism.highlightAll();
  } else {
    document.getElementsByClassName("article__title")[0].innerHTML =
      "Sorry, article not found!";
    document.getElementsByClassName("article__content")[0].innerHTML =
      "<p><a href='./blog.html'>Click here to access my blog</a> and view all my articles. And if you want to stay updated on my latest articles, sign up for <a href='./newsletter.html'>my newsletter</a>! 😊</p>";
  }
}

export { renderScreen };
