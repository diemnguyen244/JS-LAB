function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  const subStr = str.slice(0, maxlength - 1);
  if (str.length > maxlength) return `${subStr}\u2026`;
}
console.log(truncate("fhdjs fdhsa", 4));
console.log(truncate("easy Frontend", 3));
console.log(truncate("eas", 3));
