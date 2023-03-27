//1. check if a number is odd/even
//odd:
function isOddNumber(n) {
  return n % 2 === 0;
}

//even
function isEvenNumber(n) {
  return n % 2 !== 0;
}

//2.if a number divisible by 5

function isDivisibleByFive(n) {
  return n % 5 === 0;
}
// console.log(isDivisibleByFive(11));
// console.log(isDivisibleByFive(5));

//3. is a perfect square number
function isPerfectSquareNumber(n) {
  //validate
  if (n <= 0) return -1;
  //processing
  const sqrtN = Math.sqrt(n);
  const sqrtInt = Math.trunc(sqrtN);
  //return
  return sqrtInt * sqrtInt === n;
}
console.log(isPerfectSquareNumber(3));
console.log(isPerfectSquareNumber(9));
console.log(isPerfectSquareNumber(12));
console.log(isPerfectSquareNumber(49));
console.log(isPerfectSquareNumber(22));
console.log(isPerfectSquareNumber(81));
