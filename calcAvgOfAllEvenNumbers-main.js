/*Tính trung bình cộng của các số chẳn trong mảng
Viết hàm calcAvgOfAllEvenNumbers(numberList) nhận vào là một mảng số nguyên dương.
Trả về một con số duy nhất cho biết trung bình cộng của tất cả số sẵn có trong mảng, nếu kết quả là số thực thì làm tròn về số nguyên gần nhất. */
function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let sum = 0;
  let arr = [];
  numberList.filter((number) => {
    if (number % 2 === 0) {
      arr.push(number);
    }
  });
  arr.forEach((n) => (sum += n));
  if (arr.length === 0) return 0;

  return Math.round(sum / arr.length);
}
console.log(calcAvgOfAllEvenNumbers(1)); //--> 0 vì dữ liệu đầu vào không hợp lệ
console.log(calcAvgOfAllEvenNumbers([])); //--> 0
console.log(calcAvgOfAllEvenNumbers([1])); //--> 0
console.log(calcAvgOfAllEvenNumbers([1, 2])); // --> 2
console.log(calcAvgOfAllEvenNumbers([1, 2, 4])); // --> 3 vì có 2 số chẳn 2 + 4 = 6, trung bình cộng lấy 6 / 2 = 3
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8])); // --> 5 vì có 3 số chẳn 2 + 4 + 8 = 14, trung bình cộng lấy 14 / 3 = 4.6(6), làm tròn thành 5
