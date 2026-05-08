class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedArray = [...new Set(nums.sort((a, b) => a - b))];
        if (sortedArray.length === 1 || sortedArray.length === 0) {
            return sortedArray.length;
        }
        let maxCount = 0;
        let count = 0;
        for (let i = 0; i < sortedArray.length; i++) {
            if (
                sortedArray[i + 1] - sortedArray[i] === 1 &&
                sortedArray[i] - sortedArray[i - 1] === 1
            ) {
                count++;
            } else if (
                sortedArray[i] - sortedArray[i - 1] === 1 &&
                sortedArray[i + 1] - sortedArray[i] !== 1
            ) {
                count++;
            } else if (
                sortedArray[i] - sortedArray[i - 1] !== 1 &&
                sortedArray[i + 1] - sortedArray[i] === 1
            ) {
                if (count > maxCount) {
                    maxCount = count;
                }
                count = 1;
            } else {
                if (count > maxCount) {
                    maxCount = count;
                }
                count = 0;
            }
        }
        if (maxCount > count) {
            return maxCount;
        } else if (count === 0) {
            return count + 1;
        } else {
            return count;
        }
    }
}
