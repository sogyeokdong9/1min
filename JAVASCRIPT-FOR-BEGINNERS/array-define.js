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