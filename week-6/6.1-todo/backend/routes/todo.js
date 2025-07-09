
import { v4 as uuidv4 } from 'uuid';


let todos = []; // in memory space

export async function getAllTodo (req, res, next){
    //  write here
    if(todos.length<1){
        return res.status(404).send("todos are empty!!");
    }

    return res.status(200).json({todos});
}

export async function createTodo (req, res, next){
    //  write here
    const {task} = req.body;
    if(!task){
        return res.status(400).send("task is Empty!!");
    }
    const id = uuidv4();

    todos.push({id:id, task});
    return res.status(200).json({todos});
}

export async function updateTodo (req, res, next){
    //  write here
    const id = req.params.id;
    const task = req.body.task;
    if(!id || !task){
       return  res.status(400).send("plese give valid data!!");
    }

    const foundInd = todos.findIndex((todo)=>todo.id===id);

    if(foundInd==-1){
       return res.status(400).send("Invalid id!!");
    }
     
    todos[foundInd].task=task;
    res.status(200).json({todos});

}

export async function searchTodo (req, res, next){
    //  write here
    const {keyword} = req.query;
    if(!keyword || keyword.trim()===""){
        return res.status(400).send("Keyword is require");
    }

    const mathchedTodo = todos.filter((todo)=>todo.task.toLowerCase().includes(keyword.toLowerCase()));

    if(mathchedTodo.length===0){
        return res.status(400).send("no key found!");
    }

    return res.status(200).json({result: mathchedTodo});
}

export async function deleteTodoById (req, res, next){
    //  write here
    const id = req.params.id;
  
    if(!id){
       return res.status(400).send("plese give valid id!!");
    }

    const foundInd = todos.findIndex((todo)=>todo.id===id);

    if(foundInd==-1){
        res.status(400).send("Invalid id!!");
    }
    todos.splice(foundInd, 1);

    res.status(200).send("todo deleted sucessfully!!!");
}

