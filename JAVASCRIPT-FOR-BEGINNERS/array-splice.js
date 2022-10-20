'use strict';

// 🖍
// ③ splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Array.prototype.splice()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// index 0, 1, 2, 3, 4, 5, 6, 7

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// first number is starting index
// secound number is the number of elements to remove 
numbers.splice(0,1);
console.log(numbers); // [2, 3, 4, 5, 6, 7, 8]

numbers.splice(0,3);
console.log(numbers); // [5, 6, 7, 8]