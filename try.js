function sum(name, ...numberList) {
  console.log(name);
  return numberList.reduce((sum, number) => sum + number, 0);
}
const numberList = [2, 3, 4];
console.log(...numberList);
