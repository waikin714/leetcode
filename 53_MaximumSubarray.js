/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let minPrefixSum = 0; // not take any element case, eg: [1,2,3]
  let maxSubArraySum = nums[0]; // only one element case, eg: [1]
  for (let ind = 0; ind < nums.length; ind++) {
    sum += nums[ind];
    maxSubArraySum = Math.max(maxSubArraySum, sum - minPrefixSum); // maxSubArraySum = sum - minPrefixSum
    minPrefixSum = Math.min(minPrefixSum, sum);
  }
  return maxSubArraySum;
};

console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6, 'case 1');
console.assert(maxSubArray([1]) == 1, 'case 2');
console.assert(maxSubArray([5, 4, -1, 7, 8]) == 23, 'case 3');
console.assert(maxSubArray([-1]) == -1, 'case 4');
console.assert(maxSubArray([-2, 1]) == 1, 'case 5');
console.assert(maxSubArray([-2, -1]) == -1, 'case 6');
