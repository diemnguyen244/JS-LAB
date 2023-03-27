//write function to find max
//1. for..i
//2. forEach
//3. reduce

//1 for i
function findMaxI(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// console.log(findMaxI([1, 3, 11, 5, 6]));

//2
function findMaxEach(arr) {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}
// console.log(findMaxEach([1, 3, 11, 5, 6]));

//3. reduce
function findMaxReduce(arr) {
  return arr.reduce((max, number) => (number > max ? number : max));
}
console.log(findMaxReduce([1, 3, 11, 5, 6]));
