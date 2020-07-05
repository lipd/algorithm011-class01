// 前 K 个高频元素
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  nums.forEach((num) => map.set(num, map.has(num) ? map.get(num) + 1 : 1));
  return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k).map((each) =>
    each[0]
  );
}
