# 1min

It takes about a minute to complete the code...

## JavaScript

### defer

#### HTML script defer attribute

```html
<body>
  <script src="defer.js" defer></script>
  <h1>HTML script defer attribute</h1>
  <button id="tester">test the script</button>
  <!-- 
    defer.js
    <script>
      tester.onclick = writeToConsole;
      function writeToConsole() {
        console.log('It works');
      }
    </script>
  -->
</body>
```

- https://developer.mozilla.org/ko/docs/Web/HTML/Element/script#attr-defer

---

### Clean code

#### Clean code example, bad code vs good code, naming variables

```js
let t = 'Fish';
// t? X
let type = 'Fish';
// type? X
let animaltype = 'Fish'; // bad X
let animal_type = 'Fish'; // bad X
let ANIMALTYPE = 'Fish'; // bad X
let ANIMAL_TYPE = 'Fish'; // bad X
let animalType = 'Fish'; // Good: Use loverCamelCase 👍

let yB = 1982; // bad X
let yearOfBirth = 1982; // Good 👍

const pi = 3.14; // bad X
const PI = 3.14; // Good 👍

const DEFAULT_PLAYBACK_SPEED = 3.14; // Good 👍
const defaultPlaybackSpeed = getDefaultPalybackSpeed(usetID); // Good 👍

let pending = true; // bad X
let is_pending = true; // bad X
let isNotPending = false; // bad X
let isPending = true; // Good 👍
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

---

### Writing to console, to a document and showing an alert box.

```js
document.write("hi there");
console.log("hi again");
alert("hi there again and again");
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/write
- https://developer.mozilla.org/en-US/docs/Web/API/console/log
- https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

#### console.log for multiple arguments at once

```js
function car(make, model) {
  this.make = make;
  this.model = model;
}

const hisCar = new car('Maserati', 'A6');
const yourCar = new car('Audi', 'A3');
const myCar = new car('BMW', 'X7');

console.log(hisCar, yourCar, myCar);
```

- https://developer.mozilla.org/en-US/docs/Web/API/console/log

#### console.dir vs console.log

```js
const array = [1, 2, 3];
const object = {
  name: 'Smith',
  surname: 'Adam'
};

console.dir(array);
console.dir(object);

console.log(array);
console.log(object);
```

- https://developer.mozilla.org/en-US/docs/Web/API/console/dir
- https://developer.mozilla.org/en-US/docs/Web/API/console/log

---

### Template Literals

```html
<body>
  <h1>Template Literals</h1>
  <div id="userInfo"></div>
  <script>
    const person = {
      name: 'Smith',
      age: 18,
      country: 'United States'
    }

    let info = `
    User name is ${person.name}.
    He is ${person.age} years old.
    He is from ${person.country}.
    `

    userInfo.innerText = info;
    document.body.style.backgroundColor = 'yellowGreen';
    document.body.style.color = 'white';
    document.body.style.textAlign = 'center';
  </script>  
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

---

### Operator & Boolean

#### Logical AND operator, OR operator. Booleans true and false

```js
write(1 == 1);

// AND operator, OR operator
write(1 == 1 && 2 > 2);

// AND operator, OR operator
write(1 == 1 || 2 > 2);

write(true && false);
write(true || false);

write(true && true);
write(true || true);

write(false && false);
write(false || false);

function write(text) {
  console.clear();
  console.log(text);
}
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality

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

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

#### Switch Case Example

```js
let text = 'What do you do?';

console.log(text);

switch (text) {
  case 'Hello!':
    console.log('Hi!');
    break;
  case 'How are you?':
    console.log('Nice thanks');
    break;
  case 'What do you do?':
    console.log('Writing codes');
    break;
  default:
    console.log('I did not understand');
    break;
}
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

#### Switch Case, multiple cases

```js
let text = `How's your day?`;

console.log(text);

switch (text) {
  case `How's everything?`:
  case `How are things?`:
  case `How's life?`:
    console.log('not bad');
    break;
  case `How's your day?`:
  case `How's your day going?`:
    console.log(`It's going well`);
    break;
  default:
    console.log('I did not understand');
    break;
}
```
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#taking_advantage_of_fall-through

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

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

#### JavaScript for loop (Do you really know it?)

```js
// 'let' is block-level scope.
for (var j = 0; j < 3; j++) {
  console.log(j); // 0 1 2
}
console.log(j); // i is not defined.

