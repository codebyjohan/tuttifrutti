const express = require("express");
const router = express.Router();
const connection = require("./../connection");
module.exports = router;

router.post("/recipeCategory", async (req, res) => {
  let sql =
    "INSERT INTO recipeCategory (recipeCategoryCatId, recipeCategoryRecId) VALUES (?,?)";
  let params = [req.body.recipeCategoryCatId, req.body.recipeCategoryRecId];
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

router.delete("/recipe", async (req, res) => {
  console.log(req.body);
  let sql = "DELETE FROM recipeCategory WHERE recipeCategoryCatId = ?";

  try {
    await connection.query(
      sql,
      [req.body.categoryId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "Mellantabellen för kategorin är nu raderad!",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }

  let andraSql = "DELETE FROM category WHERE categoryId = ?";
  try {
    await connection.query(
      andraSql,
      [req.body.categoryId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "Kategorin är nu raderad!",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
