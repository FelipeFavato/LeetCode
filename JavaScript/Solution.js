/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hashSet = {};

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (hashSet[complement] !== undefined) {
          return [hashSet[complement], i];
      }

      hashSet[nums[i]] = i;
  }
  return [];
};