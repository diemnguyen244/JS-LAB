function removeVowel(str) {
  if (str === "") return "";
  return str

    .replace("u", "")
    .replace("e", "")
    .replace("o", "")
    .replace("a", "")
    .replace("i", "")
    .trim();
}
console.log(removeVowel("jello"));
console.log(removeVowel("diemkhung"));
console.log(removeVowel("biheo"));
console.log(removeVowel("obiheo"));
console.log(removeVowel("ibiheo"));
