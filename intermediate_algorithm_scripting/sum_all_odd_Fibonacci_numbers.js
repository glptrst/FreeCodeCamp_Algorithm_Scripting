// Given a positive integer num, return the sum of all odd Fibonacci
// numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every
// additional number in the sequence is the sum of the two previous
// numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2,
// 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci
// numbers less than 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair
// program. Write your own code.

// Here are some helpful links:

// Remainder
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder

function sumFibs(num) {
  var fibs = [1, 1];

  //current higher fib
  var fib = 1;
  
  //puts fibs into fibs (the last one will be bigger than num)
  for (var i = 2; fib <= num; i++) {
    fib = fibs[i-2] + fibs[i-1];
    fibs.push(fib);
  }
  
  //remove fibs which are even or biggner than num
  fibs = fibs.filter(function(el) {
    return !(el % 2 === 0 || el > num);
  });
  
  //return their sum
  return fibs.reduce( function (a,b) {return a + b;}, 0);
}


// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
