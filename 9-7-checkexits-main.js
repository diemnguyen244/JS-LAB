//every
const arr = [2, 5, 2];
// console.log(arr.every((x) => x % 2 === 0));

//v2
function isEvenArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return false;
  }
  return true;
}
// console.log(isEvenArr([2, 4, 6]));

//SOME
console.log(arr.some((x) => x % 2 === 0));
//v2
function isSomeEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return true;
  }
  return false;
}
console.log(isSomeEven([2, 5, 6]));

//indexof
console.log(arr.indexOf(2));

//lastindexof
console.log(arr.lastIndexOf(2));

//includes
console.log(arr.includes(5));
