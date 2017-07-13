// Write a function that takes two or more arrays and returns a new array
// of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included
// in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the
// final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Arguments object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// Array.prototype.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


function uniteUnique(arr) {
    result = [];  
    
    //push elements of first array into result
    for (var i = 0; i < arguments[0].length; i++) {
	result.push(arguments[0][i]);
    }
    
    //iterate over elements of the arguments array
    for (i = 1; i < arguments.length; i++) {
	//iterate over elements of the element of the argument array
	for (var j = 0; j < arguments[i].length; j++) {
            
            //check whether the element of the element of the element 
            //of the argument array is already present in the result array
            var alreadyPresent = false;    
            for (var k = 0; k < result.length; k++) {
		if (result[k] == arguments[i][j])
		    alreadyPresent = true;
            }
            
            //if it's not present push it into the result array
            if (!alreadyPresent)
		result.push(arguments[i][j]);
	}
    }
    
    return result;
}


// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
