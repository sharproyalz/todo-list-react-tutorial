## Lesson 5 - Destructuring Arrays and Objects

A feature that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. This can make your code cleaner and more expressive. Destructuring can be applied to both arrays and objects.

Destructuring Arrays:

```js
const numbers = [1, 2, 3];

// Traditional way
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

// Using destructuring
const [x, y, z] = numbers;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
```

Destructuring Objects:

```js
const person = { name: "John", age: 30 };

// Traditional way
const name = person.name;
const age = person.age;

// Using destructuring
const { name, age } = person;
console.log(name); // "John"
console.log(age); // 30
```

Nested Destructuring:

```js
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    country: "Fantasy",
  },
};

const {
  name,
  address: { city, country },
} = person;
console.log(name); // "Alice"
console.log(city); // "Wonderland"
console.log(country); // "Fantasy"
```

This is useful when you need to use a few properties out of a bigger object. For example, here’s a line to destructure the useState and useEffect hook functions out of the React’s API.

```js
const { useState, useEffect } = React;
```

After this, you can use now use these React API Objects.

```js
const [state, setState] = useState();
```
