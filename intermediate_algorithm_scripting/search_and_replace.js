// Perform a search and replace on the sentence using the arguments
// provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with
// (after).

// NOTE: Preserve the case of the original word when you are replacing
// it. For example if you mean to replace the word "Book" with the word
// "dog", it should be replaced as "Dog"

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Array.prototype.splice()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// String.prototype.replace()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// Array.prototype.join()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


function myReplace(str, before, after) {
  
  //turn str into array of words
  var arr = str.split(" ");  
  
  var index; //index of word to remove

  //look for before into arr
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === before)
      index = i;
  }
  
  if (/[A-Z]/.test( before[0]) ) //if before's first letter is uppercase
    //then make after's first letter uppercase and replace
    arr.splice(index, 1, after.charAt(0).toUpperCase() + after.slice(1));
  else
    arr.splice(index, 1, after);

  return arr.join(' ');
  
}


// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
