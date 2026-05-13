class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = 0;
        let area = 0;
        for (let i = 0; i < height.length; i++) {
            leftMax = Math.max(leftMax, height[i]);
            if (i == 0 || i == height.length - 1) {
                continue;
            }
            let rightMax = 0;
            for (let j = height.length - 1; j > i; j--) {
                rightMax = Math.max(rightMax, height[j]);
            }
            let water = Math.min(leftMax, rightMax) - height[i];
            if (water > 0) {
                area += water;
            }
        }
        return area;
    }
}
