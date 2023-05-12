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

router.get("/recipeIngredients", async (req, res) => {
  let sql =
    "SELECT recipe.recipeId, recipe.recipeName, ingredients.ingredientsName, amount.amountNumber, unit.unitName FROM recipe INNER JOIN recipeIngredients ON recipeIngredients.recipeIngredientsRecId = recipe.recipeId INNER JOIN ingredients ON recipeingredients.recipeIngredientsIngId = ingredients.ingredientsId INNER JOIN amount ON recipeIngredients.recipeIngredientsAmoId = amount.amountId INNER JOIN unit ON recipeIngredients.recipeIngredientsUniId = unit.unitId";
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
      return res.status(201).json({
        success: true,
        error: "",
        messgae: "Du har uppdaterat en ingrediens!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/ingredients", async (req, res) => {
  let sql = "INSERT INTO ingredients (ingredientsName) VALUES (?)";
  let params = [req.body.ingredientsName];
  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "Du har lagt till en ny ingrediens!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// router.delete("/ingredients", async (req, res) => {
//   let sql = "DELETE from ingredients WHERE ingredientsId=?";
//   try {
//     await connection.query(
//       sql,
//       [req.body.ingredientsId],
//       function (error, results, fields) {
//         if (error) {
//           if (error) throw error;
//         }
//         return res.status(201).json({
//           success: true,
//           error: "",
//           message: "Ingrediensen är nu raderad!",
//         });
//       }
//     );
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });
