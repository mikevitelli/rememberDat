// #############
// Bing Image Search;
// #############
require("dotenv").config();
const axios = require("axios").default;
// - shuffler;
const shuffle = require("../utils/shuffle.js");
// Run any string into this function (search) to return image objects;
// =============:
const bingImageSearch = async search => {
  return await axios({
    method: "GET",
    url: "https://bing-image-search1.p.rapidapi.com/images/search",
    params: { q: encodeURIComponent(search) },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    }
  })
    .then(response => {
      // - make 3 arrays; alt, src, and links;
      const imageArray = response.data.value;
      const imageALT = imageArray.map(value => value.name);
      const imageSRC = imageArray.map(value => value.thumbnailUrl);
      const imageHREF = imageArray.map(value => value.hostPageUrl);
      // - construct image objects from 3 arrays;
      const imageObj = imageALT.map((item, index) => ({
        alt: item,
        src: imageSRC[index],
        href: imageHREF[index]
      }));
      return shuffle(imageObj);
    })
    .catch(error => {
      console.error(error);
    });
};
// // - Exports;
module.exports = bingImageSearch;
