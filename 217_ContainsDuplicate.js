/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for(let ind = 0; ind < nums.length; ind++){
        const num = nums[ind];
        if(set.has(num)) return true;
        set.add(num); 
    }
    return false;
};
