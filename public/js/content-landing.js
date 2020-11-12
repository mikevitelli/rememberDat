$(document).ready(() => {
  const rememberDat = $(".remember-dat");
  rememberDat.on("click", event => {
    event.preventDefault();

    $.get("/api/services/bing", images => {
      console.log("click");
      // console.log(images.data);
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
      // images.forEach(image => {
      //   body.appendChild(createImage(image));
      // });
    });
  });
});
