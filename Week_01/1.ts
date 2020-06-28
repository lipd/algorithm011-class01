// 1.两数之和
// https://leetcode-cn.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] | undefined {
  const hash: { [p: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (hash[currentNum] === undefined) {
      hash[target - nums[i]] = i;
    } else {
      return [hash[currentNum], i];
    }
  }
}
