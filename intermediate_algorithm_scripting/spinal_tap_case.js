// Convert a string to spinal case. Spinal case is
// all-lowercase-words-joined-by-dashes.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// String.prototype.replace()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  
  //IMMORAL THOUGH WORKING SOLUTION
  var result = '';
  
  for (var i = 0; i < str.length; i++) {
    if (i !== 0 && str.charAt(i) === str.charAt(i).toUpperCase() && 
                 str.charAt(i-1) !== ' ' && str.charAt(i) !== ' ' &&
                 str.charAt(i-1) !== '_' && str.charAt(i) !== '_' &&
                 str.charAt(i-1) !== '-' && str.charAt(i) !== '-' &&
                 str.charAt(i-1) === str.charAt(i-1).toLowerCase()) {
      result += '-' + str.charAt(i).toLowerCase();
    }
    else if (str.charAt(i) === ' ' || str.charAt(i) === '_')
      result += '-';
    else
      result += str.charAt(i).toLowerCase();
  }
  
  return result;
}


// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".
