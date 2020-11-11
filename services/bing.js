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
      "x-rapidapi-host": process.env.API_HOST
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
      // const imgStringArray = [];
      // for (index = 0; index < imageArray.length; index++) {
      //   imgStringArray.push(
      //     `<img alt="${imageALT[index]}" src="${imageSRC[index]}" href="${imageHREF[index]}">`
      //   );
      //   // document.body.appendChild(imgStringArray);
      // }
      // console.log(imgStringArray);
      // - construct image objects from 3 arrays;
      const imageObj = imageALT.map((item, index) => ({
        alt: item,
        src: imageSRC[index] || "",
        link: imageHREF[index] || ""
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
// bingImageSearch("90s");
module.exports = bingImageSearch;

// var myImage = new Image(100, 200);
// myImage.src = 'picture.jpg';
