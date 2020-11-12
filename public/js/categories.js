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
    window.location.replace("/startpage");
  });
});

$(".btn").each(function() {
  $(this).on("click", function() {
    $(this).addClass("btn-success");
    $(this).removeClass("button-danger");
  });
});