// 'var' is fuction-level scope
for (let i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}
console.log(i); // 3
```

- https://developer.mozilla.org/en-US/docs/Glossary/Scope
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block#description
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#description
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#description

#### for...in statement

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',
  country: 'United States'
}

for(let property in person) {
  console.log(person[property]);
  console.log(`${property}: ${person[property]}`);
}
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

### for...of statement

```js
const members = ['Smith', 'Kane', 'Tom'];

for (const member of members) {
  console.log(member);
}
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of

---

### Functions

#### How to declare a function and how to invoke it?

```js
function sayHello() {
  console.log('Hello');
}

sayHello();
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

#### Function parameters

```js
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(1, 2);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#function_parameters
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

#### How does a function return a value? How to use it?

```js
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

let result = addTwoNumbers(1, 2);

console.log(result);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

#### regular functions and arrow functions

```js
// regular function
// let sum = function(a, b) {
//   return a + b;
// }
// covert to arrow function
let sum = (a, b) => a + b;

let result = sum(2, 3);
console.log(result);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

---

### Object

#### Object Constructor

```js
function car(make, model) {
  this.make = make;
  this.model = model;
}

const yourCar = new car('Audi', 'A3');
console.log(`Your cas is ${yourCar.make} ${yourCar.model}`);

const myCar = new car('BMW', 'X7');
console.log(`Your cas is ${myCar.make} ${myCar.model}`);
```

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor


#### Define and access an Object

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',
  country: 'United States'
}

console.log(person.lastName, person.firstName);
```

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object

#### JAVASCRIPT OBJECTS: Function inside an object called method

```js
const city = {
  name: 'Seoul',
  population: 9450768,
  isBeautiful: true,
  getInfo: function() {
    return `${city.name} ${city.population}`;
  }
};

console.log(city.getInfo());

// add another method

city.says = function() {
  return `Welcome to ${this.name}`;
}

console.log(city.says());

// or add like this

city.says = welcome;

function welcome() {
  return `Welcome to ${this.name}`;
}

console.log(city.says());
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

#### JAVASCRIPT OBJECTS: What is property, key value pair, bracket notation and . dot notation

```js
const country = {};
console.log(typeof country);

const person = {
  lastName: 'Smith',  // a property
  firstName: 'John',  
  // key: value pair
  'last seen': '22/2/2022'
  // multi-word property name
}
// using bracket notation
console.log(person['last seen']);
// . dot notation
console.log(person.firstName);
```

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors

#### JAVASCRIPT OBJECTS: How to get all object values (all properties values) as an array?

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',
  country: 'United States'
}

const values = Object.values(person);

console.log(person);
console.log(values);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

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
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

#### Objects, multi-word property names

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',
  'last seen': '22/2/2022'
}
console.log(person.firstName);
console.log(person['last seen']);
```

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties

#### Object.create() Method

```js
// Object literal
const yourCar = {
  make: 'Audi',
  model: 'A3',
  fullName: function() {
    return this.make + ' ' + this.model;
  }
};

const myCar = Object.create(yourCar);
      myCar.make = 'BMW';
      myCar.model = 'X7';

console.log(yourCar.fullName());
console.log(myCar.fullName());
```
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

#### How to add new property and how to change a value

```js
const person = {
  name: 'Smith'
}
console.log(person);

// add new property
person.birthYear = 2022;
console.log(person);

// change value
person.birthYear = 2021;
console.log(person);
```

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

#### JAVASCRIPT OBJECTS: How to access property using dynamic name?

```js
const city = {
name: 'Seoul'
};

let dynamicName = 'name';
console.log(city[dynamicName]);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties

#### JAVASCRIPT OBJECTS: How to add property using dynamic name?

```js
const city = {
name: 'Seoul'
};

// add new property using dynamic name
let propertyName = 'district';
city[propertyName] = ['Dobong District', 'Dongdaemun District'];
console.log(city.district);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties


#### Objects, dynamic property names

```js
//object literal
const city = {
  name: 'Seoul'
};

// access property using dynamic name
let dynamicName = 'name';
console.log(city[dynamicName]);

// add new property using dynamic name
let propertyName = 'district';
city[propertyName] = ['Dobong District', 'Dongdaemun District'];
console.log(city.district);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties

#### How to iterate over object properties

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',  
  age: 28
}

for (const property in person) {
  console.log(property + ': ' + person[property]);
}
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

