const express = require("express");
const router = express.Router();
const connection = require("./../connection");
module.exports = router;

router.post("/recipeCategory", async (req, res) => {
  let sql =
    "INSERT INTO recipeCategory (recipeCategoryRecId,recipeCategoryCatId) VALUES (?,?)";
  let params = [req.body.recipeCategoryRecId, req.body.recipeCategoryCatId];
  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        messgae: "Du har uppdaterat mellantabellen!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
