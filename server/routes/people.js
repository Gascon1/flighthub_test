const express = require("express");
const router = express.Router();
const swapi = require("swapi-node");

const getResource = res => {
  swapi
    .get("https://swapi.co/api/people")
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

/* GET users listing. */
router.get("/", function(req, res, next) {
  getResource(res);
});

module.exports = router;
