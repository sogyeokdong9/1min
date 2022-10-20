'use strict';

// 🖍
// ⑤ sort: alphabetically ascending and descending
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Array.prototype.sort()

const firends = ['Seth', 'Adam', 'Eve'];
console.log(firends); // ['Seth', 'Adam', 'Eve'];
firends.sort();
console.log(firends); // ['Adam', 'Eve', 'Seth'];
firends.reverse();
console.log(firends); // ['Seth', 'Eve', 'Adam'];

// 🚒 The sorting of numbers is different from the expected value.

const classroom = [1, 20, 2, 10];
console.log(classroom); // [1, 20, 2, 10]
classroom.sort();
console.log(classroom); // [1, 10, 2, 20]
classroom.reverse();
console.log(classroom); // [20, 2, 10, 1]

// 🔑 Make compareFn
classroom.sort(compareFn);
function compareFn(a, b) {
  return a - b;
}
console.log(classroom); // [1, 2, 10, 20]


// 🖍
// ⑥ sort: sort an array of numbers

const busNo = [11, 71, 8008, 2101, 500];
busNo.sort(); // alphabetic
console.log(busNo); // [11, 2101, 500, 71, 8008 ]
busNo.sort((a, b) => a - b);
console.log(busNo); // [11, 71, 500, 2101, 8008 ]
busNo.sort((a, b) => b - a);
console.log(busNo); // [8008, 2101, 500, 71, 11 ]


// 🖍
// ⑦ sort: logic of sorting an array of numbers

const dollars= [1, 5, 100, 50, 10, 2, 20];
console.log(dollars); // [1, 5, 100, 50, 10, 2, 20]

// numeric sort
dollars.sort(compareNumber);
// sort takes a function as a parameter
function compareNumber(a, b) {
  return a - b; 
}

// or,
dollars.sort(function(a, b) {
  return a - b;
});

// or use arrow function
dollars.sort( (a, b) => a - b);
console.log(dollars); // [1, 2, 5, 10, 20, 50, 100]