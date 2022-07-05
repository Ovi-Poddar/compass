const express = require("express");
const connectToMongo = require("./db");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const app = express();
dotenv.config();

// Connect to MongoDB
connectToMongo();

//request parsers
app.use(express.json());
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//routing setup
app.use('/api/auth', require('./routes/auth'));

//error handling

//start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
