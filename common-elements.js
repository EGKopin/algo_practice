/* 12.28.22

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
//takes in multiple arrays with numbers and strings
  //declare empty array for results
  //add all values into an object cache
  //iterate through object and if the value is the args.length, add to results
//return new array or if new array is empty "Nothing in Common!"
  const results = [];
  const cache = new Map()
  const allElements = args.flat()

  while (allElements.length){
    if (!cache.has(allElements[0])){
      cache.set(allElements[0], 1)
    }
     else {
      cache.set(allElements[0], cache.get(allElements[0])+1)
    }
    allElements.shift()
  }
  
  for (let element of cache.entries()){
    if (element[1] === args.length) results.push(element[0])
  }

  if (results.length === 0) return 'Nothing in Common!'
  return results;
}

let arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
let arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
let arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

console.log(commonElements(arr1, arr2, arr3))
/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
//just do the same but flattening it first, which is O(n)
}

module.exports = {commonElements, commonElementsOptimized} 