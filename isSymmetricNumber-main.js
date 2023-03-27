function isSymmetricNumber(n) {
  if (n.toString().length > 3) return -1;
  let symetrictNumber = false;
  if (n.toString().length === 1) symetrictNumber = true;
  if (n.toString().length === 2) {
    const theOnes = n % 10;
    const theTens = Math.trunc(n / 10);
    if (theOnes === theTens) symetrictNumber = true;
  }
  if (n.toString().length === 3) {
    const theOnes = n % 10;

    const theHundreds = Math.trunc(n / 100);
    if (theOnes === theHundreds) symetrictNumber = true;
  }
  return symetrictNumber;
}
console.log(isSymmetricNumber(8));
console.log(isSymmetricNumber(12));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(129));
console.log(isSymmetricNumber(797));
