<<<<<<< HEAD
console.log("loaded");
const bingImageSearch = require("../../services/bing");
const images = bingImageSearch("90s");
const body = document.getElementById("body");
=======
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
      rememberDatBtn.on("click", () => {
        addImage(bingImages);
      });
    });
  });
});

const bingImages = [];
i = 0;
>>>>>>> main

function createImage(i, image) {
  const img = document.createElement("img");
  img.id = `picture${i}`;
  img.alt = image.alt;
  img.src = image.src;
  img.classList.add("dialup");
  img.href = image.href;
  img.width = "400";
  img.height = "400";
  console.log(img);
  return img;
}
function addImage(bingImages) {
  if (i < bingImages.length) {
    $(".mainWrapper").append(createImage(i, bingImages[i]));
    console.log("click");
    i++;
    return false;
  }
}

<<<<<<< HEAD
images.forEach(image => {
  body.appendChild(createImageNode(image));
=======
// Make the GAMEBOY element draggable:
dragElement(document.getElementById("gameboy"));

function dragElement(elem) {
  let pos1 = 0,
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
// frame

target = $(".browser-frame");
Draggable.create(target, { trigger: "#drag-handle" });

var handleResize = $("<div class='resize-handle'></div>").appendTo(target);

Draggable.create(handleResize, {
  type: "top,left",
  onPress: function (e) {
    e.stopPropagation();
  },
  onDrag: function (e) {
    parent = this.target.parentNode;
    TweenLite.set(parent, { width: this.x, height: this.y - 132 - 55 });
  },
>>>>>>> main
});
