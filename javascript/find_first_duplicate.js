function findFirstDuplicate(arr) {
  // type your code here
  let duplicates = new Set()
  for (let num of arr) {
    if (duplicates.has(num)) {
      return num
    }
    duplicates.add(num)
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
