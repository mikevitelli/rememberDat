// DEPENDENCIES;
// =============:
require("dotenv").config();
const axios = require("axios").default;

// Urban Dictionary function; urbanDictionary("word to define");
function urbanDictionary(define) {
  const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: encodeURIComponent(define) },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }
  };
  return axios
    .request(options)
    .then(response => response.data)
    .catch(err => console.error(err));
}

console.log(urbanDictionary("90s"));
module.exports = urbanDictionary;
