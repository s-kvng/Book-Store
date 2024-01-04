const mongoose = require("mongoose");
const { mongoDbURL } = require("./config");

mongoose
  .connect(mongoDbURL)
  .then((res) => {
    console.log("App connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
