'use strict';

// 🖍 
// ① access & find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Array.prototype.indexOf()
const people = ['Adam', 'Eve', 'Seth'];

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
