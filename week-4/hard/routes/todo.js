const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');

const adminMiddleware = require("../middleware/user");
const router = Router();


// todo Routes
let todos = {};
router.post('/', (req, res) => {
    // Implement todo creation logic
    const title = req.body.title;
    const description = req.body.description
    const id = uuidv4();

    if (!title || !description) {
        res.status(400).json({ Error: "Data is Missing!" });
    }
    else {
        todos[id] = { id, title, description };
        res.status(201).json({todos});
    }

});

router.put('/:id', adminMiddleware, (req, res) => {
    // Implement update todo  logic
    const id = req.params.id;
    const todoId = todos[id];
    if (!todoId) {
        res.status(400).json({ Error: "id is Invalid" });
    } else {
        todos[id].title = req.body.title;
        todos[id].description = req.body.description;
        res.status(201).json({todos});
    }
});

router.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
    todos = {};
    res.status(200).send("deleted all todo sucessfully");


});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
    const id = req.params.id;
    const todoId = todos[id];
    if (!todoId) {
        res.status(404).json({ Error: "id is Invalid" });
    } else {
        delete todos[id];
        res.status(200).send("deleted sucessfully!!");
    }

});


router.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
    const allTodos = Object.values(todos);
    if (allTodos.length > 0) {
        
        res.status(200).json(allTodos);
    } else {
        res.status(200).send("todo are Empty")
    }
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
    const id = req.params.id;
    const todoId = todos[id]
    if (!todoId) {
        res.status(400).json({ Error: "id is Invalid" });
    } else {
        res.status(200).send(todos[id]);
    }
});

module.exports = router;