$(document).ready(() => {
  // getting references to form input
  const categoriesBtn = $("button#catBtn");
  const rememberDatBtn = $("button#rememberDatBtn");

  //   when next button is pressed, content landing page is displayed

  categoriesBtn.on("click", event => {
    event.preventDefault();
    window.location.replace("/categories");
  });

  rememberDatBtn.on("click", event => {
    event.preventDefault();
    rememberDatBtn.unbind("click");
    console.log("pressed");
    $.get("/api/services/bing").then(res => {
      res.forEach(image => {
        bingImages.push(image);
      });
      addImage(bingImages);
      rememberDatBtn.on("click", () => {
        addImage(bingImages);
      });
    });
  });
});

const bingImages = [];
i = 0;

// function changeImage(image) {
//   $("#image").attr("class", "");
//   $("#image").attr("alt", image.alt);
//   $("#image").attr("src", image.src);
//   $("#image").attr("class", "dialup");
// }

function addImage(bingImages) {
  if (i < bingImages.length) {
    $(".floaters").prepend(createImage(bingImages[i]));
    const that = `#picture${i}`;
    console.log(that);
    $(that).draggable();
    // changeImage(bingImages[i]);

    console.log("click");
    i++;
    return false;
  }
}

$(() => {
  $("img").draggable();
});

$(() => {
  $(".gameboy").draggable();
});
// *************
// OLD CODE SNIPPETS
// *************

function createImage(image) {
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.id = `picture${i}`;
  img.alt = image.alt;
  img.src = image.src;
  img.classList.add("dialup");
  a.setAttribute("href", image.href);
  img.width = "400";
  img.height = "400";
  console.log(img);
  return img;
}
