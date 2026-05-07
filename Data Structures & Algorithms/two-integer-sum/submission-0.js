class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};
        for (let i = 0; i < nums.length; i++) {
            const value = target - nums[i];
            if (obj[value] !== undefined) {
                return [obj[value], i];
            }
            obj[nums[i]] = i;
        }
    }
}
