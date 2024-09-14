const searchForm = document.querySelector(".hero__formInput");
const Picture = new picturesApi(apiKey);
let Pictures = await Picture.getPictures("Canada");

const PictureSec = document.querySelector(".image-container");

function displayShows() {
  PictureSec.innerHTML = "";
  Pictures.forEach((show) => {
    displayShow(show);
  });
}

function displayShow(show) {
  const showEle = document.createElement("img");
  showEle.classList.add("image-block");
  console.log(show.urls.regular);

  showEle.setAttribute("src", show.urls.regular);
  PictureSec.appendChild(showEle);
}

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const keyWord = form.search.value;
  console.log(keyWord);

  Pictures = await Picture.getPictures(keyWord);
  form.reset();
  displayShows();
});

displayShows();
