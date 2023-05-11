const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const CommentsModel = require('./models')

const app = express()
const port = 3000

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
    const insertedComment = await newCommment.save()
    return res.status(201).json(insertedComment)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

// app.put("/api/books", async (req, res) => {
//   let bookIsbn = req.body.bokIsbn
//   let bookTitle = req.body.bokTitel
//   let bookAuthor = req.body.bokForfattare
//   let bookPrice = req.body.bokPris
//   let bookCategory1 = req.body.bokKategori1
//   let bookCategory2 = req.body.bokKategori2

//   try {
//       await BookModel.updateOne({isbn: bookIsbn}, {
//           book: bookTitle,
//           author: bookAuthor,
//           isbn: bookIsbn,
//           price: bookPrice,
//           cateogries: [bookCategory1, bookCategory2]
//       })
//       const updatedBook = await BookModel.find({isbn: bookIsbn})
//       return res.status(200).json(updatedBook)
//   }
//   catch (error) {
//       return res.status(500).json({
//           error: error.message
//       })
//   }
// })

// app.delete("/api/books", async (req, res) => {
//   let bookIsbn = req.body.bokIsbn
//   try {
//       const deletedBook = await BookModel.deleteOne({isbn: bookIsbn})
//       return res.status(200).json(deletedBook)
//   }
//   catch (error) {
//       return res.status(500).json({
//           error: error.message
//       })
//   }
// })

// app.delete("/api/books-byid", async (req, res) => {
//   let bookId = req.body.id
//   try {
//       const deletedBook = await BookModel.findByIdAndDelete(bookId)
//       return res.status(200).json(deletedBook)
//   }
//   catch (error) {
//       return res.status(500).json({
//           error: error.message
//       })
//   }
// })

// app.get("/api/books-byid/:id", async (req, res) => {
//   const currentId = req.params.id
//   try {
//       const book = await BookModel.findById(currentId);
//       return res.status(200).json(book);
//   }
//   catch (error) {
//       return res.status(500).json({
//           error: error.message
//       })
//   }
// })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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
