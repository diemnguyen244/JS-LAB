// using for...i
function createArrayInRangeV1(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
  // your code here
}
console.log(createArrayInRangeV1(2, 7));

// using Array.from()
function createArrayInRangeV2(a, b) {
  const length = b - a + 1;
  return Array.from({ length }, (x, idx) => a + idx);
  // your code here
}
console.log(createArrayInRangeV2(3, 6));
