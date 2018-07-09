// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
// find the one that is missing from the array.


var missingNumber = function(nums) {
    nums.sort(function(a, b){
      return a - b;
    });
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != i) return i;
    }
    return nums.length;
};
console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));