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

function changeImage(image) {
  $("#image").attr("class", "");
  $("#image").attr("alt", image.alt);
  $("#image").attr("src", image.src);
  $("#image").attr("class", "dialup");
}

function addImage(bingImages) {
  if (i < bingImages.length) {
    changeImage(bingImages[i]);

    console.log("click");
    i++;
    return false;
  }
}

// Make the GAMEBOY element draggable:
dragElement(document.getElementById("pocket"));

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

const handleResize = $("<div class='resize-handle'></div>").appendTo(target);

Draggable.create(handleResize, {
  type: "top,left",
  onPress: function(e) {
    e.stopPropagation();
  },
  onDrag: function(e) {
    parent = this.target.parentNode;
    TweenLite.set(parent, { width: this.x, height: this.y - 132 - 55 });
  }
});

// *************
// OLD CODE SNIPPETS
// *************

// function createImage(image) {
//   const a = document.createElement("a");
//   const img = document.createElement("img");
//   img.id = `picture${i}`;
//   img.alt = image.alt;
//   img.src = image.src;
//   img.classList.add("dialup");
//   a.setAttribute("href", image.href);
//   img.width = "400";
//   img.height = "400";
//   console.log(img);
//   return img;
// }

// $(".mainWrapper").append(createImage(bingImages[i]));
// const that = $(`#picture${i}`);
// dragElement(that);
