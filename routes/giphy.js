// GIPHY API

const giphyKey = "QZW2fQn2JVqIqSnBTL5uNajwBc3KR8qE";
const search = userData.replace(" ", "+");

const queryURL = `https://api.giphy.com/v1/gifs/random?limit=2&api_key=${giphyKey}&tag=${search}`;

// make as many requests as giphy tiles
for (let i = 0; i < giphyTiles; i++) {
  $.ajax({
    url: queryURL,
    method: "GET"
    //after the data from the AJAX request comes back
  }).then(response => {
    // assign URL to proper img tag

    $("#gif-" + (i + 1)).attr("src", response.data.image_original_url);
  });
}


const axios = require("axios").default;

const search = "90s";

const options = {
  method: "GET",
  url:
  `https://api.giphy.com/v1/gifs/random?limit=2&api_key=${giphyKey}&tag=${search}`,
  headers: {
    "x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a",
    "x-rapidapi-host": "google-search3.p.rapidapi.com"
  }
};

// console.log(options);
// const imageLinks;

axios
  .request(options)
  .then(response => {
    const imageArray = response.data.image_results;
    console.log(imageArray);
    const imageLinks = imageArray.map(value => value.link.href);
    const imageALT = imageArray.map(value => value.image.alt);
    console.log(imageALT);
    console.log(imageLinks);
  })
  .catch(error => {
    console.error(error);
  });