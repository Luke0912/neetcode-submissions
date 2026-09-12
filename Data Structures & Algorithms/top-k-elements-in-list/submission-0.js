class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        let res = []
        for(let i = 0 ; i < nums.length ; i++){
            if(obj[nums[i]]){
                obj[nums[i]]++
            }else{
                obj[nums[i]]=1
            }
        }
        const sorted = Object.keys(obj).sort((a,b)=>{
            return obj[b]-obj[a]
        })
        for (let j = 0 ; j < k ; j++){
            res.push(sorted[j])
        }
        return res
    }
}

