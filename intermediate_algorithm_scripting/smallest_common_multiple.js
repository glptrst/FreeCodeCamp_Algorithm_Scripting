// Find the smallest common multiple of the provided parameters that
// can be evenly divided by both, as well as by all sequential numbers
// in the range between these parameters.

// The range will be an array of two numbers that will not necessarily
// be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and
// 3 that is evenly divisible by all numbers between 1 and 3.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Smallest Common Multiple
// https://www.mathsisfun.com/least-common-multiple.html


function smallestCommons(arr) {
    var min;
    var max;
    var range = [];
    var found = false;

    // create range
    if (arr[0] < arr[1]) {
	min = arr[0];
	max = arr[1]; 
    } else { 
	min = arr[1];
	max = arr[0]; 
    }

    for (var i = min; i <= max; i++) {
	range.push(i);
    }
    
    // iterate over possible smallest common multiple numbers
    for (var tested = max; found === false; tested++) {
	found = true; 
	// divide (remainder) each of them by the numbers in the array
	for (var index = 0; index < range.length; index++) {
	    // if one of the division gives a remainder different than 0
	    if (tested % range[index] !== 0) {
		found = false;
		// pass to the next number
		break;
	    }
	}
    } 
    
    tested--; 
    return tested; 
}


// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.
