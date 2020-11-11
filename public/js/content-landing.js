$(document).ready(() => {
  console.log("test");
  const rememberDat = $(".remember-dat");
  rememberDat.on("click", event => {
    event.preventDefault();

    console.log("click");
    $.get("/api/services/bing", images => {
      console.log(images);
      function createImage(image) {
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
        body.appendChild(createImage(image));
      });
    });
  });
});
