class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let k = ""
       for(let i = 0 ; i < strs.length ; i++){
           k+=strs[i];
           k+="-"
       }
       return k
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const j = str.split('-')
        j.pop()
        return j
    }
}
// class Solution {
//     encode(strs) {
//         let res = "";

//         for (let s of strs) {
//             res += s.length + "#" + s;
//         }

//         return res;
//     }

//     decode(str) {
//         let res = [];
//         let i = 0;

//         while (i < str.length) {
//             let j = i;

//             // find the delimiter '#'
//             while (str[j] !== '#') {
//                 j++;
//             }

//             let length = parseInt(str.substring(i, j));
//             let word = str.substring(j + 1, j + 1 + length);

//             res.push(word);

//             i = j + 1 + length;
//         }

//         return res;
//     }
// }