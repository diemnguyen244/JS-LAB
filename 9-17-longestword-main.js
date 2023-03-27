//write function to find longest word
//for i
//for Each
//reduce

function findLongI(arr) {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i];
  }
  return longest;
}
console.log(findLongI(["fdfdsaf", "fwefgrtsvfdcfafweef"]));

//2
function findLongForEach(arr) {
  let longest = arr[0];
  arr.forEach((word) => {
    if (word.length > longest.length) longest = word;
  });
  return longest;
}
console.log(findLongForEach(["fdfdsaf", "fwefgrtsvfdcfafweef"]));

//3
function findLongReduce(arr) {
  return arr.reduce((longestword, word) =>
    word.length > longestword.length ? word : longestword
  );
}
console.log(findLongReduce(["fdfdsaf", "fwefgrtsvfdcfafweef"]));

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);
