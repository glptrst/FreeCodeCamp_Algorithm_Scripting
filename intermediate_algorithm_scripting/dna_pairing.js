// The DNA strand is missing the pairing element. Take each character,
// get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the
// provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G",
// "C"]]

// The character and its pair are paired up in an array, and all the
// arrays are grouped into one encapsulating array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Array.prototype.push()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// String.prototype.split()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


function pairElement(str) {
    var split = str.split(''); 
    
    var result = [];
    
    for (var i = 0; i < split.length; i++) {
	var pair = [];
	pair.push(split[i]);
	if (split[i] === 'A') {
	    pair.push('T'); 
	} else if (split[i] === 'T') {
	    pair.push('A');    
	} else if (split[i] === 'C') {
	    pair.push('G');     
	} else if (split[i] === 'G') {
	    pair.push('C'); 
	}
	result.push(pair);
    }
    
    return result;
}


// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
