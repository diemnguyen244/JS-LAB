const student = {};
student.name = "EF";
student.age = 18;
console.log(student);

//
const students = {
  name: "Ef",
  age: 18,
};
console.log(students);

//
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({}));
console.log(isEmptyObject({ name: "diem" }));

//

function calcAvgMark(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum / Object.keys(obj).length;
}
console.log(calcAvgMark({ math: 10, eng: 8 }));
