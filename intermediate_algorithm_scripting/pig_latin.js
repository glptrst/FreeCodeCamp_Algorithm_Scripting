// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an
// English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Array.prototype.indexOf()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// Array.prototype.push()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// Array.prototype.join()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// String.prototype.substr()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// String.prototype.split()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


function isVowel(c) {
  return (c === 'a'  ||
          c === 'e'  ||
          c === 'i'  ||
          c === 'o'  ||
          c === 'u');
}

function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) {
    return str + 'way';
  }
  else {
    var i = 0;
    var end = "";
    while (!isVowel(str.charAt(i))) {
      end += str.charAt(i);
      i++;
    }
    return str.slice(end.length, str.length) + end + 'ay';
  }
}


// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
