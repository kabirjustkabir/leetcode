/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = ""
    let flag = 0

    //1- find the smallest string amongest all

    let smallestString = strs.reduce((result,str)=>{
        return result.length <= str.length ? result:str
    },strs[0])

    // 2- loop over the length of smallest String

    for(let i=0;i<smallestString.length;i++){
        let checkPrefix = strs[0][i] 
        // increase the value of flag if checkPrefix and each Item index character are same 
        strs.forEach((item,index)=>{
            if(item[i] == checkPrefix){
                flag++
            }
        })
        // if flags length is equal to given string's array length
        // else break from the loop and return the commonPrefix
        if(flag == strs.length){
            commonPrefix += checkPrefix
        }else {
			break;
		}
        flag = 0
    }
    return commonPrefix
};

// Learnings
// about reduce method 
// about forEach method

// Azim Ahmad

