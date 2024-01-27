## Lesson 8 - Map, Filter, and Reduce

Are higher-order functions in JavaScript that operate on arrays, allowing you to perform common operations on array elements in a concise and functional way.

#### Map

The `map` function is used to create a new array by applying a given function to each element of the original array.

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

#### Filter

The `filter` function is used to create a new array containing only the elements that satisfy a given condition.

```js
// Filtering even numbers from an array
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

#### Reduce

The `reduce` function is used to accumulate values from an array into a single result. It takes a callback function that defines the accumulation logic.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 15
```
