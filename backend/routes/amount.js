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

router.post("/amount", async (req, res) => {
  let sql = "INSERT INTO amount (amountNumber) VALUES (?)";
  let params = [req.body.amountNumber];
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

router.put("/amount", async (req, res) => {
  let sql = "UPDATE amount SET amountNumber = ?  WHERE amountId = ?";
  let params = [req.body.amountId, req.body.amountNumber];

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

// router.delete("/amount", async (req, res) => {
//   console.log(req.body);
//   let sql = "DELETE FROM amount WHERE amountId = ?";

//   try {
//     await connection.query(
//       sql,
//       [req.body.amountId],
//       function (error, results, fields) {
//         if (error) {
//           if (error) throw error;
//         }
//         return res.status(201).json({
//           success: true,
//           error: "",
//           message: "Nummer i amount är nu raderad!",
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
