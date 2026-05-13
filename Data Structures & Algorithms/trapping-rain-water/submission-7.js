class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0
        let r = height.length-1
        let area = 0
        let lMax = 0
        let rMax = 0
        while(l < r){
            lMax = Math.max(lMax , height[l])
            rMax = Math.max(rMax , height[r])
            if(lMax < rMax){
                area += (lMax - height[l])
                l++
            }
            else{
               area += (rMax - height[r])
                r-- 
            }
        }
        return area
    }
}
