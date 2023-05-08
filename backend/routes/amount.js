const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET request");
});

module.exports = router;
