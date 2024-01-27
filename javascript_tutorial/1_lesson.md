## Lesson 1 - var/let/const keywords

A `var`, `let`, and `const` are keywords used to declare variables in JavaScript, but they have some differences in terms of scope, hoisting, and mutability.

`var`: are function-scoped, meaning they are only accessible within the function where they are defined.

```js
/* Syntax */
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible outside the if block)
}
```

`let`: are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) where they are defined.

```js
/* Syntax */
function example() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  // console.log(y); // Error: y is not defined
}
```

`const`: are also block-scoped and is used to declare constants, meaning their values cannot be reassigned after initialization.

```js
/* Syntax */
const z = 30;
// z = 40; // Error: Assignment to a constant variable
```


