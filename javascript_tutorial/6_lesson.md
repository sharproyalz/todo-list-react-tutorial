## Lesson 6 - Rest/Spread Syntax

Rest and spread syntax are two features in JavaScript introduced in ECMAScript 6 (ES6) that involve the use of three dots (...). While they look similar, they are used in different contexts and serve different purposes.

#### Rest Syntax

is used in function parameters to collect all the remaining arguments into a single array. It allows you to represent an indefinite number of arguments as an array.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

#### Spread Syntax

is used to spread the elements of an array or the properties of an object into another array or object.

```js
// Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// Spread in Objects
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };

console.log(obj2); // Output: { x: 1, y: 2, z: 3 }
```
