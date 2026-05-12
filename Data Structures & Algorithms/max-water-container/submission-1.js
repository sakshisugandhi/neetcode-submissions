class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let i = 0;
        let j = heights.length - 1;
        while (i < j) {
            let currentArea = Math.min(heights[i], heights[j]) * (j - i);
            maxArea = Math.max(currentArea, maxArea);
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxArea;
    }
}
