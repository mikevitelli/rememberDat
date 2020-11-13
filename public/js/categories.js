$(document).ready(() => {
  console.log("categories.js loaded");
  // getting references to form input
  const nextBtn = $("button#catNextBtn");
  const backBtn = $("button#catBackBtn");

  //   when next button is pressed, content landing page is displayed

  nextBtn.on("click", event => {
    // console.log("click");
    event.preventDefault();
    const choices = getChoices();
    console.log(choices);
    $.post("/api/users/addcategory", {
      categories: choices
    }).then(() => {
      window.location.replace("/content-landing");
    });
  });

  backBtn.on("click", event => {
    event.preventDefault();
    window.location.replace("/");
  });
});

// // To target the elements having class change
// const button = $(".lisaFrank");
// // To add click event to elements having class change
function clickSuccess(btn) {
  // console.log("click");
  btn.addClass("active");
  btn.addClass("btn-success");
  btn.removeClass("btn-danger");
  btn.unbind("click");
  btn.on("click", function() {
    clickDanger($(this));
  });
}

function getChoices() {
  const choices = [];
  $(".active").each(function() {
    // console.log($("h3", this).text());
    choices.push(
      $(this)
        .text()
        .trim()
    );
  });
  return choices;
}

function clickDanger(btn) {
  btn.removeClass("active");
  btn.addClass("btn-danger");
  btn.removeClass("btn-success");
  btn.unbind("click");
  btn.on("click", function() {
    clickSuccess($(this));
  });
}

function clickClick() {
  $(".catBtn").each(function() {
    const btn = $(this);
    btn.on("click", function() {
      clickSuccess($(this));
    });
  });
}
clickClick();
