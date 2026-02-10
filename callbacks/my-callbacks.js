const doingSomething = (value) => {
  console.log(`Doing something with ${value}`);
};

const done = (value) => {
  doingSomething(value);
};
doingSomething(6);

setTimeout(function () {
  done(5);
}, 2000);

const myNumbers = [1, -20, -5, 12, 13, 23, -25, -67, 100];

const posNum = removeNegNum(myNumbers, (x) => x >= 0);
console.log(posNum);
function removeNegNum(numbers, callbacks) {
  const array = [];

  for (const x of numbers) {
    if (callbacks(x)) {
      array.push(x);
    }
  }
  return array;
}
