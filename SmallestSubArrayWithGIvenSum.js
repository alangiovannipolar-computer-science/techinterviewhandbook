/*
Reference: https://leetcode.com/problems/minimum-size-subarray-sum/

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Examples

Input: arr[] = [2,4,6,10,2,1] k = 12
Output: 2

Input: arr[] = [4,2,2,7,8,1,2,8,10], k = 8
Output: 1

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2

Input: target = 4, nums = [1,4,4]
Output: 1

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/

const smallestSubArrayWithGivenSum = (array,sum) => {
  if(!array || !Array.isArray(array)) return 'invalid'

  let length = array.length;
  let minWindowSize = Number.MAX_SAFE_INTEGER;
  let windowSum = 0;
  let windowBegin = 0;
  let windowEnd = 0;

  for(let i=0;i<length;i++) {
    windowSum += array[windowEnd++]
    while(windowSum>=sum) {
     minWindowSize = Math.min(minWindowSize,windowEnd - windowBegin);
     windowSum -= array[windowBegin++];
    }
  }

  return minWindowSize!=Number.MAX_SAFE_INTEGER?minWindowSize:0;

}

console.log(smallestSubArrayWithGivenSum([2,4,6,10,2,1],12))
console.log(smallestSubArrayWithGivenSum([4,2,2,7,8,1,2,8,10],8))
console.log(smallestSubArrayWithGivenSum([2,3,1,2,4,3],7))
console.log(smallestSubArrayWithGivenSum([1,1,1,1,1,1,1,1],11))


