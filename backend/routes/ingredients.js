const express = require("express");
const router = express.Router();
const cors = require("cors");

const bodyParser = require("body-parser");

const connection = require("./connection");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(cors());
router.use(express.static("public"));
const port = 3000;

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

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
