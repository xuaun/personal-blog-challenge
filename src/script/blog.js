fetch("./src/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    const latestArticles =
      document.getElementsByClassName("articles__latest")[0];
    const allArticles = document.getElementsByClassName("blog__articles")[0];

    data.forEach((element, index) => {
      const format = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formatedDate = format.format(new Date(element.publishedAt));

      if (latestArticles !== undefined && index < 5) {
        latestArticles.innerHTML += `<div>
          <a href="./blog-detail.html?article=${element.slug}"><h3 class="articles__article-title">${element.title}</h3></a>
          <p class="articles__article-date">${formatedDate}</p>
        </div>`;
      } else if (allArticles !== undefined) {
        allArticles.innerHTML += `<div>
          <a href="./blog-detail.html?article=${element.slug}"><h3 class="blog__article-title">${element.title}</h3></a>
          <p class="blog__article-date">${formatedDate}</p>
          <p class="blog__article-description">${element.description}</p>
        </div>`;
      }
    });
  })
  .catch((error) => console.error("Erro ao carregar JSON:", error));
