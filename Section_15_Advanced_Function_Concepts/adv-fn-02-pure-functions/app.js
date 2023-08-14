function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(5, 12)); 
console.log(add(15, 12)); 

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(10));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["Reading","Sports"];

function printHobbies(h) {
  h.push("NEW HOBBY")
  console.log(h);
}

printHobbies(hobbies)
