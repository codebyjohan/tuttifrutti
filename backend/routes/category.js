const express = require("express");
const router = express.Router();

router.get("/category", async (req, res) => {
  let sql = "SELECT * FROM category;";
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

module.exports = router;
