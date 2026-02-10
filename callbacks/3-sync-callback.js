const users = [
  { id: 1, name: "Mulualem" },
  { id: 2, name: "Abebe" },
];

function getuser(id, callback) {
  console.log("Fetching user data...");
  callback(id, users);
}

getuser(1, (id, users) => {
  for (const user of users) {
    if (user.id === id) {
      console.log(`user name is ${user.name} and user id is ${user.id}`);
    }
  }
});
