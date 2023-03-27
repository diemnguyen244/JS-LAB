function isPositiveEvenNumber(n) {
  let isvalid; //undefined
  if (n > 0 && n % 2 === 0) {
    isvalid = true;
  } else {
    isvalid = false;
  }
  return isvalid;
}
// console.log(isPositiveEvenNumber(3));

//Ex2
function isPositiveEvenNumber(n) {
  let isvalid = false;
  if (n > 0 && n % 2 === 0) {
    isvalid = true;
  }
  return isvalid;
}
// console.log(isPositiveEvenNumber(10));

//Ex3
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}
// console.log(isPositiveEvenNumber(20));

//Ex4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isPositiveEvenNumber(20));
