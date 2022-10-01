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

### Oprator & Boolean

#### Logical AND operator, OR operator. Booleans true and false

```js
<script>
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
</script>
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

---
### Element

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