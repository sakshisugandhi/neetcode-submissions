// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     longestConsecutive(nums) {
//         const sortedArray = [...new Set(nums.sort((a, b) => a - b))];
//         if (sortedArray.length === 1 || sortedArray.length === 0) {
//             return sortedArray.length;
//         }
//         let maxCount = 0;
//         let count = 0;
//         for (let i = 0; i < sortedArray.length; i++) {
//             if (
//                 sortedArray[i + 1] - sortedArray[i] === 1 &&
//                 sortedArray[i] - sortedArray[i - 1] === 1
//             ) {
//                 count++;
//             } else if (
//                 sortedArray[i] - sortedArray[i - 1] === 1 &&
//                 sortedArray[i + 1] - sortedArray[i] !== 1
//             ) {
//                 count++;
//             } else if (
//                 sortedArray[i] - sortedArray[i - 1] !== 1 &&
//                 sortedArray[i + 1] - sortedArray[i] === 1
//             ) {
//                 if (count > maxCount) {
//                     maxCount = count;
//                 }
//                 count = 1;
//             } else {
//                 if (count > maxCount) {
//                     maxCount = count;
//                 }
//                 count = 0;
//             }
//         }
//         if (maxCount > count) {
//             return maxCount;
//         } else if (count === 0) {
//             return count + 1;
//         } else {
//             return count;
//         }
//     }
// }
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length === 0) {
            return 0;
        }

        const sortedArray = [...new Set(nums.sort((a, b) => a - b))];

        let maxCount = 1;
        let count = 1;

        for (let i = 1; i < sortedArray.length; i++) {

            if (sortedArray[i] === sortedArray[i - 1] + 1) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 1;
            }
        }

        return Math.max(maxCount, count);
    }
}
