const express = require("express");
const router = express.Router();

router.get("/api/units", (req, res) => {
  res.send("Här visar vi enheter");
});

module.exports = router;
