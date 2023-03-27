//1. calculate the area of retangle;

function calcAreaOfRetangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}

//2. calculate perimeter of retangle
function calcPerimeterOfRetangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return (a + b) * 2;
}

//3. area of circle
function calcAreaOfCircle(r) {
  if (r <= 0) return -1;
  return Math.PI * r * r;
}

console.log(calcAreaOfCircle(-1));
console.log(calcAreaOfCircle(3));
