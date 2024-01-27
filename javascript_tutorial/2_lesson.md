## Lesson 2 - Arrow functions

An arrow function in JavaScript is a concise way to write function expressions. It was introduced in ECMAScript 6 (ES6) to provide a more concise syntax for writing functions compared to traditional function expressions.

```js
// Traditional function expression
const add = function (x, y) {
  return x + y;
};

// Arrow function
const addArrow = (x, y) => x + y;
```

Another awesome feature of arrow function is that if the function returns one single line:

```js
const square = (a) => {
  return a * a;
};

// You can make it even more concise by removing the curly brackets and the return keyword altogether.
const square = (a) => a * a;
```
