// Flatten a nested array. You must account for varying levels of
// nesting.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Array.isArray()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  var counter = 0;
  
  function recursiveFind(ar) {
    for (var i = 0; i < ar.length; i++) {
      if (!Array.isArray(ar[i])) {
        result[counter] = ar[i];
        counter++;
      } else {
        recursiveFind(ar[i]);
      }
    }
  }
  
  recursiveFind(arr);  
  
  return result;
}

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
