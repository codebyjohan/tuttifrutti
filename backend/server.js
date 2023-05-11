const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const CommentsModel = require('./models')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/commentsmongoose')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
start()

app.get('/comments', async (req, res) => {
  try {
    const allComments = await CommentsModel.find()
    return res.status(200).json(allComments)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

app.post('/comments', async (req, res) => {
  let commentText = req.body.commentText
  let commentUser = req.body.commentUser
  let commentDate = req.body.dateOfComment

  try {
    const newComment = new CommentsModel({
      commentText: commentText,
      commentUser: commentUser,
      dateOfComment: commentDate,
    })
    const insertedComment = await newComment.save()
    return res.status(201).json(insertedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

app.put('/comments', async (req, res) => {
  let commentId = req.body._id
  let updateText = req.body.commentText
  let updateUser = req.body.commentUser

  try {
    // await updatedComment.updateOne({
    await CommentsModel.updateOne(
      { _id: commentId },
      {
        //   _id: commentId,
        commentText: updateText,
        commentUser: updateUser,
        // })
      }
    )
    const updatedComment = await CommentsModel.find({ _id: commentId })

    return res.status(200).json(updatedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

app.delete('/comments', async (req, res) => {
  let commentId = req.body._id
  try {
    const deletedComment = await CommentsModel.findByIdAndDelete(commentId)
    return res.status(200).json(deletedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

const connection = require('./connection')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const unitRoutes = require('./routes/unit')
const amountRoutes = require('./routes/amount')
const categoryRoutes = require('./routes/category')
const ingredientsRoutes = require('./routes/ingredients')
const recipeRoutes = require('./routes/recipe')
const recipeIngredientsRoutes = require('./routes/recipeIngredients')
const recipeCategoryRoutes = require('./routes/recipeCategory')

app.use(
  unitRoutes,
  amountRoutes,
  categoryRoutes,
  ingredientsRoutes,
  recipeRoutes,
  recipeIngredientsRoutes,
  recipeCategoryRoutes
)
