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
    console.log("pressed");
    $.get("/api/services/bing");
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

// Make the GAMEBOY element draggable:
dragElement(document.getElementById("gameboy"));

function dragElement(elem) {
  const pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elem.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elem.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elem.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
