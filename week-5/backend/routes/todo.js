//  start writing your code from here
const { Router } = require("express");
const router = Router();

const { v4: uuidv4 } = require('uuid');


const todos = [];

router.get("/", (req, res) => {
    res.status(200).json({ todos });
})


router.post("/create", (req, res) => {
    const data = req.body.data;
    const id = uuidv4();
    if (data) {
        todos.push({ id, data });
        return res.status(201).send("todo created");
    } else {
        return res.status(204).send("data is empty");
    }


})

router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((e) => e.id === id);

    if (index!==-1) {
        const data = req.body.data;
        todos[index] = {...todos[index], data}; 
        return res.status(200).send("updates");
    }else{
        return res.status(404).send("id not found");
    }
})


router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((e)=>e.id===id);

    if(index!==-1){
        todos.splice(index , 1);
        res.status(200).send("Deleted todo");
    }else{
        return res.status(404).send("id not found");
    }
})




module.exports = router;