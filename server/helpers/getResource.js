const swapi = require("swapi-node");

let pageNumber = 1;
let fullData = [];

const getResource = (res, whichResource) => {
  let url = `https://swapi.co/api/${whichResource}/?page=${pageNumber}`;
  console.log(fullData);
  swapi
    .get(url)
    .then(response => {
      if (response.next === null) {
        fullData.push(response.results);
        res.send(fullData);
      } else {
        fullData.push(response.results);
        pageNumber += 1;
        getResource(res, whichResource);
      }
    })
    .catch(err => {
      console.log("error", err);
    });
};

// const formatResource = apiCall => {
//   let formattedResource = [];
//   for (const item of apiCall.results) {
//     formattedResource.push(item.name);
//   }
//   return formattedResource;
// };

module.exports = getResource;
