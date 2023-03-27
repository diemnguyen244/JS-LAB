function cloneObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

const studentA = { name: "Bob", math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentB.math);
