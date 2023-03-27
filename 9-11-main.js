// const arr = [1, 2, 3];
// const newArr = arr.filter((x) => x > 2);
// console.log(arr.filter((x) => x > 2));
// console.log(newArr);

function filterArr(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") return undefined;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (callbackFn(number, i)) {
      newArr.push(number);
    }
  }
  return newArr;
}

console.log(filterArr([1, 2, 3], (x) => x > 3));
