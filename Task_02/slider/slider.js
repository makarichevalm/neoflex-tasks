const baseURL = "https://api.slingacademy.com/v1/sample-data/photos";

const getPhotos = () => {
  axios
    .get(baseURL + "?limit=5")
    .then((response) => {
      const photos = response.data.photos;
      console.log(`GET list users`, photos);
      showPhotos(photos);
    })
    .catch((error) => console.error(error));
};
const slider = document.querySelector(".slider_content");

function showPhotos(photos) {
  photos.forEach((ph) => {
    let block = document.createElement("div");
    block.setAttribute("class", "slider_block");
    slider.appendChild(block);
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
