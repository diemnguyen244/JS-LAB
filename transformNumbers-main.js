/**Biến đổi mảng với f(i) = f(i-1) + f(i + 1)
Viết hàm transformNumbers(numberList) để biến đổi các số hiện tại của mảng numberList thành các số mới theo công thức.
f(i) = f(i - 1) + f(i + 1) với i là index
Tạm dịch nôm na là phần tử ở vị trí i sẽ bằng tổng của 2 phần tử bên cạnh.
Trường hợp đầu mảng và cuối mảng sẽ bằng phần tử liền kề.
Trường hợp mảng có ít hơn một phần tử thì sẽ giữ nguyên, không biến đổi.
Lưu ý: mảng trả về là một mảng mới, không phải là mảng truyền vào nhé! */
// using for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return 0;
  if (numberList.length <= 1) return [...numberList];
  let arr = [...numberList];
  for (let i = 0; i < numberList.length; i++) {
    arr[i] =
      numberList[i - 1] + numberList[i + 1] ||
      numberList[i - 1] ||
      numberList[i + 1];
  }
  return arr;
}
// console.log(transformNumbersV1([2, 4, 6, 8]));
// using forEach()
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return 0;
  let arr = [];
  if (numberList.length <= 1) return Array.from(numberList);
  numberList.forEach((number, i) => {
    const leftNum = numberList[i - 1] || 0;
    const rightNum = numberList[i + 1] || 0;
    arr.push(leftNum + rightNum);
  });
  return arr;
}
// console.log(transformNumbersV2([2, 4, 6, 8]));
// console.log(transformNumbersV2([2, 4]));

// using map()
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return 0;
  let arr = [];
  if (numberList.length <= 1) return Array.from(numberList);
  numberList.map((number, i) => {
    const leftNum = numberList[i - 1] || 0;
    const rightNum = numberList[i + 1] || 0;
    arr.push(leftNum + rightNum);
  });
  return arr;
}
console.log(transformNumbersV3([2, 4, 6, 8]));
console.log(transformNumbersV3([2, 4]));
