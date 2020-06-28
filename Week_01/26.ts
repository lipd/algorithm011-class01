// 26. 删除排序数组中的重复项
// 原题链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}
