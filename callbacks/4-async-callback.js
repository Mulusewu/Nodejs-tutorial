const users = [
  { id: 1, name: "Mulualem" },
  { id: 2, name: "Abebe" },
];

function getUserAsync(id, callback) {
  console.log("Fetching user from database...");

  // ASYNC boundary
  setTimeout(() => {
    const user = users.find((u) => u.id === id);

    if (!user) {
      // ❌ ERROR PATH
      callback(new Error("User not found"), null);
      return;
    }

    // ✅ SUCCESS PATH
    callback(null, user);
  }, 2000);
}

getUserAsync(10, (error, user) => {
  if (error) {
    console.error("ERROR:", error.message);
    return;
  }

  console.log(`User name is ${user.name}, id is ${user.id}`);
});
