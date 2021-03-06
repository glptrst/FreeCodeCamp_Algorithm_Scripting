// Make a function that looks through an array of objects (first
// argument) and returns an array of all objects that have matching
// property and value pairs (second argument). Each property and value
// pair of the source object has to be present in the object from the
// collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last:
// "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt",
// last: "Capulet" }], and the second argument is { last: "Capulet" },
// then you must return the third object from the array (the first
// argument), because it contains the property and its value, that was
// passed on as the second argument.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Global Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Object.prototype.hasOwnProperty()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

// Object.keys()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);

  var toBePushed;
  
  for (var i = 0; i < collection.length; i++) {
    toBePushed = true;
    for (var j = 0; j < sourceKeys.length; j++) {
      if (collection[i].hasOwnProperty(sourceKeys[j])){
        if (collection[i][sourceKeys[j]] === source[sourceKeys[j]])
          ;
        else
          toBePushed = false;
      } else
        toBePushed = false;
    }
    if (toBePushed)
      arr.push(collection[i]);
  }
  
  
  
  // Only change code above this line
  return arr;
}


// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
