console.log("loaded");
const bingImageSearch = require("../../services/bing");
const images = bingImageSearch("90s");
const body = document.getElementById("body");

function createImageNode(image) {
  const img = document.createElement("img");
  img.alt = image.alt;
  img.src = image.src;
  img.href = image.href;
  img.width = "50";
  img.height = "50";
  console.log(img);
  return img;
}

images.forEach(image => {
  body.appendChild(createImageNode(image));
});
