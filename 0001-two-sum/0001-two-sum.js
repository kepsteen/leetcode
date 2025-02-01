/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (obj.hasOwnProperty(diff)) {
            return [i, obj[diff]]
        }
        obj[nums[i]] = i;
        
    }
    return [];
};

const test = {
    2: 0,
    7: 1,
    11: 2,
    15: 3,
}