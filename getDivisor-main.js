// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  // your code here
  let arrDivisor = [];
  if (n < 1 || (n > 1000 && !n.isInteger())) return false;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arrDivisor.push(i);
    }
  }
  return arrDivisor;
}
// console.log(getDivisorListV1(1));
// console.log(getDivisorListV1(5));
// console.log(getDivisorListV1(6));
// console.log(getDivisorListV1(12));
// console.log(getDivisorListV1(20));

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  // your code here
  if (n < 1 || (n > 1000 && !n.isInteger())) return false;
  const length = n;
  const newArr = Array.from({ length }, (x, index) => index + 1);
  return newArr.filter((number) => n % number === 0);
}
console.log(getDivisorListV2(1));
console.log(getDivisorListV2(5));
console.log(getDivisorListV2(6));
console.log(getDivisorListV2(12));
console.log(getDivisorListV2(20));

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
// function getDivisorListV3(n) {
//   if (n < 1 || (n > 1000 && !n.isInteger())) return false;
//   const arr= []
//   const length=n
//   const numberList=Array.from({length},(x,index)=> index+1)
//    numberList.forEach((number)=>{if(n%number===0{arr.push(number,n/number)}
