function factorial(n) {
    if (n < 0) return NaN; // Handle invalid input
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  function factorial(n) {
    if (n < 0) return NaN; // Handle invalid input
    return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
  }
  function factorial(n) {
    if (n < 0) return NaN;
    return Array.from({ length: n }, (_, i) => i + 1)
      .reduce((acc, val) => acc * val, 1);
  }
  console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(-2)); // Output: NaN
   