// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?

// Với n thoả điều kiện 1 < n < 1000

// Trả về true nếu đúng, ngược lại trả về false
//Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.

//[1,2,3,n]
//sum1+2+3=n
function isPerfectNumber(n) {
  if (n < 1 || (n > 1000 && !n.isInteger())) return false;
  //   let sum = 0;
  let result = false;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum == n) result = true;
  return result;
}
console.log(isPerfectNumber(1));
console.log(isPerfectNumber(2));
console.log(isPerfectNumber(4));
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(16));
console.log(isPerfectNumber(24));
console.log(isPerfectNumber(12));
console.log(isPerfectNumber(36));
