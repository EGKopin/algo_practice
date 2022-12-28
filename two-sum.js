/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/


const twoSum = (arr, target) => { 
//if not sorted, sort
//use caching... based on the difference
  const cache = {}

  for (let element of arr){
    const difference = target - element

    if (cache[difference]) return true //if there is a value in the cache that would be the perfect difference, add that
    cache[element] = true; //otherwise, add the element into the cache
  }
  return false;
}

const arr = [1, 4, 6, 12, 9];
const arr2 = [1, 4, 7, 2, 9, 0];

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 
//this requires two loops still
//sort the arr
//no cache, uses 3 pointers
  //pointer1 = i is first element
  //pointer2 = j is second element
  //pointer3 = k is last element
arr.sort((a,b) => a - b); //sorts original array, but could/should make copy
for (let i = 0; i < arr.length; i++){
  let j = i + 1;
  let k = arr.length - 1

    while(j < k){
      if (arr[i] + arr[j] + arr[k] === target) return true;
      if (arr[i] + arr[j] + arr[k] < target) j += 1; //increments j, which will be reset in the for loop
      else k -= 1;
    }
  }
  return false;
}





module.exports = { twoSum, threeSum };