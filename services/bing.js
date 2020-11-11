// #############
// Bing Image Search;
// #############

// - shuffler;
const shuffle = require("../utils/shuffle.js");

// Run any string into this function (search) to return image objects;
// =============:
const bingImageSearch = search => {
  const axios = require("axios").default;
  const options = {
    method: "GET",
    url: "https://bing-image-search1.p.rapidapi.com/images/search",
    params: { q: `${encodeURIComponent(search)}` },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    }
  };

  // AXIOS Request;
  // =============:
  axios
    .request(options)
    .then(response => {
      // - make 3 arrays; alt, src, and links;
      const imageArray = response.data.value;
      const imageALT = imageArray.map(value => value.name);
      const imageSRC = imageArray.map(value => value.thumbnailUrl);
      const imageHREF = imageArray.map(value => value.hostPageUrl);
      // - construct image objects from 3 arrays;
      const imageObj = imageALT.map((item, index) => ({
        alt: item,
        src: imageSRC[index] || "",
        href: imageHREF[index] || ""
      }));
      const shuffledImageObj = shuffle(imageObj);
      // console.log(shuffledImageObj);
      return shuffledImageObj;
    })
    .catch(error => {
      console.error(error);
    });
};
// - Exports;
module.exports = bingImageSearch;