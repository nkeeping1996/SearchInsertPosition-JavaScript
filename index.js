/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    
    if(nums[nums.length-1]<target){
        return nums.length;
    }
    
    for(let i = 0; 0 < nums.length; i++){
        if(nums[i]==target || nums[i]>target){
            return i;
        }
    }
    
};

const nums = [2,4,5,6];
const target = 4;
console.log(searchInsert(nums, target));