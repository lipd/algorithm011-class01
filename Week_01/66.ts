// 66. 加一
// 原题链接：https://leetcode-cn.com/problems/plus-one/
function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    if (sum >= 10) {
      digits[i] = sum - 10;
      carry = 1;
    } else {
      digits[i] = sum;
      carry = 0;
      break;
    }
  }
  if (carry === 1) digits = [1].concat(digits);
  return digits;
}
