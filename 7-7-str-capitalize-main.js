function transform(string) {
  if (string === "") return "";
  const firstLetter = string[0].toUpperCase();
  const restLetter = string.slice(1).toLowerCase();
  return `${firstLetter}${restLetter}`;
}
console.log(transform("easy Frontend"));
console.log(transform(""));
console.log(transform("bi Frontend"));
console.log(transform("diem Frontend"));
console.log(transform("ABC"));
