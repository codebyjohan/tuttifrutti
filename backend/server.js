const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const amountRoutes = require('./routes/amount')
const categoryRoutes = require('./routes/category')
const ingredientsRoutes = require('./routes/ingredients')
const recipeRoutes = require('./routes/recipe')
const unitRoutes = require('./routes/unit')

app.use(amountRoutes)
app.use(categoryRoutes)
app.use(ingredientsRoutes)
app.use(recipeRoutes)
app.use(unitRoutes)