#### Converting object to array and array back to object

```js
const person = {
  lastName: 'Smith',
  firstName: 'John'
}

// Object to Array
const keyAndValues = Object.entries(person);
console.log(keyAndValues);

// Array to Object
const object = Object.fromEntries(keyAndValues);
console.log(object);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

#### JAVASCRIPT OBJECTS: How to remove a property from an object

```js
const person = {
  lastName: 'Smith',
  firstName: 'John',  
  'last seen': '22/2/2022'
}
// using bracket notation
delete person['last seen'];
// . dot notation
delete person.lastName;

console.log(person);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

---

### Array

#### How to define and access

```js
const people = ['Smith', 'Kane', 'Tom']

console.log(people[0]);
```

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

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

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

#### Using splice to remove array elements

```js
const numbers = [1, 2, 3, 4, 5];
      // index  0  1  2  3  4
console.log(numbers);

numbers.splice(0, 3);
console.log(numbers);
// first number is starting index
// secound number is the number of elements to remove
```
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

#### How to sort an array of numbers?

```js
const numbers = [1, 100, 4, 10];
console.log(numbers);
numbers.sort();
console.log(numbers); // alphabetic
numbers.sort((a, b) => a - b); 
console.log(numbers); // descending
numbers.sort((a, b) => b - a);
console.log(numbers); // ascending
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

#### Sorting an array alphabetically ascending and descending order

```js
const array = ['Smith', 'Kane', 'Tom'];
// const array = [1, 100, 4, 10];
// Sort in an unexpected order.
console.log(array);
array.sort();
console.log(array);
array.reverse();
console.log(array);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

#### Logic of sorting an array of numbers

```js
const numbers = [1, 100, 4, 10];
console.log(numbers);
numbers.sort();
console.log(numbers); // alphabetic

// numeric sort
numbers.sort(compareNumbers);
// sort takes a functon as a parameter
function compareNumbers(a, b) {
  return a - b;
}
// or
numbers.sort(function(a, b) {
  return a - b;
})
// or use arrow function
numbers.sort((a, b) => a - b);
console.log(numbers);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

#### Array forEach() Method

```js
const members = ['Smith', 'Kane', 'Tom'];

members.forEach(call);

function call(member) {
  console.log(`Hey ${member}. Are you okay?`);
}
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

---
### String

#### get nth character of a string, first char and last char

```html
<body>
  <div id="myDiv">1234567890</div>
  <script>
    let str = document.getElementById('myDiv').innerText;
    console.log(str);
    
    let firstChar = str.charAt(0);
    console.log(firstChar);
    let seventhChar = str.charAt(6);
    console.log(seventhChar);
    let lastChar = str.at(-1);
    console.log(lastChar);

    // or

    console.log(str[0]);
    console.log(str[6]);
    console.log(str[str.length - 1]);
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

#### String, startsWidth endsWith includes charAt indexOf lastIndexOf search

```js
let text = 'Hi there hi';
// index 012345789
// string  H(0)i(1)(2)t(3)h(4)e(5)r(6)e(7)(8)h(9)i(10)
let result;

result = text.startsWith('Hi');
result = text.startsWith('Hi');
result = text.endsWith('Hi');
result = text.endsWith('hi');
result = text.endsWith('there', 8);
// 8 firset character ends whit 'there'
result = text.includes('There');
result = text.includes('there');
result = text.charAt('0');
result = text.indexOf('h');
result = text.indexOf('hi');
result = text.indexOf('there');
result = text.lastIndexOf('h');
result = text.lastIndexOf('h');
result = text.search('there');
console.log(result);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

#### How to get the last word in a text in different ways

```html
<body>
  <h1>How to get the last word in a text in different ways</h1>
  <div id="target">How to get the last word in a text in different ways</div>
  <script>
    let lastWord = getLastWord(target.innerText);
    console.log(lastWord);

    function getLastWord(text) {
      const words = text.split(' ');
      console.log(words);
      let indexOfTheLastWord = words.length - 1;
      // index starts frome 0 1 2 ... 
      return words[indexOfTheLastWord];
    }

    function getLastWord(text) {
      return text.split(' ').pop();
    }

    function getLastWord(text) {
      const array = text.split(' ');
      return array[array.length - 1];
    }

    function getLastWord(t) {
      return t.substring(t.lastIndexOf(' ') + 1);
    }
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

#### Alphabet Array

```js
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = alphabet.split('');
// literal
console.log(alphabet);
console.log(alphabetArray);
// index
console.log(alphabet[0]);
console.log(alphabetArray[0]);
// lindex
console.log(alphabet.charAt(25));
console.log(alphabetArray[25]);
// last element
console.log(alphabetArray.at(-1));
console.log(alphabet.charAt(alphabet.length - 1));
// length
console.log(alphabet.length);
console.log(alphabetArray.length);

