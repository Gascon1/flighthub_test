const swapi = require("swapi-node");

const getResource = (res, whichResource) => {
  swapi
    .get(`https://swapi.co/api/${whichResource}`)
    .then(response => {
      res.send(formatResource(response));
    })
    .catch(() => {
      console.log("error");
    });
};

const formatResource = apiCall => {
  let formattedResource = [];
  for (const item of apiCall.results) {
    formattedResource.push(item.name);
  }
  return formattedResource;
};

module.exports = getResource;
