const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGO_URI;
// Connect to MongoDB
mongoose.connect(uri);

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    userName:String,
    userPassword:String
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    id: String,
});

const User = mongoose.model('User', UserSchema, "usersData");
const Todo = mongoose.model('Todo', TodoSchema, "todosData");

module.exports = {
    User,
    Todo
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
