const express = require("express");
const router = express.Router();

const connection = require("./../connection");

router.get("/recipe", async (req, res) => {
  let sql = "SELECT * FROM recipe;";
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

router.post("/recipe", async (req, res) => {
  let sql =
    "INSERT INTO recipe (recipeName, recipeInstructions, recipeTime, recipeImage) VALUES (?, ?, ?, ?)";
  let params = [
    req.body.recipeName,
    req.body.recipeInstructions,
    req.body.recipeTime,
    req.body.recipeImage,
  ];
  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "Du har lagt till ett nytt recept!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.put("/recipe", async (req, res) => {
  let sql = "UPDATE recipe SET recipeName = ? WHERE recipeId = ?";
  let params = [req.body.recipeName, req.body.recipeId];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
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
  let sql = "DELETE FROM recipe WHERE recipeId = ?";

  try {
    await connection.query(
      sql,
      [req.body.recipeId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "Receptet är nu raderat!",
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

module.exports = router;
