/**
 * 66: Plus One
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res = digits.reduce((result,value)=>{
    return result+value
    },"")

    let temp = (BigInt(res)+1n).toString()
    let ans=[]
    for(let i=0;i<temp.length;i++){
        ans.push(parseInt(temp[i]))
    }
    return ans

};
// another solution
var plusOne = function (digits) {
	digits = (BigInt(digits.join("")) + 1n).toString().split("");
	digits.forEach((value, index) => {
		digits[index] = +value;
	});

	return digits;
};




// Learnings
// Int data type in js only holds 15 digits

// if you have a number that has more than 15 digits you have to use bigint or BigInt() 