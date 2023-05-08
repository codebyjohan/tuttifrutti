const express = require("express");
const router = express.Router();
const connection = require('./../connection');

router.get('/category', async (req, res) => {
  let sql = 'SELECT * FROM category'
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

router.get('/category_recipes', async (req, res) => {
  let sql = 'SELECT recipe.recipeName, category.categoryName FROM category INNER JOIN recipeCategory ON recipeCategory.recipeCategoryCatId =  category.categoryId INNER JOIN recipe ON recipeCategory.recipeCategoryRecId = recipe.recipeId;'
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

// router.get('/category/:id', async (req, res) => {
//   let sql = 'SELECT * FROM category WHERE categoryId = ?'
//   try {
//     await connection.query(
//       sql,
//       [req.params.id],
//       function (error, results, fields) {
//         if (error) {
//           if (error) throw error
//         }
//         res.json(results)
//       }
//     )
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     })
//   }
// })

router.post('/category', async (req, res) => {
  let sql =
    'INSERT INTO category (categoryName) VALUES (?)'
  let params = [
    req.body.categoryName
  ]

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error
      }
      return res.status(201).json({
        success: true,
        error: '',
        message: 'Du har lagt till en ny kategori!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

router.put('/category', async (req, res) => {
  let sql =
    'UPDATE category SET categoryName = ? WHERE categoryId = ?'
  let params = [
    req.body.categoryName,
    req.body.categoryId
  ]

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error
      }
      return res.status(201).json({
        success: true,
        error: '',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/category', async (req, res) => {
  console.log(req.body)
  let sql = 'DELETE FROM category WHERE categoryId = ?'

  try {
    await connection.query(
      sql,
      [req.body.categoryId], 
      function (error, results, fields) {
        if (error) {
          if (error) throw error
        }
        return res.status(201).json({
          success: true,
          error: '',
          message: 'Kategorin är nu raderad!',
        })
      }
    )
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})


module.exports = router;