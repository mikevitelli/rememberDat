const axios = require("axios").default;

const options = {
  method: "GET",
  url:
    "https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100",
  headers: {
    "x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a",
    "x-rapidapi-host": "google-search3.p.rapidapi.com"
  }
};

axios
  .request(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
