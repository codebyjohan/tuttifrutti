const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
  res.send("GET request");
});

module.exports = router;
