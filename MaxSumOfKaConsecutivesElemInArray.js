/*
Given an array of integers of size "n" , Calculate the maximun sum of 'K'
consecutive elements in the array

Example:

Input: arr[] = [100,200,300,400] , k = 2
Output: 700

Input: arr[] = [1,4,2,10,23,3,1,0,20], k = 4
Output: 39

Input: arr[] = [1,0,2,21,23,30,1,0,20], k = 3
Output: 74

*/

const maxSumKConsecutives = (array,k) => {
  if(!array || !Array.isArray(array)) return 'invalid'
  const length = array.length;
  let windowSum = 0;
  let windowBegin=0;
  let windowEnd=0;
  for(let i=0;i<k;i++)  {
    windowSum += array[i];
    windowEnd++;
  }

  for(let j=k;j<length;j++) {
    windowSum = Math.max(windowSum,windowSum+array[j]-array[windowBegin++])
  }

  return windowSum;

}

console.log(maxSumKConsecutives([100,200,300,400],2))
console.log(maxSumKConsecutives([1,4,2,10,23,3,1,0,20],4))
console.log(maxSumKConsecutives([1,0,2,21,23,30,1,0,20],3))