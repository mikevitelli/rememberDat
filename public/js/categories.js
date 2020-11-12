$(document).ready(() => {
  console.log("categories.js loaded");
  // getting references to form input
  const nextBtn = $("button#catNextBtn");
  const backBtn = $("button#catBackBtn");

  //   when next button is pressed, content landing page is displayed

  nextBtn.on("click", event => {
    event.preventDefault();
    window.location.replace("/content-landing");
  });

  backBtn.on("click", event => {
    event.preventDefault();
    window.location.replace("/");
  });
});

// // To target the elements having class change
// const button = $(".lisaFrank");
// // To add click event to elements having class change
// $(".lisaFrank").click(function () {
//   button.addClass("btn-success");
//   button.removeClass("btn-danger");
// });

// const button = $(".btn");

// $.each(button, function () {
//   button.addClass("btn-success");
//   button.removeClass("btn-danger");
// });

// adding data to server and changing the color when pressed
// $(".btn").each(function (index) {
//   i = 0;
//   $(this).on("click", function (i) {
//     if ((i = 0)) {
//       $(this).addClass("btn-success");
//       $(this).removeClass("btn-danger");
//       i = 1;
//     } else {
//       i = 0;
//       $(this).addClass("btn-danger");
//       $(this).removeClass("btn-success");
//     }
//   });
// });
function clickSuccess(btn) {
  console.log("click");
  btn.addClass("btn-success");
  btn.removeClass("btn-danger");
  btn.unbind("click");
  btn.on("click", function() {
    clickDanger($(this));
  });
}

function clickDanger(btn) {
  btn.addClass("btn-danger");
  btn.removeClass("btn-success");
  btn.unbind("click");
  btn.on("click", function() {
    clickSuccess($(this));
  });
}

function clickClick() {
  $(".btn").each(function() {
    const btn = $(this);
    btn.on("click", function() {
      clickSuccess($(this));
    });
  });
}
clickClick();

// when button is clicked, changes value of button to true
