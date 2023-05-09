const express = require('express')
const router = express.Router()
const connection = require('./../connection')

// router.get('/api/units', (req, res) => {
//   res.send('Här visar vi enheter')
// })

router.get('/units', async (req, res) => {
  let sql = 'SELECT * FROM unit'
  try {
    await connection.query(sql, function (error, results, fields) {
      if (error) {
        if (error) throw error
      }
      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.post('/units', async (req, res) => {
  let sql = 'INSERT INTO unit(unitName) VALUES (?)'
  let params = [req.body.unitName]
  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error
      }
      return res.status(201).json({
        success: true,
        error: '',
        message: 'Du har lagt till en ny enhet!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

router.put('/units', async (req, res) => {
  let sql = 'UPDATE unit SET unitName = ? WHERE unitId = ?'
  let params = [req.body.unitName, req.body.unitId]
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

// router.delete('/units', async (req, res) => {
//   let sql = 'DELETE FROM unit WHERE unitId = ?'
//   try {
//     await connection.query(
//       sql,
//       [req.body.unitId],
//       function (error, results, fields) {
//         if (error) {
//           if (error) throw error
//         }
//         return res.status(201).json({
//           success: true,
//           error: '',
//         })
//       }
//     )
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: error.message,
//     })
//   }
// })

module.exports = router
