"use strict";

//1. state (성공, 실패) : pending => fulfilled or rejected
//2. producer와 consumer의 차이를 이해하자

//1. Producer
//새로운 promise를 만들때는 executor가 <자동>으로 실행된다!!
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("jeong");
    reject(new Error("no network"));
  }, 2000);
});

//2. Consumers: then, catch, finally
promise
  .then(value => {
    alert(`What a pretty ${value}!`);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log("finally"));

//3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));

//인자를 하나씩 받아오면 생략해도 된다.
getHen()
  .then(getEgg)
  .catch(error => {
    return "🍞";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
