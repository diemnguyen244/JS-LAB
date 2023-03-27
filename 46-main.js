//1.convert hours to seconds
function convertHourstoSeconds(hours) {
  //validate
  if (hours <= 0) return -1;
  const secondsperhours = 3600;
  return hours * secondsperhours;
}
// console.log(convertHourstoSeconds(2));

//2.find max a,b,c
function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
// console.log(findMax(2, 10, 5));

//2. find max even number
function findEvenMaxNumber(a, b, c) {
  let max = a;
  if (a < 0 || a % 2 !== 0) max = -1;
  if (b > max && b % 2 === 0) max = b;
  if (c > max && c % 2 === 0) max = c;
  return max;
}

console.log(findEvenMaxNumber(6, 3, 5));
console.log(findEvenMaxNumber(5, 29, 100));
console.log(findEvenMaxNumber(4, -1, 3));
console.log(findEvenMaxNumber(-8, 0, -4));
