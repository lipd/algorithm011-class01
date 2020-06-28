// 88. 合并两个有序数组
// 原题链接：https://leetcode-cn.com/problems/merge-sorted-array/
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let inserPos = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[inserPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
}
