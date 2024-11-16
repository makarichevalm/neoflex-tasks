const baseURL = "https://api.slingacademy.com/v1/sample-data/photos";
const content = document.querySelector(".slider_content");
const slider = document.getElementById("slider");
const btnPrev = document.getElementById("btn_prev");
const btnNext = document.getElementById("btn_next");

const getPhotos = () => {
  axios
    .get(baseURL + "?limit=5")
    .then((response) => {
      const photos = response.data.photos;
      showPhotos(photos);
    })
    .catch((error) => console.error(error));
};

function showPhotos(photos) {
  photos.forEach((ph) => {
    let block = document.createElement("div");
    block.setAttribute("class", "slider_block");
    content.appendChild(block);
    let img = document.createElement("img");
    img.className = "slider_img";
    img.src = ph.url;
    block.appendChild(img);
    let text = document.createElement("p");
    text.textContent = ph.description;
    block.appendChild(text);
  });
}
getPhotos();

const sliderGap = 40;

btnPrev.addEventListener("click", function () {
  const blockWidth = document.querySelector(".slider_block").offsetWidth;
  slider.scrollBy(-(blockWidth + sliderGap), 0);
  console.log(
    "<-",
    slider.scrollLeft,
    content.scrollWidth,
    slider.scrollWidth,
    slider.offsetWidth
  );
  if (slider.scrollLeft - blockWidth - sliderGap <= 0) btnPrev.disabled = true;
  /*if (
    !content.scrollWidth - blockWidth - sliderGap <=
    slider.scrollLeft + blockWidth
  )
    btnNext.disabled = false;*/
});
btnNext.addEventListener("click", function () {
  const blockWidth = document.querySelector(".slider_block").offsetWidth;
  slider.scrollBy(blockWidth + sliderGap, 0);
  console.log(
    "->",
    content.scrollLeft,
    slider.scrollLeft,
    content.scrollWidth,
    slider.scrollWidth,
    slider.offsetWidth
  );
  /*if (slider.scrollLeft - blockWidth - sliderGap <= 0) btnPrev.disabled = false;*/
  if (
    slider.scrollLeft + slider.offsetWidth >=
    slider.scrollWidth - slider.offsetWidth - sliderGap
  )
    btnNext.disabled = true;
});
