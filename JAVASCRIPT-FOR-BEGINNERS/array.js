'use strict';

// 🖍 
// ⓪ Arry vs Object: how to define and access
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Array

// array & object
const people = ['Adam', 'Eve', 'Seth'];
const person = {
  name: 'Adam',
  surname: 'Bucan'
}
console.log(people[0]); // 'Adam'
console.log(person.name); // 'Adam'
console.log(person['surname']); // 'Bucan'


// 🖍 
// ① access & find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Array.prototype.indexOf()

console.log(people[0]); // 'Adam'
console.log(people[1]); // 'Eve'
console.log(people[2]); // 'Seth'

// indexOf: index strarts from 0
let indexOfAdam = people.indexOf('Adam');
console.log(indexOfAdam); // 0
let indexOfEve = people.indexOf('Eve');
console.log(indexOfEve);  // 1
let indexOfSeth = people.indexOf('Seth');
console.log(indexOfSeth); // 2

console.log(people[indexOfAdam]); // 'Adam'
console.log(people[indexOfEve]);  // 'Eve'
console.log(people[indexOfSeth]); // 'Seth'

// -1 means not exists
let indexOfNoah = people.indexOf('Noah');
console.log(indexOfNoah); // -1
console.log(people.length); // array length: 3
console.log(people[people.length - 1]); // last element: 'Seth'


// 🖍
// ② iterate
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for...of
// for...loop

for (let i = 0; i < people.length; i++) {
  let element = people[i];
  console.log(element); // Adam, Eve, Seth
}

// for...each
people.forEach(element => {
  console.log(element); // Adam, Eve, Seth
});

// for...each(Define function)
people.forEach(call);

function call(people) {
  console.log(people) // Adam, Eve, Seth 
}

// for...each(Display index) 
people.forEach( (element, index) => {
  console.log(`${index}: ${element}`);  // 0: Adam, 1: Eve, 2: Seth
});

// for...each(Define function)
people.forEach(printValue);

function printValue(element, index) {
  console.log(`${index}: ${element}`);  //0: Adam, 1: Eve, 2: Seth
}


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
