"use strict";

//자바스크립트는 동기적
//호이스팅이 되는 순간부터 순차적으로 실행
//호이스팅 : var, function 선언들이 자동적으로 제일 위로 올라가는 것

console.log(1);
//브라우저 API는 브라우저에게 먼저 요청한다.
setTimeout(function() {
  console.log(2);
}, 1000);
console.log(3);

//동기적 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

//비동기 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

//콜백 지옥 example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "jeong" && password === "cute") {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    if (user === "jeong") {
      onSuccess({ name: "jeong", role: "admin" });
    } else {
      onError(new Error("not found"));
    }
  }
}

const user = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

user.loginUser(
  id,
  password,
  id => {
    user.getRoles(
      id,
      user => {
        console.log(`My name is ${user.name}. My role is a ${user.role} role.`);
      },
      error => console.log(error)
    );
  },
  error => console.log(error)
);
