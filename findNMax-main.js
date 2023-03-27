function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;
  let maxDigitN = 0;
  let theNumsofN = n.toString().length;
  if (theNumsofN === 1) maxDigitN = n;
  if (theNumsofN === 2) {
    let theOnes = n % 10;
    let theTens = Math.trunc(n / 10);
    if (theOnes >= theTens) maxDigitN = theOnes;
    if (theOnes < theTens) maxDigitN = theTens;
  }
  if (theNumsofN === 3) {
    let theOnes = n % 10;
    let theTens = Math.trunc((n % 100) / 10);
    let theHundreds = Math.trunc(n / 100);
    if (theOnes >= theTens && theOnes >= theHundreds) maxDigitN = theOnes;
    if (theTens > theOnes && theTens > theHundreds) maxDigitN = theOnes;

    if (theHundreds > theOnes && theHundreds > theTens) maxDigitN = theHundreds;
  }
  return maxDigitN;
}
console.log(getMaxDigit(1));
console.log(getMaxDigit(0));
console.log(getMaxDigit(-8));
console.log(getMaxDigit(24));
console.log(getMaxDigit(33));
console.log(getMaxDigit(189));
console.log(getMaxDigit(888));
