class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < numbers.length - 1) {
            if (i == j) {
                i++;
                j = numbers.length - 1;
            } else if (numbers[i] + numbers[j] !== target) {
                j--;
            } else if (numbers[i] + numbers[j] === target && numbers[i] !== numbers[j]) {
                return [i + 1, j + 1];
            }
        }
    }
}
