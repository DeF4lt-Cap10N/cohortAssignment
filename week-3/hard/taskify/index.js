// ToDo
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
  card.draggable = true;

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
      <button class="deleteBtn">delete</button>
    </div>
    </div>`;

  const deleteBtn = card.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", function () {
    card.remove(); 
  });


  addDragEvents(card);

  todoData.appendChild(card);
  showBtn.classList.remove("hidden");
  inputField.classList.add("hidden");

}







//In Progress
const inputFieldInProgress = document.querySelector(".inputFieldInProgress");
const showBtnInProgress = document.querySelector(".showBtnInProgress");

const progressData = document.querySelector(".progressData");
const addTodoBtnInProgress = document.querySelector(".addTodoBtnInProgress");




showBtnInProgress.addEventListener("click", function main() {
  showBtnInProgress.classList.add("hidden");
  inputFieldInProgress.classList.remove("hidden");
})


addTodoBtnInProgress.addEventListener("click", createTodoInProgress);

function createTodoInProgress() {
  const todoInputInProgress = document.querySelector(".todoInputInProgress").value;
  const headingTodoInProgress = document.querySelector(".headingTodoInProgress").value;
  const level = document.querySelector(".level1").value;


  const card = document.createElement("div");
  card.className = "card";
  card.draggable = true;

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
      <h1 class="heading">${headingTodoInProgress}</h1>
      <p class="headingdata">${todoInputInProgress}</p>
    </div>
    <div class="card-sec-2">
      <div class="${levelclass}" >${level}</div>
      <div>${formatTime}</div>
    </div>
    </div>`;

  addDragEvents(card);



  progressData.appendChild(card);
  showBtnInProgress.classList.remove("hidden");
  inputFieldInProgress.classList.add("hidden");

}







//UnderReview
const inputFieldUnderReview = document.querySelector(".inputFieldUnderReview");
const showBtnUnderReview = document.querySelector(".showBtnUnderReview");

const underReviewData = document.querySelector(".underReviewData");
const addTodoBtnUnderReview = document.querySelector(".addTodoBtnUnderReview");


showBtnUnderReview.addEventListener("click", function main() {
  showBtnUnderReview.classList.add("hidden");
  inputFieldUnderReview.classList.remove("hidden");
})


addTodoBtnUnderReview.addEventListener("click", createTodoUnderReview);

function createTodoUnderReview() {
  const todoInputUnderReview = document.querySelector(".todoInputUnderReview").value;
  const headingTodoUnderReview = document.querySelector(".headingTodoUnderReview").value;
  const level = document.querySelector(".level2").value;


  const card = document.createElement("div");
  card.className = "card";
  card.draggable = true;

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
      <h1 class="heading">${headingTodoUnderReview}</h1>
      <p class="headingdata">${todoInputUnderReview}</p>
    </div>
    <div class="card-sec-2">
      <div class="${levelclass}" >${level}</div>
      <div>${formatTime}</div>
    </div>
    </div>`;

  addDragEvents(card);



  underReviewData.appendChild(card);
  showBtnUnderReview.classList.remove("hidden");
  inputFieldUnderReview.classList.add("hidden");

}








//Finished

const inputFieldFinshed = document.querySelector(".inputFieldFinshed");
const showBtnFinshed = document.querySelector(".showBtnFinshed");

const finisheddata = document.querySelector(".finisheddata");
const addTodoBtnFinshed = document.querySelector(".addTodoBtnFinshed");




showBtnFinshed.addEventListener("click", function main() {
  showBtnFinshed.classList.add("hidden");
  inputFieldFinshed.classList.remove("hidden");
})


addTodoBtnFinshed.addEventListener("click", createTodoFinshed);

function createTodoFinshed() {
  const todoInputFinshed = document.querySelector(".todoInputFinshed").value;
  const headingTodoFinshed = document.querySelector(".headingTodoFinshed").value;
  const level = document.querySelector(".level3").value;


  const card = document.createElement("div");
  card.className = "card";
  card.draggable = true;

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
      <h1 class="heading">${headingTodoFinshed}</h1>
      <p class="headingdata">${todoInputFinshed}</p>
    </div>
    <div class="card-sec-2">
      <div class="${levelclass}" >${level}</div>
      <div>${formatTime}</div>
    </div>
    </div>`;

  addDragEvents(card);


  finisheddata.appendChild(card);
  showBtnFinshed.classList.remove("hidden");
  inputFieldFinshed.classList.add("hidden");

}





// drag and drop feautre
function addDragEvents(task) {
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
}

document.querySelectorAll(".task-list").forEach(list => {
  list.addEventListener("dragover", e => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    list.appendChild(dragging);
  });
});

