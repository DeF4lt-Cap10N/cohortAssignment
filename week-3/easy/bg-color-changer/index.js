const bg = document.querySelectorAll(".bg");
const body = document.querySelector("body");

bg.forEach((e)=>{
    e.addEventListener("click", function main(event){
        console.log(event);
        body.style.background = event.target.id;
        event.target.style.background = event.target.id;
    })
})