## Lesson 4 - Expressions for React

In React, expressions are often used within JSX (JavaScript XML) to embed dynamic content or JavaScript logic within your components. JSX allows you to mix HTML-like syntax with JavaScript expressions.

Here are some examples of expressions commonly used in React:

For Variable

```js
const name = "John";
const element = <p>Hello, {name}!</p>;
```

For Attribute

```js
const imgUrl = "example.jpg";
const imageElement = <img src={imgUrl} alt="Example" />;
```

For Event Handling.

```js
const handleClick = () => {
  console.log("Button clicked!");
};

const element = <button onClick={handleClick}>Click me</button>;
```

For Inline Styles.

```js
const styles = {
  color: "blue",
  fontSize: "16px",
};

const element = <p style={styles}>Styled Text</p>;
```

These examples showcase the use of JavaScript expressions within JSX, allowing you to create dynamic and interactive React components. Do not be confused with JavaScript template literals `${}`, Keep in mind that JSX expressions are written within curly braces `{}`.
