# 1min

It takes about a minute to complete the code...

## JavaScript

### Writing to console, to a document and showing an alert box.

```js
document.write("hi there");
console.log("hi again");
alert("hi there again and again");
```

---

### Conditionals

#### Conditional statements if, else if, else

```js
let score = 59;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}
```

---

### Looping code

#### For loop

```js
const numbers = [10, 20, 30];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element * 10);
}
```

---

### Functions

#### How to declare a function and how to invoke it?

```js
function sayHello() {
  console.log('Hello');
}

sayHello();
```

#### Function parameters

```js
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(1, 2);
```

#### How does a function return a value? How to use it?

```js
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

let result = addTwoNumbers(1, 2);

console.log(result);
```

---

### Object

#### Define and access an Object

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',
  country: 'United States'
}

console.log(person.lastName, person.firstName);
```

#### How to get all object keys and values as an array?

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',
  country: 'United States'
}

const keys = Object.keys(person);
const values = Object.values(person);

console.log(person);
console.log(keys);
console.log(values);
```

---

### Array

#### How to define and access

```js
const people = ['Smith', 'Kane', 'Tom']

console.log(people[0]);
```

#### Index of an element in an array

```js
const people = ['Smith', 'Kane', 'Tom']

let indexOfTom = people.indexOf('Tom');
console.log(indexOfTom);
// index starts from 0
console.log(people[indexOfTom]);

let indexOfNoa = people.indexOf('Noa');
console.log(indexOfNoa);
// -1 means not exists
```