//콜백 지옥 example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "jeong" && password === "cute") {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "jeong") {
          resolve({ name: "jeong", role: "admin" });
        } else {
          reject(new Error("not found"));
        }
      });
    }, 2000);
  }
}

const user = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

user
  .loginUser(id, password)
  .then(user.getRoles)
  .then(userRole => console.log(`${userRole.name}, role is a ${userRole.role}`))
  .catch(console.log);
