const { readFile, writeFile } = require("fs");

// readFile and writeFile are asynchronous methods that take a callbacks

// the first asynchronus file read method call back
readFile(
  path.join(__dirname, "..", "content", "first.txt"),
  "utf8",
  (err, result) => {
    if (err) {
      console.log(err);
    }
    const first = result;
    //the second asynchronuse file read method call back metthon
    readFile(
      path.join(__dirname, "..", "content", "subfolder", "content.txt"),
      "utf8",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        const second = result;
        // writeing the file asyncronusly to the new file or existing file
        writeFile(
          path.join(__dirname, "..", "content", "result-async.txt"),
          `Here is the result : ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
            }
          },
        );
      },
    );
  },
);
