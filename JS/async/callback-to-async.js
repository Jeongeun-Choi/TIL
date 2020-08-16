class UserStorage {
  async loginUser(id, password) {
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

  async getRoles(user) {
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

async function introduce() {
  const roles = await user.loginUser(id, password);
  const result = await user.getRoles(roles);
  return result;
}

introduce().then(role =>
  console.log(`My name is ${role.name}. My role is a ${role.role}.`)
);
