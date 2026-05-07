class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const frequency = map.get(nums[i]);
            console.log(frequency, "ff");
            if (frequency === undefined) {
                map.set(nums[i], 1);
            } else {
                map.set(nums[i], frequency + 1);
            }
        }
        const bucket = new Array(nums.length + 1).fill().map(() => []);
        for (const key of map.keys()) {
            const frequency = map.get(key);
            bucket[frequency].push(key);
        }
        const resultArray = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i] !== 0) {
                resultArray.push(...bucket[i]);
            }
        }
        return resultArray.slice(0, k);
    }
}

