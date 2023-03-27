//1. get the ones of the number has 3 digits
function getTheOnesOfNumber(n) {
  //validate
  const nToString = n.toString();
  if (nToString.length !== 3) return -1;
  return n % 10;
}

//2. get the tens of a number having 3 digits
function getTheTensOfNum(n) {
  const nToString = n.toString();
  if (nToString.length !== 3) return -1;
  //processing
  const thehundredsOfNum = n % 100;
  const theTenOfNum = thehundredsOfNum / 10;
  return Math.trunc(theTenOfNum);
}

//3. get the hundreds of a N having 3 digits
function getTheHundredsOfNum(n) {
  const nToString = n.toString();
  if (nToString.length !== 3) return -1;
  const takeTheHunds = n / 100;
  return Math.trunc(takeTheHunds);
}

//4.sum all digits of a num having 3 digits
function sumAllDigites(n) {
  const nToString = n.toString();
  if (nToString.length !== 3) return -1;
  const theOnes = n % 10;
  const theTens = Math.trunc((n % 100) / 10);
  const theHunds = Math.trunc(n / 100);
  return theOnes + theTens + theHunds;
}
console.log(sumAllDigites(247));
console.log(sumAllDigites(3473));
console.log(sumAllDigites(193));
