var _ = require('lodash');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let result = [];
    let ind = 0;
    k %= nums.length;
    for(ind = 0; ind < k; ind ++){
        let oriInd = nums.length - k + ind;
        const elet = nums[oriInd];
        result.push(elet);
    }
    
    for(ind = 0; ind < nums.length - k; ind++){
        const elet = nums[ind];
        result.push(elet);
    }
     for(ind = 0; ind < nums.length; ind++){
        nums[ind] = result[ind];
    }
};

// best solution
// original array: [1234ABC], k = 3
// first step: CBA4321
// step 2: ABC4321
// step 3: ABC1234
// public void rotate(int[] nums, int k) {
//     k %= nums.length;
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
// }

// public void reverse(int[] nums, int start, int end) {
//     while (start < end) {
//         int temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     }
// }


// prepare
let caseInd = 0;
let nums = [];

// start
nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.assert(_.isEqual(nums, [5,6,7,1,2,3,4]), `case ${caseInd++}`);

nums =  [-1,-100,3,99];
rotate(nums, 2);
console.assert(_.isEqual(nums, [3,99,-1,-100]), `case ${caseInd++}`);

nums = [-1];
rotate(nums, 2);
console.assert(_.isEqual(nums, [-1]), `case ${caseInd++}`);

nums = [1, 2];
rotate(nums, 3);
console.assert(_.isEqual(nums, [2,1]), `case ${caseInd++}`);

