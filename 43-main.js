function randomNumberInRange(a, b) {
  //validate
  if (a >= b) return -1;
  //processing
  const randomNumber = Math.random() * (b - a);
  //return
  return Math.round(randomNumber) + a;
}
console.log(randomNumberInRange(10, 12));
console.log(randomNumberInRange(10, 12));
console.log(randomNumberInRange(10, 12));
console.log(randomNumberInRange(10, 12));
