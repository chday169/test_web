const titles = document.querySelectorAll("#title-list li");
const viewer = document.getElementById("pdf-viewer");
let currentIndex = 0;

titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    currentIndex = index;
    viewer.src = "docs/" + title.dataset.file;
  });
});

function prevArticle() {
  if (currentIndex > 0) {
    currentIndex--;
    viewer.src = "docs/" + titles[currentIndex].dataset.file;
  }
}

function nextArticle() {
  if (currentIndex < titles.length - 1) {
    currentIndex++;
    viewer.src = "docs/" + titles[currentIndex].dataset.file;
  }
}

function prevPage() {
  viewer.contentWindow.history.back();
}

function nextPage() {
  viewer.contentWindow.history.forward();
}
