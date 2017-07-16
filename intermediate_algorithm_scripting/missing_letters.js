// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// String.prototype.charCodeAt()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// String.fromCharCode()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


function fearNotLetter(str) {
  //iterate over str starting from the second char
  for (var i = 1; i < str.length; i++) {
    //if there is a gap of 2 between char codes
    if (str[i].charCodeAt(0) === str[i-1].charCodeAt(0)+2) {
      //return the char which corresponds to the char code in the middle
      return String.fromCharCode(str[i].charCodeAt(0)-1);
    }
  }
  
  return undefined;
}


// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.
