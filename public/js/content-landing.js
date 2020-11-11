$(document).ready(() => {
  const rememberDat = $("content-landing-remember-dat");
  rememberDat.on("click", event => {
    event.preventDefault();
    $.get("/api/services/bing").then(console.log("worked?"));
  });
});
