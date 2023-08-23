// FS module

const { readFileSync, writeFileSync } = require("fs");
// same as fs.readFileSync

// utf-8 is encoding parameter
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first);

// if file is not there node will create a new file and if file is there node will overwrite that file
// flag : "a" will append the file in previous one
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
