//  start writing your code from here
const { Router } = require("express");
const router = Router();

const { v4: uuidv4 } = require('uuid');


const todos = [];

router.get("/", (req, res) => {
    res.status(200).json({ todos });
})


router.get("/:userId", (req, res) => {
    const {userId} = req.params;
    const userTodo = todos.filter((todo)=>todo.userId===userId);
    if(userTodo.length>0){
        res.status(200).json(userTodo);
    }
    else{
        res.status(404).send("Todo Not available");
    }
})


router.post("/create", (req, res) => {
    const {data, userId} = req.body;
    const id = uuidv4();
    if (data && userId) {
        todos.push({ id, data , userId});
        return res.status(201).send("todo created");
    } else {
        return res.status(204).send("data is empty");
    }


})

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const userId = req.body.userId;
    const index = todos.findIndex((e) => e.id === id);

    if(todos[index].userId!==userId){
        return res.status(401).send("Not Authorize access");
    }

    if (index !== -1) {
        const data = req.body.data;
        todos[index] = { ...todos[index], data };
        return res.status(200).send("updates");
    } else {
        return res.status(404).send("id not found");
    }
})


router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const userId = req.body.userId;
    // const index = todos.findIndex((e)=>e.id===id); 
    const present = todos.find((e) => e.id === id);
    const index = todos.indexOf(present);

     if(todos[index].userId!==userId){
        return res.status(401).send("Not Authorize access");
    }


    if (present) {

        todos.splice(index, 1);
        res.status(200).send("Deleted todo");
    } else {
        return res.status(404).send("id not found");
    }
})




module.exports = router;