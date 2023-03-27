/*Kiểm tra mảng có chứa số nguyên tố không?
Viết hàm hasPrime(numberList) nhận vào là một mảng số nguyên dương.

Trả về true nếu có ít nhất một số nguyên tố, ngược lại trả về false*/

//  for...i
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
function hasPrimeV1(numberList) {
  if (!Array.isArray(numberList)) return false;
  let result = false;
  for (let i = 0; i < numberList.length; i++) {
    if (isPrime(numberList[i])) result = true;
  }
  return result;
}
// console.log(hasPrimeV1([67, 77, 89, 90, 113]));
// console.log(hasPrimeV1([67, 68, 69]));
// console.log(hasPrimeV1([4, 6, 8, 90, 112]));
// console.log(hasPrimeV1([1, 2, 3, 4, 5]));
// console.log(hasPrimeV1([7, 6, 8, 90, 112]));

// console.log(hasPrimeV1([7, 11]));
// console.log(hasPrimeV1([53, 59]));

//  forEach
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList)) return false;
  let primeNumber = 0;

  numberList.forEach((num) => {
    if (isPrime(num)) primeNumber++;
  });
  return primeNumber > 0;
}
// console.log(hasPrimeV2([67, 77, 89, 90, 113]));
// console.log(hasPrimeV2([67, 68, 69]));
// console.log(hasPrimeV2([4, 6, 8, 90, 112]));
// console.log(hasPrimeV2([7, 11]));
// console.log(hasPrimeV2([53, 59]));

//  find

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList)) return false;
  let result = false;
  if (numberList.find(isPrime)) result = true;
  return result;
}
// console.log(hasPrimeV3([67, 77, 89, 90, 113]));
// console.log(hasPrimeV3([67, 68, 69]));
// console.log(hasPrimeV3([4, 6, 8, 90, 112]));
// console.log(hasPrimeV3([7, 11]));
// console.log(hasPrimeV3([53, 59]));

//  findIndex
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList)) return false;
  if (numberList.findIndex(isPrime) >= 0) return true;
  return false;
}
// console.log(hasPrimeV4([67, 77, 89, 90, 113]));
// console.log(hasPrimeV4([67, 68, 69]));
// console.log(hasPrimeV4([4, 6, 8, 90, 112]));
// console.log(hasPrimeV4([7, 11]));
// console.log(hasPrimeV4([53, 59]));

//  some
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList)) return false;
  return numberList.some(isPrime);
}

console.log(hasPrimeV5([67, 77, 89, 90, 113]));
console.log(hasPrimeV5([67, 68, 69]));
console.log(hasPrimeV5([4, 6, 8, 90, 112]));
console.log(hasPrimeV5([7, 11]));
console.log(hasPrimeV5([53, 59]));
