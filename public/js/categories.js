$(document).ready(() => {
  // getting references to form input
  const nextBtn = $("button#catNextBtn");
  const backBtn = $("button#catBackBtn");

  //   when next button is pressed, content landing page is displayed

  nextBtn.on("click", (event) => {
    event.preventDefault();
    window.location.replace("/content-landing");
  });

  backBtn.on("click", (event) => {
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

// $(".btn").each(function () {
//   $(this).on("click", function () {
//     $(this).addClass("btn-success");
//     $(this).removeClass("btn-danger");
//     var userCatChoice = {
//       catName: $(this).parent().attr("id"),
//     };
//     console.log("user cat choice", userCatChoice);
//   });
// });

function clickClick() {
  $(".btn").each(function () {
    $(this).addClass("btn-danger");
    $(this).removeClass("btn-success");
    $(this).unbind("click");
    $(this).on("click", function () {
      var userCatChoice = {
        catName: $(this).parent().attr("id"),
      };
      console.log("user cat choice", userCatChoice);
      $(this).addClass("btn-success");
      $(this).removeClass("btn-danger");
      $(this).unbind("click");
      $(this).on("click", clickClick);
    });
  });
}
clickClick();

// when button is clicked, changes value of button

// // When user clicks add-btn
// $(".btn").on("click", function (event) {
//   event.preventDefault();

//   console.log("click working");

//   // Make a newBook object
//   var userCatChoice = {
//     catName: $(this).parent().attr("id"),
//   };
//   console.log("user cat choice", userCatChoice);
// });

// $.post("/api/category", Category)
//   // On success, run the following code
//   .then(function (data) {
//     // Log the data we found
//     console.log(data);
//   });
