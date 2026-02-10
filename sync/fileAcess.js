const path = require("path");
const { readFileSync, writeFileSync } = require("fs");

const firstPath = path.join(__dirname, "..", "/content", "first.txt");

console.log(firstPath);

const first = readFileSync(firstPath, "utf8");
const content = readFileSync(
  path.join(__dirname, "..", "/content", "subfolder", "content.txt"),
  "utf8",
);

console.log(first);

console.log(content);

writeFileSync(
  path.join(__dirname, "..", "/content", "result-sync.txt"),
  `Here is the result : ${first}, ${content}`,
  { flag: "a" },
);
