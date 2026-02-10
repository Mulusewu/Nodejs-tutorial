const users = require("./users");

const authenticateUser = (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );
  return user;
};

module.exports = authenticateUser;
