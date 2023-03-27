function printNumber() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumber();

//2. print even number
function printEvenNumber() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvenNumber();

//3..print Even number less than N
function printEvenNumberN(n) {
  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}
printEvenNumberN(13);
