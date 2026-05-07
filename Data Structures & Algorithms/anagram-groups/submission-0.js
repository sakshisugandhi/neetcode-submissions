class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for (let i = 0; i < strs.length; i++) {
            const sortedWord = strs[i].split("").sort().join("");
            if (obj[sortedWord] === undefined) {
                obj[sortedWord] = [strs[i]];
            } else {
                obj[sortedWord].push(strs[i]);
            }
        }
        const values = Object.values(obj);
        return values;
    }
}
