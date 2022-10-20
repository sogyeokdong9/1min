'use strict';

// 🖍
// ④ flat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// Array.prototype.flat()

const array1 = [1, 2, [3]];
console.log(array1);  // [1, 2, [3]]
console.log(array1.length); // 3
console.log(array1[0]); // 1
console.log(array1[1]); // 2
console.log(array1[2]); // [3]

const array2 = array1.flat();
console.log(array2);  // [1, 2, 3]

const array3 = [1, [2, [3]]];
console.log(array3);  // [1, [2, [3]]]
console.log(array3.length); // 2
console.log(array3[0]); // 1
console.log(array3[1]); // [2, [3]]
console.log(array3[1][0]);  // 2
console.log(array3[1][1]);  // [3]
console.log(array3[array3.length-1]); // [2, [3]]

const array4 = array3.flat();
console.log(array4);  // [1, 2, [3]]

const array5 = array3.flat(2);
console.log(array5);  // [1, 2, 3]

const array6 = [1, [2, [3, [4]]]];
console.log(array6);  // [1, [2, [3, [4]]]]
console.log(array6.length); // 2

const array7 = array6.flat(Infinity);
console.log(array7);  // [1, 2, 3, 4]

console.log(array7.flat()); // [1, 2, 3, 4]

const array8 = [1, 2, , 4];
console.log(array8);  // [1, 2, , 4]
console.log(array8.length); // 4

// remove empty slots using falt()
const array9 = array8.flat();
console.log(array9);  // [1, 2, 4]
console.log(array9.length); // 3