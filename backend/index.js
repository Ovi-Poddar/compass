const express = require("express");
const connectToMongo = require("./db");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

// Connect to MongoDB
connectToMongo();

//request parsers
app.use(express.json());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//routing setup

//error handling

//start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
