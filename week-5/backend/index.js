// start writing from here
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());

const dotenv = require("dotenv");
dotenv.config();


const port = process.env.PORT||3000;


const todoRoute = require("./routes/todo");
const UserRoute = require("./routes/user");



app.get("/", (req,res)=>{
    res.status(200).send("All goood");
})

app.use("/todo", todoRoute);
app.use("/user", UserRoute);



app.listen(port, () => {
    console.log("port connected :"+ port);
}) 