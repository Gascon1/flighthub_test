const express = require("express");
const router = express.Router();
const getResource = require("../helpers/getResource");

/* GET users listing. */
router.get("/", function(req, res, next) {
  getResource(res, "starships");
});

module.exports = router;
