class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const newS = s.split("").sort().join("");
        const newT = t.split("").sort().join("");
        const count = new Array(26).fill(0);

        if (newS === newT) {
            return true;
        }
        return false;
    }
}
