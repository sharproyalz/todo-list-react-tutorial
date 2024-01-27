## Lesson 7 -Modules Import and Export

Modules in JavaScript provide a way to organize code by splitting it into separate files. The `import` and `export` statements are used to work with modules in ECMAScript 6 (ES6) and later.

#### Exporting from a Module

You can export variables, functions, or objects from a module using the `export` keyword.

```js
// math.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

#### Importing in Another Module

You can then import the exported items into another module using the `import` statement.

```js
// app.js
import { sum, multiply } from "./math.js";

console.log(sum(3, 4)); // Output: 7
console.log(multiply(2, 5)); // Output: 10
```

Here, `app.js` imports the `sum` and `multiply` functions from the `math.js` module.

#### Default Exports

You can also use a default export, where a module exports a single value, and you import it without using curly braces.

```js
// utils.js
const greet = (name) => `Hello, ${name}!`;
export default greet;
```

```js
// app.js
import greeting from "./utils.js";

console.log(greeting("Alice")); // Output: Hello, Alice!
```

In this example, `greet` is the default export from `utils.js`, and it is imported as `greeting` in `app.js`.

In React, you will use this often especially when your project grows as it encourages a modular and component-based approach, and breaking down the application into smaller, reusable pieces is a common practice.

Here is a React Example:

```jsx
// navigation-bar.jsx
export default function NavigationBar() {
  return <></>;
}
```

When exporting a component you need to use `export` with `default` to function.

```jsx
// main.jsx
import NavigationBar from "./navigation-bar.jsx";

export default function MainPage() {
  return (
    <>
      <NavigationBar />
    </>
  );
}
```

In this example, I imported the `NavigationBar` component from `navigation-bar.jsx`. I used the imported `NavigationBar` inside the return value my `MainPage()` function as a component using `<NavigationBar />`.

Congratulations! Lets proceed to lesson 8. [Click here](https://github.com/sharproyalz/todo-list-react-tutorial/blob/main/javascript_tutorial/8_lesson.md)
