const inputField = document.querySelector(".inputField");
const showBtn = document.querySelector(".showBtn");

const todoData = document.querySelector(".todoData");
const addTodoBtn = document.querySelector(".addTodoBtn");



showBtn.addEventListener("click", function main() {
  showBtn.classList.add("hidden");
  inputField.classList.remove("hidden");
})

addTodoBtn.addEventListener("click", createTodo);

function createTodo() {
  const todoInput = document.querySelector(".todoInput").value;
  const headingTodo = document.querySelector(".headingTodo").value;
  const level = document.querySelector(".level").value;


  const card = document.createElement("div");
  card.className = "card";

  let levelclass = "";
  if (level === "low") {
    levelclass = level
  } else if (level === "medium") {
    levelclass = level;
  } else {
    levelclass = level;
  }


 // time
  const date = new Date();
  const day = date.getDate();
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formatTime = `${day} ${month} ${year}`;

  card.innerHTML = `<div>
    <div class="card-sec-1">
      <h1 class="heading">${headingTodo}</h1>
      <p class="headingdata">${todoInput}</p>
    </div>
    <div class="card-sec-2">
      <div class="${levelclass}" >${level}</div>
      <div>${formatTime}</div>
    </div>
    </div>`;



  todoData.appendChild(card);
  showBtn.classList.remove("hidden");
  inputField.classList.add("hidden");

}