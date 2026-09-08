class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        for(let i = 0 ; i < strs.length ; i++){
            let sortedString = strs[i].split("").sort().join("")
            // for( let j = 0 ; j < sortedString.length ; j++){
            //     if(obj[sortedString[j]]){
            //         obj[sortedString[j]]++
            //     }else{
            //         obj[sortedString[j]]=1
            //     }
            // }
            if(obj[sortedString]){
                obj[sortedString].push(strs[i])
            }else{
                obj[sortedString] = [strs[i]]
            }
        }
        return Object.values(obj)
    }
}
