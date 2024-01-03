const express = require("express");
const { PORT } = require("./config");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to the MERN Tutorail");
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
