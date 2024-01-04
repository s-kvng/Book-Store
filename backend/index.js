const express = require("express");

const { PORT } = require("./config");
const mongoose = require("./db");
const { Book } = require("./models/bookModel");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to the MERN Tutorail");
});

app.post("/book", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
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

    const book = await Book.create(newBook);
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
