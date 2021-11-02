function reverseString(string) {
  // type your code here
  let reversed = ''
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed += string[i]
  }
  return reversed
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
