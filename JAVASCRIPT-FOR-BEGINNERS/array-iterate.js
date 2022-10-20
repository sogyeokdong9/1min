'use strict';

// 🖍
// ② iterate
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for...of
// for...loop
const people = ['Adam', 'Eve', 'Seth'];

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