let alphabetUpperCase = alphabet.toLocaleUpperCase();
const alphabetUpperCaseArray = alphabetUpperCase.split('');

console.log(alphabetUpperCase);
console.log(alphabetUpperCaseArray);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

---

### Date

#### Get current month name using months array and using toLocalString() method

```js
let date = new Date();
let month = date.getMonth();
console.log(month);
// month start from 0 1 2 3 ...

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentMonthName = monthNames[month];

// or... toLocaleString

currentMonthName = date.toLocaleString('default',{month:'long'});
console.log(currentMonthName);
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

---

## Web API

### Document & HTMLElement & Element

#### innerText & innerHTML. Change the text of an HTML div element

```html
<body>
  <div id="div1"></div>
  <div id="div2"></div>
  <div id="div3"></div>
  <div id="div4"></div>
  <script>
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    const div4 = document.getElementById("div4");

    div1.innerText = 'innerText';
    div2.innerText = '<strong>innerText</strong>';
    div3.innerHTML = 'innerHTML';
    div4.innerHTML = '<strong>innerHTML</strong>';
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

#### How to read and change title of an HTML document using JS?

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How to read and change title of an HTML document using JS?</title>
</head>
<body>
  <h1>How to read and change title of an HTML document using JS?</h1>
  <script>
    console.log(document.title);
    document.title = 'Changed title';
    console.log(document.title);
  </script>
</body>
</html>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/title

#### Change CSS of an HTML element using Javascript

```html
<body>
  <h1>Change CSS of an HTML element using Javascript</h1>
  <div id="myDiv">This is div</div>
  <script>
    console.log(myDiv);
    myDiv.style.backgroundColor = "orangered";
    myDiv.style.padding = "1em";
    myDiv.style.textAlign = "center";
    document.body.style.backgroundColor = "navy";
    document.body.style.color = "white";
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

---

### Event reference

#### HTML onclick event attribute

```html
<body>
  <h1>HTML onclick event attribute</h1>
  <input type="button" id="backgroundColorChanger" value="Change Background Color" onclick="changeBackgroundColor()">
  <script>
    function changeBackgroundColor() {
      document.body.style.backgroundColor = 'navy';
    }
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/ko/docs/conflicting/Web/API/Element/click_event

#### How to trigger a function by clicking an HTML button?

```html
<body>
  <h1>How to trigger a function by clicking an HTML button?</h1>
  <button id="tester">test it</button>
  <script>
    tester.onclick = writeToConsole;

    function writeToConsole() {
      console.log(`This is it!`);
    }
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/ko/docs/conflicting/Web/API/Element/click_event


#### How to add a class to an HTML element using JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How to add a class to an HTML element using JavaScript</title>
  <style>
    .purple { background-color: purple; color: white; }
  </style>
</head>
<body>
  <h1>How to add a class to an HTML element using JavaScript</h1>
  <input type="button" id="classAdder" value="add class" />
  <script>
    classAdder.onclick = addClass;

    function addClass() {
      document.body.classList.add('purple');
    }
  </script>
</body>
</html>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/body
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

#### getElementById & addEventListener

```html
<body>
  <h1>getElementById & addEventListener</h1>
  <input type="button" id="backgroundColorChanger" value="Change Background Color">
  <script>
    const backgroundColorChanger = document.getElementById('backgroundColorChanger');

    backgroundColorChanger.addEventListener('click', function() {
      let target = document.body;
      target.style.backgroundColor = 'navy';
    })
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style


#### How to toggle background color of a div using an HTML button

