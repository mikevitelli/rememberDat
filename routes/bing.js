// #############
// Bing Image Search;
// #############

// Run any string into this function (search) to return image objects;
// =============:
function bingImageSearch(search) {
  const axios = require("axios").default;
  const options = {
    method: "GET",
    url: "https://bing-image-search1.p.rapidapi.com/images/search",
    params: { q: `${encodeURIComponent(search)}` },
    headers: {
      "x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a",
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    }
  };

  axios
    .request(options)
    .then(response => {
      // - make 3 arrays; alt, src, and links;
      const imageArray = response.data.value;
      const imageALT = imageArray.map(value => value.name);
      const imageSRC = imageArray.map(value => value.thumbnailUrl);
      const imageLINK = imageArray.map(value => value.hostPageUrl);
      // - construct image objects from 3 arrays;
      const images = imageALT.map((item, index) => ({
        alt: item,
        src: imageSRC[index] || "",
        link: imageLINK[index] || ""
      }));
      console.log(images);
    })
    .catch(error => {
      console.error(error);
    });
}
// - Exports;
module.exports = bingImageSearch();
