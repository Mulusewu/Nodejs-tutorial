function getData(callback) {
  console.log("Fetching data...");
  setTimeout(function () {
    const data = "Here is your data";

    callback(data);
  }, 10000);
  console.log("Data request sent");
}
getData(function (data) {
  console.log(data);
});

console.log("This will run before the data is fetched");
