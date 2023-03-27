// Using loop from 2 to n - 1
function isPrimeV1(n) {
  // your code here}
  if (n < 2 && n > 1000) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// console.log(isPrimeV1(13));
// console.log(isPrimeV1(2));
// console.log(isPrimeV1(4));
// console.log(isPrimeV1(17));
// console.log(isPrimeV1(7));

// Using loop from 2 to square root of n
function isPrimeV2(n) {
  // your code here
  if (n < 2 || n > 1000) return false;
  let sqrtN = Math.trunc(Math.sqrt(n));
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrimeV2(13));
console.log(isPrimeV2(2));
console.log(isPrimeV2(4));
console.log(isPrimeV2(17));
console.log(isPrimeV2(7));
console.log(isPrimeV2(16));
