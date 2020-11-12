require("dotenv").config();
const axios = require("axios").default;
async function urbanDictionary(define) {
  const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: define },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }
  };
  return await axios
    .request(options)
    .then(response => response.data)
    .catch(err => console.error(err));
}

const urbanDictionary = urbanDictionary("");

console.log(urbanDictionary("90s"));
