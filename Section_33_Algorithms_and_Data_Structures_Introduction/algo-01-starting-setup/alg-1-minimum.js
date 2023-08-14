// BEST CASE: [5] => O(1)
// WORST CASE: [3, 1] => O(n)

function getMin(numbers) { // [3, 1, 2]
  if (!numbers.length) { // 1 execution
    throw new Error("Should not be an empty array!");
  }
  if (numbers.length === 1) {
    return numbers[0];
  }
  let currentMinimum = numbers[0]; // 1 execution
  console.log("EXECUTION - INIT");

  for (let i = 1; i < numbers.length; i++) { // 1 execution
    console.log("EXECUTION - FOR");
    const el = numbers[i];
    if (currentMinimum > el) { // 2 executions
      currentMinimum = numbers[i]; // 1 execution
    }
  }

  console.log("EXECUTION - RETURN");
  return currentMinimum; // 1 execution
}

// T = n => Linear Time Complexity => O(n)

// BEST CASE: [1, 2, 3] => O(n^2)
// WORST CASE: [3, 2, 1] => O(n^2)
// AVERAGE CASE: [?, ?, ?] => O(n^2)
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error("Should not be an empty array!");
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i]; // n times
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j]; // n times

      if (outerElement > innerElement) {
        // Swap
        numbers[i] = innerElement;
        innerElement[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0];
}

// Time Complexity => n * n => O(n^2)

const testNumbers = [3, 1, 2];

const min = getMin(testNumbers);
const min2 = getMin2(testNumbers);

console.log(min);
console.log(min2);
