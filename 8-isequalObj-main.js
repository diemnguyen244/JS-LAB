// Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về:

// true nếu số lượng keys của 2 objects bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh)

// ngược lại là false

// Ví dụ:

function isEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
console.log(isEqual({}, {}));
//--> true

console.log(isEqual({ name: "Bob" }, { name: "Alice" }));
//--> false

console.log(isEqual({ name: "Bob" }, { name: "Bob" })); //--> true

console.log(isEqual({ name: "Bob" }, { name: "Bob", age: 18 }));
//--> false
