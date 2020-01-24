const swapi = require("swapi-node");

let pageNumber = 1;
let fullData = [];

const getResource = (res, whichResource) => {
  let url = `https://swapi.co/api/${whichResource}/?page=${pageNumber}`;
  swapi
    .get(url)
    .then(response => {
      if (response.next === null) {
        fullData.push(...response.results);
        res.send(fullData);
        pageNumber = 1;
        fullData = [];
      } else {
        fullData.push(...response.results);
        pageNumber += 1;
        getResource(res, whichResource);
      }
    })
    .catch(err => {
      console.log("error", err);
    });
};

module.exports = getResource;
