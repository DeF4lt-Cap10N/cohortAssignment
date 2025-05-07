import { quizData } from "./data.js";

const question = document.querySelector(".question");
const options = document.querySelectorAll(".option");

const start = document.querySelector(".start")
const next = document.querySelector(".next")
const reset = document.querySelector(".reset")

let cnt = 0;
let marks = 0;
let answered = true;
const optionKeys = ["a", "b", "c", "d"];

start.addEventListener("click", () => startQuiz())
next.addEventListener("click", () => nextQuestion());

reset.addEventListener("click", () => resetquestions());

function resetquestions() {
    cnt = 0;
    marks = 0;
    answered = true;
    startQuiz();
}

function nextQuestion() {
    cnt++;
    if (cnt === quizData.length) {
        alert(`out off 4 you got ${marks}`)
        alert("question are reset");
        cnt = 0;
        marks = 0;
    }
    startQuiz();
}

function startQuiz() {
    const e = quizData[cnt];
    question.innerHTML = e.question;
    answered = true;

    options.forEach((option, idx) => {
        let key = optionKeys[idx];
        option.innerHTML = e[key];
        option.dataset.option = key;
        option.classList.remove("right");
        option.classList.remove("wrong");

    })



}

options.forEach((option, idx) => {

    option.addEventListener("click", (e) => {
        const selected = e.target.dataset.option;
        if (selected === quizData[cnt].correct) {
            marks++;
            option.classList.add("right");
        } else {
            option.classList.add("wrong");
        }

    })
})
