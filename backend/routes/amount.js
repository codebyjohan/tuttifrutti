const express = require("express");
const router = express.Router();
const connection = require("./../connection");

module.exports = router;

router.get("/amount", async (req, res) => {
  let sql = "SELECT * FROM amount";
  try {
    await connection.query(sql, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});
