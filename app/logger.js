const userAuthentication = require("./auth");

require("./granade");

const email = "john@example.com";
const password = "123";

const user = userAuthentication(email, password);

if (user) {
  console.log("authentication successful");
  console.log(user);
} else {
  console.log("authentication failed");
}
