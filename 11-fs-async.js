const { readFile, writeFile } = require("fs");

const data = readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  const first = data;
  readFile("./content/first.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    const second = data;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, data) => {
        if (err) {
          throw err;
        }
        console.log(data);
      }
    );
  });
});

// difference between sync and async
