// Modules -- Every file is a module in nodejs. these are encapsulated code

// importing
// with destructuring
const { john, peter } = require("./4-names");
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
// console.log(names);
// console.log(data);

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

// //
// sayHi(john);
// sayHi(peter);

// if a function is importing, it will automatically run without assigning
require("./7-mind-grenade");
