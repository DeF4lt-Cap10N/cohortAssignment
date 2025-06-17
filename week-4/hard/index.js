const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
 const uri = process.env.MONGO_URI;


const todoRoute = require("./routes/todo");
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use("/todo", todoRoute)
app.use("/user", userRoute)

mongoose.connect(uri)
  .then(() => console.log('Database Connected!'))
  .catch((err)=>console.log("Db failed to connect"))

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

