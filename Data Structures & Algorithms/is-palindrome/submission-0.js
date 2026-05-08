class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.replace(/[^a-zA-Z0-9]/g, "");
        let secondString = "";
        for (let i = string.length - 1; i >= 0; i--) {
            secondString += string[i];
        }
        if (string.toLowerCase() == secondString.toLowerCase()) {
            return true;
        }
        return false;
    }
}
