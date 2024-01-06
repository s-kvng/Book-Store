const { Book } = require("../models/bookModel");

//get all books from the Database
const getBooks = async () => {
  try {
    const books = await Book.find({});
    return res
      .status(200)
      .json({ count: books.length, success: true, data: books });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// request to get a single book from the Database by Id
const getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    return res.status(200).json({ success: true, data: book });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    console.log(`${title} - ${author} - ${publishYear}`);
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        success: false,
        message: "Provide all required fields: title , author , publishYear",
      });
    }

    const { id } = req.params;
    const result = Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Book updated successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).send(error.message);
  }
};

const createBook = async (req, res) => {
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
};

//request to delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = Book.findByIdAndDelete(id);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
