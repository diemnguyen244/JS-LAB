/*Kiểm tra mảng có phải tất cả đều là số hoàn hảo không?
Viết hàm isAllPerfectNumbers(numberList) nhận vào mảng số nguyên dương.

Trả về true nếu tất cả đều là số hoàn hảo, ngược lại trả về false.*/

// for...i: return false if found number is not perfect
function isPerfect(n) {
  if (n < 1 || !Number.isInteger(n)) return false;
  let sum = 0;
  let result = false;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum == n) result = true;
  return result;
}
// console.log(isPerfect(6));
// console.log(isPerfect(10));
// console.log(isPerfect(11));
// console.log(isPerfect(28));
// console.log(isPerfect(79));
// console.log(isPerfect(99));

function isAllPerfectNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfect(numberList[i])) return false;
  }
  return true;
}
// console.log(isAllPerfectNumbersV1([])); //--> false
// console.log(isAllPerfectNumbersV1([1, 6])); //--> false vì 1 không phải là số hoàn hảo
// console.log(isAllPerfectNumbersV1([1, 2, 3])); //--> false
// console.log(isAllPerfectNumbersV1([6])); //true vì 6 là số hoàn hảo
// console.log(isAllPerfectNumbersV1([6, 28]));

/*reduce: check if the number of perfect numbers is equal to length*/
// optional: you can practice more to use forEach or filter :)

function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let totalPerfectNum = numberList.reduce((accumenlator, num) => {
    if (isPerfect(num)) {
      return accumenlator + 1;
    }
  }, 0);
  if (totalPerfectNum === numberList.length) return true;
  return false;
}

console.log(isAllPerfectNumbersV2([])); //--> false
console.log(isAllPerfectNumbersV2([1, 6])); //--> false vì 1 không phải là số hoàn hảo
console.log(isAllPerfectNumbersV2([1, 2, 3])); //--> false
console.log(isAllPerfectNumbersV2([6])); //true vì 6 là số hoàn hảo
console.log(isAllPerfectNumbersV2([6, 28]));
console.log(isAllPerfectNumbersV2([28]));
console.log(isAllPerfectNumbersV2([28, 496]));
console.log(isAllPerfectNumbersV2([28]));

// every
function isDevisor(n) {
  if (n < 1 || !Number.isInteger(n)) return false;
  let sum = 0;
  let result = false;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  if (sum === n) result = true;
  return result;
}
function isAllPerfectNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.every(isDevisor);
}
// console.log(isAllPerfectNumbersV3([])); //--> false
// console.log(isAllPerfectNumbersV3([1, 6])); //--> false vì 1 không phải là số hoàn hảo
// console.log(isAllPerfectNumbersV3([1, 2, 3])); //--> false
// console.log(isAllPerfectNumbersV3([6])); //true vì 6 là số hoàn hảo
// console.log(isAllPerfectNumbersV3([6, 28]));
// console.log(isAllPerfectNumbersV3([28]));
// console.log(isAllPerfectNumbersV3([28, 496]));
// console.log(isAllPerfectNumbersV3([28]));
