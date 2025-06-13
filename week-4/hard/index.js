const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


const todoRoute = require("./routes/todo");
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use("/todo", todoRoute)
app.use("/user", userRoute)

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

