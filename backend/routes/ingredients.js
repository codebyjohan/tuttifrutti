const express = require("express");
const router = express.Router();
const connection = require("./../connection");

module.exports = router;

router.get("/ingredients", async (req, res) => {
  let sql = "SELECT * FROM ingredients";
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

router.put("/ingredients", async (req, res) => {
  let sql = "UPDATE ingredients SET ingredientsName=? WHERE ingredientsId=?";
  let params = [req.body.ingredientsName, req.body.ingredientsId];
  try {
    await connection.query(sql, params, function (error, results, fields) {
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
