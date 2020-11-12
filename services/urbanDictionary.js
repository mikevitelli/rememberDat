require("dotenv").config();
const axios = require("axios").default;
const urbanDictionary = async define => {
  const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: define },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }
  };

  await axios
    .request(options)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
};

console.log(urbanDictionary("90s"));
