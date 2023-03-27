function getRandomNumber(n) {
  if (n <= 0) return -1;
  const random = Math.random() * n;
  return Math.round(random);
}
console.log(getRandomNumber(-3));
console.log(getRandomNumber(2));
console.log(getRandomNumber(2));
console.log(getRandomNumber(2));
console.log(getRandomNumber(2));
