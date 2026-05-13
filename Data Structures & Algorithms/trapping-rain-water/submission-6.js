class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftArray = new Array(height.length).fill(0);
        let rightArray = new Array(height.length).fill(0);
        let area = 0;
        leftArray[0] = height[0];
        rightArray[rightArray.length - 1] = height[height.length - 1];
        for (let i = 1; i < height.length; i++) {
            leftArray[i] = Math.max(leftArray[i - 1], height[i]);
        }
        for (let i = height.length - 2; i >= 0; i--) {
            rightArray[i] = Math.max(rightArray[i + 1], height[i]);
        }
        for (let i = 0; i < height.length; i++) {
            let water = Math.min(leftArray[i], rightArray[i]) - height[i];
            area += water;
        }
        return area;
    }
}
