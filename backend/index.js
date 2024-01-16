require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { PORT } = require("./config");
const mongoose = require("./db");
const booksRoute = require("./routes/booksRoute");
const app = express();

//middleware for parsing json body
app.use(express.json());

//Middleware for handling cors policy
//option 1: Allow all origins with the default (*)
app.use(cors());

//option 2: Allow custom origin
// app.use(
//   cors({
//     origin: "http//localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to the book store");
});

app.use("/books", booksRoute);

// app.get("/books", async (req, res) => {
//   try {
//     const books = await Book.find({});
//     return res
//       .status(200)
//       .json({ count: books.length, success: true, data: books });
//   } catch (error) {
//     return res.status(500).send({ success: false, message: error.message });
//   }
// });

// app.post("/books", async (req, res) => {
//   try {
//     const { title, author, publishYear } = req.body;
//     console.log(`${title} - ${author} - ${publishYear}`);
//     if (!title || !author || !publishYear) {
//       return res.status(400).send({
//         success: false,
//         message: "Provide all required fields: title , author , publishYear",
//       });
//     }

//     const newBook = {
//       title: title,
//       author: author,
//       publishYear: publishYear,
//     };

//     console.log(newBook);
//     const book = await Book.create(newBook);

//     return res.status(201).send({ success: true, data: book });
//   } catch (error) {
//     console.log(error.message);
//     return res
//       .status(400)
//       .send({ success: false, message: "New book not added" });
//   }
// });

mongoose;
app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
