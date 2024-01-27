## Lesson 9 - Conditional Expressions

Conditional expressions in JavaScript allow you to execute different pieces of code based on a certain condition. There are different ways to express conditional logic in JavaScript:

#### if statement

The if statement is a fundamental way to execute a block of code conditionally.

```js
const x = 10;

if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}
```

#### else if statement

You can use `else if` to specify multiple conditions.

```js
const x = 10;

if (x > 10) {
  console.log("x is greater than 10");
} else if (x === 10) {
  console.log("x is equal to 10");
} else {
  console.log("x is less than 10");
}
```

#### Ternary Operator (? :)

The ternary operator is a shorthand way to express simple conditional statements in a single line.

```js
const x = 10;
const message = x > 5 ? "x is greater than 5" : "x is not greater than 5";
console.log(message);
```

#### switch statement

The `switch` statement allows you to compare a value against multiple possible case values.

```js
const x = 10;
const message = x > 5 ? "x is greater than 5" : "x is not greater than 5";
console.log(message);
```

Congratulations! Lets proceed to lesson 10. [Click here](https://github.com/sharproyalz/todo-list-react-tutorial/blob/main/javascript_tutorial/10_lesson.md)
