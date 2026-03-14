//Array -> num
//variable  -> Target  return Array of indices
/*Constarints : 2 <= nums.length <= 10^4
                -10^9 <= nums[i] <= 109
                -10^9 <= target <= 10^9 */
//Pattern : Hashtable

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const prevMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;
  }

  if (prevMap.has(complement)) {
    return [prevMap.get(complement), i];
  }
  prevMap.set(currentNum, i);
};
