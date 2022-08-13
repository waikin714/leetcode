var _ = require('lodash');
/**
 * hint approach
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes1(nums) {
  let nonZeroArr = [];
  let zeroArr = [];
  for (let ind = 0; ind < nums.length; ind++) {
    const cur = nums[ind];
    if (cur == 0) {
      zeroArr.push(cur);
    } else {
      nonZeroArr.push(cur);
    }
  }
  nums = [...nonZeroArr, ...zeroArr];
  return nums;
}

function moveZeroes2(nums) {
  let ind = 0;
  for (ind = 0, nonZeroInd = -1; ind < nums.length; ind++) {
    const ele = nums[ind];
    if (ele == 0) {
      if (nonZeroInd == -1) {
        nonZeroInd = ind + 1;
      }

      // find the next nonZero number
      for (; nonZeroInd < nums.length && nums[nonZeroInd] == 0; nonZeroInd++) {
        nums[ind] = nums[nonZeroInd];
      }

      if (nonZeroInd >= nums.length) {
        // it already is the status we want
        break;
      }
      // exchange
      nums[ind] = nums[nonZeroInd];
      nums[nonZeroInd] = 0;
    }
  }
  return nums;
}

let nums = [];
nums = [0, 1, 0, 3, 12];
moveZeroes2(nums);
console.assert(_.isEqual(nums, [1, 3, 12, 0, 0]), 'case 1');

nums = [0, 0, 0];
moveZeroes2(nums);
console.assert(_.isEqual(nums, [0, 0, 0]), 'case 1.1');

nums = [0, -1, 0];
moveZeroes2(nums);
console.assert(_.isEqual(nums, [-1, 0, 0]), 'case 1.3');

nums = [0];
moveZeroes2(nums);
console.assert(_.isEqual(nums, [0]), 'case 2');
