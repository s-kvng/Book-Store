require("dotenv").config();
const express = require("express");

const { PORT } = require("./config");
const mongoose = require("./db");
const { Book } = require("./models/bookModel");
const app = express();

//middleware for parsing json body
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to the MERN Tutorail");
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    console.log(`${title} - ${author} - ${publishYear}`);
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        success: false,
        message: "Provide all required fields: title , author , publishYear",
      });
    }

    const newBook = {
      title: title,
      author: author,
      publishYear: publishYear,
    };

    console.log(newBook);
    const book = await Book.create(newBook);

    return res.status(201).send({ success: true, data: book });
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .send({ success: false, message: "New book not added" });
  }
});

mongoose;
app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
