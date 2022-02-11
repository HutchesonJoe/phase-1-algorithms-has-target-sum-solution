function hasTargetSum(array, target){
  const seenNumbers = {}

  for (const number of array){
    const comp = target - number;
    if(comp in seenNumbers) return true;
    seenNumbers[number] = true
  }
  return false
}

/* 
Runtime: O(n) 
Space: 0(n)
*/



function hasTargetSum(array, target){
  const seenNumbers = {}

  for (const number of array){
    const comp = target - number;
    if(comp in seenNumbers) return true;
    seenNumbers[number] = true
  }
  return false
}

/* 
for each item in the array
    add number to the remaining items in the array
    compare each sum to the target number
    if the numbers are equal
      return true*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
