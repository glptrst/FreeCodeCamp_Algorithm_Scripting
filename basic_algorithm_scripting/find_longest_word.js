// Find the Longest Word in a String 
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.prototype.split()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// String.length
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

function findLongestWord(str) {
  // turn the string into an array of words
  var arr = str.split(" ");
  // variable to keep the longest lenght
  var longest = 0;
  // iterate over each word in the array and update longest
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest)
      longest = arr[i].length;
  }
  
  return longest;
}


// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
