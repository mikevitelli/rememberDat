$(document).ready(() => {
  const rememberDat = $(".remember-dat");
  rememberDat.on("click", event => {
    event.preventDefault();

    const categoriesBtn = $("button#catBtn");
    const rememberDatBtn = $("button#rememberDatBtn");

    //   when next button is pressed, content landing page is displayed

    categoriesBtn.on("click", event => {
      event.preventDefault();
      window.location.replace("/categories");
    });

    rememberDatBtn.on("click", event => {
      event.preventDefault();
      console.log("pressed");
      $.get("/api/services/bing");
    });
  });
});

// $.get("/api/services/bing", images => {
//   console.log("click");
//   // console.log(images.data);
//   function createImage(image) {
//     const img = document.createElement("img");
//     img.alt = image.alt;
//     img.src = image.src;
//     img.href = image.href;
//     img.width = "50";
//     img.height = "50";
//     console.log(img);
//     return img;
//   }
//   // images.forEach(image => {
//   //   body.appendChild(createImage(image));
//   // });
// });

// console.log("loaded");
// // const bingImageSearch = require("../../services/bing");
// // const images = bingImageSearch("90s");
// const body = document.getElementById("body");

// function createImageNode(image) {
//   const img = document.createElement("img");
//   img.alt = image.alt;
//   img.src = image.src;
//   img.href = image.href;
//   img.width = "50";
//   img.height = "50";
//   console.log(img);
//   return img;
// }

// images.forEach((image) => {
//   body.appendChild(createImageNode(image));
// });
