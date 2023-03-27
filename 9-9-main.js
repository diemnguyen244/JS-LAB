//find()
//v1
function firstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  let firstEven = undefined;
  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (number % 2 === 0) return number;
  }
  return firstEven;
}

// console.log(firstEven([2, 4, 6, 7, 8]));

//v2
function firstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return numberList[i];
  }
  return undefined;
}

// console.log(firstEven([8, 4, 6, 7, 8]));

//v3

function firstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackFn(number)) {
      return number;
    }
  }
  return undefined;
}
function isEven(number) {
  return number % 2 === 0;
}

// console.log(firstEven([8, 4, 6, 7, 8], isEven));
// console.log(
//   firstEven([8, 4, 6, 7, 8], function (number) {
//     return number % 2 === 0;
//   })
// );
// console.log(firstEven([8, 4, 6, 7, 8], (number) => number % 2 === 0));

//findindex
//1
function findIndexEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return i;
  }
  return undefined;
}
console.log(findIndexEven([9, 4, 6, 7, 8]));

//2
function findIndexEven2(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return i;
  }
  return undefined;
}
console.log(findIndexEven2([9, 4, 6, 7, 8]));

//3
function findIndexEven3(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackFn(number)) return i;
  }
  return undefined;
}

function indexEven(x) {
  return x % 2 === 0;
}
console.log(findIndexEven3([9, 4, 6, 7, 8], indexEven));
