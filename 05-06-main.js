function ratingStudent(mark) {
  if (mark > 8) {
    return "exellence";
  } else if (mark >= 7) {
    return "good";
  } else if (mark >= 4) {
    return "not good";
  }
  return "bad";
}
// console.log(ratingStudent(10));

//v2
function ratingStudent(mark) {
  if (mark < 0 || mark > 10) return "invalid";
  let result = "bad";
  if (mark > 8) result = "exellence";
  else if (mark >= 7) result = "goood";
  else if (mark >= 4) result = "not good";
  return result;
}

//v3

console.log(ratingStudent(1));
console.log(ratingStudent(5));
console.log(ratingStudent(7));
console.log(ratingStudent(9));
