const todosContainer = document.querySelector(".todoData");
const todoInput = document.querySelector(".todoInput");

const userId = "rahul123";

async function main() {
  try {
    const response = await axios.get(`http://localhost:3000/todo/${userId}`);
    const todos = response.data;

    todosContainer.innerHTML = ""; 

    for (let i = 0; i < todos.length; i++) {
      const card = document.createElement("div");
      card.className = "cards";

      const todoBox = document.createElement("div");
      todoBox.className = "todoBox";
      const description = document.createElement("p");
      description.innerText = todos[i].data;
      todoBox.appendChild(description);

      const editAndDeleteBox = document.createElement("div");
      editAndDeleteBox.className = "editandDeleteBox";

      const edit = document.createElement("div");
      edit.className = "editBtn";
      edit.innerHTML = "✎";
      edit.onclick = () => editTodo(todos[i].id, card, todos[i].data);

      const del = document.createElement("div");
      del.className = "deleteBtn";
      del.innerHTML = "🗑️";
      del.onclick = () => deleteTodo(todos[i].id);

      editAndDeleteBox.appendChild(edit);
      editAndDeleteBox.appendChild(del);

      card.appendChild(todoBox);
      card.appendChild(editAndDeleteBox);

      todosContainer.appendChild(card);
    }
  } catch (err) {
    todosContainer.innerHTML = "No Todos Found.";
  }
}

main();

async function CreateTodo() {
  if (!todoInput.value.trim()) {
    alert("Enter valid todo");
    return;
  }

  try {
    await axios.post("http://localhost:3000/todo/create", {
      data: todoInput.value,
      userId
    });
    todoInput.value = "";
    main();
  } catch (err) {
    console.error("Create error", err);
  }
}

function editTodo(id, card, currentData) {
  const todoBox = card.querySelector(".todoBox");
  const descriptionElement = todoBox.querySelector("p");
  const input = document.createElement("input");
  input.value = currentData;

  const editBox = card.querySelector(".editandDeleteBox");
  const saveBtn = document.createElement("div");
  saveBtn.innerHTML = "💾";
  saveBtn.className = "editBtn";

  const cancelBtn = document.createElement("div");
  cancelBtn.innerHTML = "❌";
  cancelBtn.className = "deleteBtn";

  editBox.innerHTML = "";
  editBox.appendChild(saveBtn);
  editBox.appendChild(cancelBtn);

  todoBox.replaceChild(input, descriptionElement);

  saveBtn.onclick = async () => {
    try {
      await axios.put(`http://localhost:3000/todo/update/${id}`, {
        data: input.value,
        userId
      });
      main();
    } catch (err) {
      alert("Failed to update");
    }
  };

  cancelBtn.onclick = () => {
    main();
  };
}

async function deleteTodo(id) {
  try {
    await axios.delete(`http://localhost:3000/todo/delete/${id}`, {
      data: { userId }
    });
    main();
  } catch (err) {
    alert("Delete failed");
  }
}
