
const fs = require("fs");


let data = "hey billu bakchod tum to kar hi nhi payega chal kar kai  dikha";


fs.writeFileSync("a.txt", data, "utf-8");

console.log("done!");

const content = fs.readFileSync("a.txt", "utf-8");
console.log(content);