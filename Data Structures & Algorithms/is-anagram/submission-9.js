class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let obj1 = {}
        let obj2 = {} 
        for(let i = 0; i < s.length ; i++){
            
            if(obj1[s[i]]){
                obj1[s[i]]++
            }else{
                obj1[s[i]]=1
            }

        }

            for(let j = 0; j < t.length ; j++){
            
            if(obj2[t[j]]){
                obj2[t[j]]++
            }else{
                obj2[t[j]]=1
            }
        }
    for(let key1 in obj1){
        if(obj1[key1] !== obj2[key1]){
            return false
        }
    }
    return true
    }
}
