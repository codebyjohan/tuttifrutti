const express = require("express");
const router = express.Router();
const connection = require("./../connection");
module.exports = router;

router.post("/recipeIngredients", async (req, res) => {
  let sql =
    "INSERT INTO recipeIngredients (recipeIngredientsRecId, recipeIngredientsIngId, recipeIngredientsUniId, recipeIngredientsAmoId) VALUES (?,?,?,?)";
  let params = [
    req.body.recipeIngredientsRecId,
    req.body.recipeIngredientsIngId,
    req.body.recipeIngredientsUniId,
    req.body.recipeIngredientsAmoId,
  ];
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
