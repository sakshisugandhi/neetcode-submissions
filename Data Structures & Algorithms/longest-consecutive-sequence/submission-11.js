class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedArray = [...new Set(nums.sort((a, b) => a - b))];
        if (sortedArray.length === 0) {
            return 0;
        }
        let maxCount = 0;
        let count = 1;
        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] == sortedArray[i - 1] + 1) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 1;
            }
        }
        return Math.max(maxCount, count);
    }
}
