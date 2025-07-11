const API_URL = 'http://localhost:3001/todos';

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // fetch todos
    fetchTodos();

});

// Fetch todos from backend
async function fetchTodos() {
    //  write here
    try {
        const response = await axios.get(`${API_URL}`);
        const result = response.data.todos;


        const list = document.getElementById("todoList");
        list.innerHTML = "";

        result.forEach(e => addTodoToDOM(e));
    } catch (error) {
        console.log(error);
    }
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    //  write here
    const li = document.createElement("li");

    li.innerHTML = `
     <p>${todo.task}</p>
    <div>
      <button onclick="deleteTodo('${todo.id}')">delete</button>
      <button onclick="updateTodo('${todo.id}')">Edit</button>
    </div>
    `
    document.getElementById("todoList").append(li);
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', async () => {
    //  write here
    const taskData = document.getElementById("taskInput").value;
    if (taskData.trim() === "") {
        alert("plese enter the task!");
        return;
    }

    try {
        const response = await axios.post(`${API_URL}`, {
            task: taskData
        })
        console.log(response.data);
         document.getElementById("taskInput").value = "";
        fetchTodos();
    } catch (error) {
        console.log(error);
    }
   
});


// Update todo completion
async function updateTodo(id) {
    //    write here'

    const task = prompt("enter the updated Task");
    if (!task || task.trim() === "") {
        return alert("Please Enter the task");
    }

    try {
        const response = await axios.put(`${API_URL}/${id}`, {
            task: task
        });

        fetchTodos();
        console.log(response.data);
        console.log(id);
        console.log("Updated succesfully");
    }
    catch (error) {
        console.log(error);
    }

}

// Delete a todo
async function deleteTodo(id) {
    // write here  
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log(response.data);
        console.log(id);
        fetchTodos();
    } catch (error) {
        console.log("deleted err :" + error);
    }

}



async function searchTodo() {
    const searchData = document.getElementById("searchInput").value;
    if (!searchData || searchData.trim() === "") {
        console.log("please Enter search value!!");
        return;
    }


    try {
        const response = await axios.get(`${API_URL}/search?keyword=${encodeURIComponent(searchData)}`);
        const result = response.data.result;
        console.log(result);

        const list = document.getElementById("todoList");
        list.innerHTML = ""; 
        result.forEach(todo => addTodoToDOM(todo));
    }
    catch (error) {
        console.log(`search error:${error}`)
    }

     document.getElementById("searchInput").value=  "";


}


 function resetSearchTodo(){
    console.log("Script loaded!");
    fetchTodos();
}

console.log("Script loaded!");

