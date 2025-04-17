const fs = require("fs");

fs.readFile("a.txt", "utf-8" , function(err, value){
console.log(value);
});


// const content = fs.readFileSync("a.txt", "utf-8");
// console.log(content);


let i=0;

for(i=0; i<100000000000; i++){
    let j=0;
    j++;
}
console.log(i);