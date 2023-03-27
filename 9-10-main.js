// const arr = [1, 2, 3, 5, 6];
// console.log(arr.map((x) => x + 1));

function mapFn(arr1, callbackFn) {
  //validate
  if (!Array.isArray(arr1) || typeof callbackFn !== "function")
    return undefined;
  let newArr = [];
  //processing
  for (let i = 0; i < arr1.length; i++) {
    let number = arr1[i];
    let newNumber = callbackFn(number, i);
    newArr.push(newNumber);
  }

  return newArr;
}

console.log(mapFn([1, 2, 3], (number) => number + 1));
console.log(
  mapFn([1, 2, 3, 5, 6], (number, i) => {
    return number + 1;
  })
);
console.log(
  mapFn([1, 2, 3], (number, i) => (i % 2 === 0 ? number + 1 : number * 2))
);
