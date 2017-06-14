// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Boolean Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function bouncer(arr) {
  return arr.filter(function(value){
    if (value === false)
      return false;
    if (value === null)
      return false;
    if (value === 0)
      return false;
    if (value === "")
      return false;
    if (value === undefined)
      return false;
    if (typeof value !== "string")
      if (isNaN(value))
        return false;
    
    return true;
  });
}


// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
