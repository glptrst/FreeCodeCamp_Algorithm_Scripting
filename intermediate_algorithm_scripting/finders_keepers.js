// Create a function that looks through an array (first argument) and
// returns the first element in the array that passes a truth test
// (second argument).

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


function findElement(arr, func) {
    // array of number which pass the test
    var positives = arr.filter(func);
    
    // return first element of the array
    return positives[0];
}


// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
