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
    window.location.replace("/startpage");
  });
});
