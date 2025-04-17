const fs = require("fs");

let content = fs.readFileSync("demo.txt", "utf-8");
console.log(content);


// let data = content.trim().split("  ").join(" ");

let data = content.replace(/\s+/g," ").trim();


fs.writeFileSync("demo.txt", data, "utf-8");