```html
<body>
  <h1>How to toggle background color of a div using an HTML button</h1>
  <input type="button" id="toggleBackgroundColor" value="Toggle Background Color">
  <div id="container">Container</div>
  <script>
    const toggleBackgroundColor = document.getElementById('toggleBackgroundColor');

    toggleBackgroundColor.addEventListener('click', function() {
      let target = document.getElementById('container');
      let background = document.body;

      if (target.style.backgroundColor === "navy" || target.style.backgroundColor === '' ) {
        target.style.backgroundColor = 'tomato';
        background.style.backgroundColor = 'navy';
      } else {
        target.style.backgroundColor = 'navy';
        background.style.backgroundColor = 'tomato';
      }
    })
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

#### Instantly mirror the textbox text changes to textboxes

```html
<body>
  <h1>Instantly mirror the textbox text changes to textboxes</h1>
  <label for="username">User name</label>
  <input type="text" id="username" name="username" placeholder="Robert" /><br />
  <input type="text" id="mirror1" disabled /><br />
  <input type="text" id="mirror2" disabled /><br />
  <input type="text" id="mirror3" disabled /><br />
  <script>

    const inputObj = {
      userName : document.getElementById('username'),
      mirror1 : document.getElementById('mirror1'),
      mirror2 : document.getElementById('mirror2'),
      mirror3 : document.getElementById('mirror3')
    }

    inputObj.userName.addEventListener('keyup', function() {
      let enterName = inputObj.userName.value;
      inputObj.mirror1.value = mirror2.value = mirror3.value = enterName;
    })
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value

#### Change HTML textbox text using drop-down list (HTML select element)

```html
<body>
  <h1>Change HTML textbox text using drop-down list (HTML select element)</h1>
  <label for="username">Choose a user name:</label>
  <select name="username" id="username">
    <option value="">Choose one</option>
    <option value="Smith">Smith</option>
    <option value="Kane">Kane</option>
    <option value="Tom">Tom</option>
  </select>
  <br />
  <input type="text" id="mirror" disabled />
  <script>
    const inputObj = {
      userName : document.getElementById('username'),
      selectWidth : ( document.getElementById('username').clientWidth - 10 ) + 'px',
      mirror : document.getElementById('mirror'),
    }

    inputObj.mirror.style.width = inputObj.selectWidth;

    inputObj.userName.addEventListener('change', function() {
      let chooseUserName = inputObj.userName.value;
      inputObj.mirror.value = chooseUserName;
    })
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value

#### Change document background color using drop-down list (HTML Select)

```html
<body>
  <h1>Change document background color using drop-down list (HTML Select)</h1>
  <label for="color">Color:</label>
  <select id="color" name="color">
    <option value="">Choose color</option>
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
  </select>
  <script>
    color.addEventListener('change', function(e) {
      let chooseColor = this.value;
      // backgruondColor
      document.body.style.backgroundColor = chooseColor;
      // color
      (this.value !== '') ? document.body.style.color = 'white' : document.body.style.color = 'black';
    })
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

#### how to register button click event  using querySelector and id

```html
<body>
  <h1>how to register button click event using querySelector and id</h1>
  <button id="myButton">my button</button>
  <script>
    const myButton = document.querySelector('#myButton');
    myButton.addEventListener('click',function() {
      console.log(`You have clicked ${myButton.innerText}`);
    })
  </script>
</body>
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

#### register multiple buttons click event using querySelectorAll and class

```html
<body>
  <h1>register multiple buttons click event using querySelectorAll and class</h1>
  <button class="btn">button 1</button>
  <button class="btn">button 2</button>
  <script>
    let buttons = document.querySelectorAll('.btn');
    console.log(buttons);
    for (let index = 0; index < buttons.length; index++) {
      const element = buttons[index];
      element.addEventListener('click', function() {
        console.log(this, element.innerText);
      })
    }
  </script>
</body>
```
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

---

### Screen

#### get screen width and height

```js
let screenHeight = screen.height;
let screenWidth = screen.width;
console.log(screenHeight, screenWidth);
```

- https://developer.mozilla.org/en-US/docs/Web/API/Screen
- https://developer.mozilla.org/en-US/docs/Web/API/Screen/height
- https://developer.mozilla.org/en-US/docs/Web/API/Screen/width

---

### setTimeout()

#### one second delay

```js
console.log(0);
setTimeout(function() {
  console.log(1)
}, 1000);  // milliseconds
setTimeout(myFunction, 2000);
function myFunction() {
  console.log(2);
}
setTimeout(() => {
  console.log(3);
}, 3000)
console.log(4);

// for (let index = 0; index < 60; index++) {
//   setTimeout(function() {
//   console.log(index);
//   }, index * 1000 );
// }
```

- https://developer.mozilla.org/en-US/docs/Web/API/setTimeout