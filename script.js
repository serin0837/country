let countries = require("./countries");

// fetch request to get all the data from api

countries.forEach((country) => {
  console.log(country);
  // go through each country, get the data you want, make a post request to a url
  let body = {
    name: country.name,
    region: country.region,
    lat: country.latlng[0],
    long: country.latlng[1],
  };

  fetch("yoururl", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});
