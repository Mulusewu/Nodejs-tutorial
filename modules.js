const names = require("./moduleExports");

const sayHi = (name) => {
  console.log(`hello how are you ${name}`);
};

sayHi(names.john);
sayHi(names.peter);
