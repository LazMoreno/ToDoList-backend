// import all libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();
//setup connections
mongoose.connect(process.env.MONGODB_URL)
 .then(() => console.log("Connected to DB 🔌"))
 .catch(() => console.log("Couldn't connect to db ❌"))

//setup middlewares
app.use(cors());
app.use(express.json())


//setup routes
app.get("/", (req, res) => {
  return res.json({message: "api works 😁"})
})


//start listening on server
const port = process.env.PORT
app.listen(port, () => {
  console.log("Server running...💯")
})