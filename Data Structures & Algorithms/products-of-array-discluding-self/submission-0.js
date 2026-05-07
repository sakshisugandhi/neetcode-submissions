class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (j === i) {
                    continue;
                } else {
                    product = product * nums[j];
                }
            }
            output.push(product);
        }
        return output;
    }
}
