function sumUp(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Linear Time Complexity => O(n)

console.log(sumUp([1, 2, 3, 4, 5])); // 15
