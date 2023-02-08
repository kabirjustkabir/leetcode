//2114. Maximum Number of Words Found in Sentences
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords= 0
    for(let i=0;i<sentences.length;i++){
        let arrSentences = sentences[i].split(" ");
        if(arrSentences.length>maxWords){
            maxWords= arrSentences.length
        }
    }
    return maxWords
};


// learnings
//convert string into array using string.split() metohd

// Azim Ahmad
