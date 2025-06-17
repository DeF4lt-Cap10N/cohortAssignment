const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');

const adminMiddleware = require("../middleware/user");
const router = Router();

const { Todo } = require("../database/index")

// let todos = {};


// todo Routes
router.post('/', async (req, res) => {
    // Implement todo creation logic
    const title = req.body.title;
    const description = req.body.description
    const id = uuidv4();

    if (!title || !description) {
        res.status(400).json({ Error: "Data is Missing!" });
    }
    else {
        try {
            const todo = new Todo({ id, title, description });
            await todo.save();
            res.status(201).json({ todo });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

});

router.put('/:id', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    const id = req.params.id;

    try {
        const updated = await Todo.findOneAndUpdate(
            { id },
            { title: req.body.title, description: req.body.description },
            { new: true }
        );
        if (!updated) {
            res.status(400).json({ Error: "ID is Invalid" });
        } else {
            res.status(201).json({ todo: updated });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

router.delete('/', adminMiddleware, async (req, res) => {
    // Implement delete todo logic
    try {
        await Todo.deleteMany({});
        res.status(200).send("deleted all todo sucessfully");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.delete('/:id', adminMiddleware, async(req, res) => {
    // Implement delete todo by id logic
    const id = req.params.id;
    try {
        const deleted = await Todo.findOneAndDelete({ id }); 
        if (!deleted) {
            res.status(404).json({ Error: "ID is Invalid" });
        } else {
            res.status(200).send("Deleted successfully!!");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});


router.get('/', adminMiddleware, async(req, res) => {
    // Implement fetching all todo logic
   try {
        const allTodos = await Todo.find(); 
        if (allTodos.length > 0) {
            res.status(200).json(allTodos);
        } else {
            res.status(200).send("Todos are Empty");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', adminMiddleware, async(req, res) => {
    // Implement fetching todo by id logic
    const id = req.params.id;
     try {
        const todo = await Todo.findOne({id});
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(400).send("Invalid id");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;