class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let set = new Set();
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        set.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                    }
                }
            }
        }
        return Array.from(set).map((item) => JSON.parse(item));
    }
}
