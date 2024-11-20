
// local module
const { add, a } = require("./local-1");
const { add: add2, a: a2 } = require("./local-2");

console.log(add(a, 20));
console.log(add2(a2, 10, 30));


// build in module 
const path = require("path");

console.log(path.dirname("/F:/Millstone 2/Node/index.js"));
console.log(path.parse("/F:/Millstone 2/Node/index.js"));
console.log(path.join("/F:/Millstone 2/Node/", "index.js"));