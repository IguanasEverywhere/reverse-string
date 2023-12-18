function reverseString(str) {
  // create blank reversed string
  // iterate over str from end to beginning
    // for each character, append character to reversed str
  // return reversed string

  let reversedStr = "";
  for (let i=str.length-1; i >= 0; i--) {
    reversedStr += str[i]
  }

  return reversedStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
