const swapi = require("swapi-node");

const searchPerson = (res, whichPerson) => {
  swapi
    .get(`https://swapi.co/api/people/?search=${whichPerson}`)
    .then(response => {
      res.send(response);
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

module.exports = searchPerson;
