/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/
  //sort in place, finding the smallest value and putting at first index
  //iterate through given array
    //use Math.min(...arr), removing already used indexes using .slice(i, array.length)
    //use deconstructing to move them?
      //-Tried that, but it says i can't declare things before initialized. Hoisting issue?
  //return array

  const selectionSort = array => {
  for (let i = 0; i < array.length; i++){
    let currArrVals = array.slice(i, array.length)
    
    const minVal = Math.min(...currArrVals)
    const minInd = currArrVals.findIndex((element) => element === minVal)
    const prevVal = array[i]
    array[i] = minVal
    array[minInd+i] = prevVal
  }
  return array;
};

const arr = [7,1,1,7]
console.log(selectionSort(arr))


/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = array => {
  
};