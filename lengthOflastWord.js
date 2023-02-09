// 58 : Length of Last Word
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal 
substring
 consisting of non-space characters only
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().replace(/\s+/g,' ').split(" ")
    return arr[arr.length-1].length
};

// Learnings 

// String.trim() 
// The trim() method removes whitespace from both sides of a string.

// The trim() method does not change the original string.

// Use JavaScript’s string.replace() method with a regular expression to remove extra spaces. The dedicated RegEx to match any whitespace character is \s. Expand the whitespace selection from a single space to multiple using the \s+ RegEx.

// Combine the string.replace() method and the RegEx and replace it with a single string. Notice the starting and ending spaces will be kept and stripped down to a single space. Trim any surrounding spaces from the string using JavaScript’s string.trim() method:



// Here’s a short overview of what the regular expression does:

//     \s: matches any whitespace symbol: spaces, tabs, and line breaks
//     +: match one or more of the preceding tokens (referencing \s)
//     g: the g at the end indicates iterative searching throughout the full string

//Azim Ahmad
