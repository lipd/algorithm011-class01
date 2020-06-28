// 283. 移动零
// 原题链接：https://leetcode-cn.com/problems/move-zeroes/
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== count) {
        nums[count] = nums[i];
        nums[i] = 0;
      }
      count++;
    }
  }
}
