function compareNumbers(a, b) {
  const parseIntA = parseInt(a);
  const parseIntB = parseInt(b);
  if (parseIntA > parseIntB) return 1;
  if (parseIntA === parseIntB) return 0;
  if (parseIntA < parseIntB) return -1;
}

console.log(compareNumbers(2, 4));
console.log(compareNumbers(-3, 2));
console.log(compareNumbers(2, 0));
console.log(compareNumbers(0, 0));
