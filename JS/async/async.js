//async & await
//clear styles of using promise

// 1. async => promise 역할을 한다.
async function fetchUser() {
  return "jeong";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits() {
  //병렬처리...
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join("+")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
