function getUniqueWords(sentence) {
  if (sentence.length === 0) return [];

  const newArr = sentence.trim().split(" ");
  console.log(newArr);
  const uniqueWord = Array.from(new Set(newArr));

  return uniqueWord;
}
console.log(getUniqueWords("frontend is easy but easy to die"));
