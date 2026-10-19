
const searchInput = document.getElementById("searchInput");
const articleCards = document.querySelectorAll(".article-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  articleCards.forEach(function (card) {
    const articleText = card.innerText.toLowerCase();
    const matches = articleText.includes(searchText);

    card.style.display = matches ? "" : "none";

    if (matches) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount !== 0;
});
