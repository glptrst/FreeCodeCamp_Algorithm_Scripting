// Return an array consisting of the largest number from each provided
// sub-array. For simplicity, the provided array will contain exactly 4
// sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and
// access each member with array syntax arr[i].

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Comparison Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

function largestOfFour(arr) {
  //arr to store the largest numbers
  var result = [];
  //iterate over arrays in the array
  for (var i = 0; i < arr.length; i++) {
    //store largest num of the subarray
    var largest = 0;
    //iterate over numbers of the subarray
    for (var j = 0; j < arr[i].length; j++) {
      if ( arr[i][j] > largest)
        largest = arr[i][j];
    }
    //push the num into the result array
    result.push(largest);
  }
  
  return result;
}


// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
