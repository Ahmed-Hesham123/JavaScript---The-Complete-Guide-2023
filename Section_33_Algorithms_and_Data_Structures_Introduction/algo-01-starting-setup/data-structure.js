const age = [30, 20, 54];

// [30, 29, 54] => [30, 29, 54, _]
// [0, 1, 2] => [0, 1, 2, 3]
age.push(60); // Constant Time Complexity: O(1)

// [30, 29, 54] => [_, 30, 29, 54]
// [0, 1, 2] => [0, 1, 2, 3]
age.unshift(10); // => Linear Time Complxity: O(n)

const myAge = age[1]; // => Constant Time Complexity: O(1)

//  ----

const namePopularity = [
  { userName: "Ahmed", usages: 5 },
  { userName: "Hesham", usages: 6 },
];

const heshamUsages = namePopularity.find(
  (pers) => pers.userName === "Hesham"
).usages;
// BEST CASE: Constant Time Complexity => O(1)
// WORST CASE: Linear Time Complexity => O(n)
// AVERAGE CASE: Linear Time Complexity => O(n)

const nameMap = {
    "Ahmed": 5,
    "Hesham": 6
};

const heshamUsages2 = nameMap["Hesham"]; // Constant Time Complexity: O(1)

console.log(heshamUsages2);

// const nameRealMap = new Map();
