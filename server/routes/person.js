const express = require("express");
const router = express.Router();
const searchPerson = require("../helpers/searchPerson");

/* GET users listing. */
router.get("/", function(req, res, next) {
  searchPerson(res, "obi");
});

module.exports = router;
