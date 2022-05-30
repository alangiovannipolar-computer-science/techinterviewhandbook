/*
Given a string s, find the length of the longest substring without repeating characters.

 Examples:

 Input: S = "abcabcbb"
 Output: 3

 Input: S = "pwwkew"
 Output: 3

 Input: s = "bbbbb"
 Output: 1


*/

const getLongestSubtring = (s) => {
  let windowStart = 0
  let windowEnd = 0
  let longestSubstringLength = Number.MIN_VALUE;
  let stringSet = new Set();

  while(windowEnd < s.length) {
    if(!stringSet.has(windowEnd)) {
      stringSet.add(s[windowEnd]);
      windowEnd++
      longestSubstringLength = Math.max(longestSubstringLength,stringSet.size)
    }else {
       stringSet.delete(s[windowStart])
       windowStart++
    }
  }

 return longestSubstringLength;

}

console.log(getLongestSubtring("abcabcbb"))