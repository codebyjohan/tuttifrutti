const express = require("express");
const router = express.Router();


router.get("/category", (req, res) => {
  res.send("Här visar vi kategorier");
});

module.exports = router;
