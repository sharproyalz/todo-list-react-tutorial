## Lesson 10 - Create a Todo List

A todo list is a list of the tasks that you have to do, or things that you want to do. You will create or add a task and delete it if you completed the task or you are done.Now, Lets start creating a todo list.

### Starting Output

```jsx
import "./App.css";

function App() {
  return (
    <>
      <main>
        <h2 id="title">Todo List</h2>
        <div id="todos">
          <input
            type="text"
            name=""
            id="input-todos"
            placeholder="Add your todos here"
          />
          <button type="button" id="add-todos">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <div className="list-of-todos">
          <div className="text">Item 1</div>
          <button type="button" className="delete-todos">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
```

![Starting code](/images/starting-image.png)

This should be the output if you followed the step by step from Lesson 0. If its not, please double check if you have skipped a step and try again.

### Create a task

#### Step 1 - Use a useState().

- to store the value of input field, you need to use `useState()`, a React function that is part of the Hooks API.

The `useState()` hook is used to declare state variables in functional components. It takes an initial value as an argument and returns an array with two elements:

1. The current state value.
2. A function that allows you to update the state.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  return (
    <>
      <input
        type="text"
        name=""
        id="input-todos"
        placeholder="Add your todos here"
      />
    </>
  );
}

export default App;
```

`todos` is the current state and `setTodos` is the function to update the state.

### Step 2 - Store the value

- What are we going to do now is to get the value of input. To do that we need to store it in our `todos` state.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  return (
    <>
      <input
        type="text"
        name=""
        id="input-todos"
        placeholder="Add your todos here"
        onChange={(e) => setTodos(e.target.value)}
        value={todos}
      />
    </>
  );
}

export default App;
```

- We need to use `onChange` attribute to trigger our function every time the user types.
- Inside, We will need to put an arrow function because we don't put, It will render in the background in an endless loop.
- `setTodos` updates the current state with the new value of the input.
- Set the value to `todos` state ensuring that the input field reflects to the current state.

### Step 3 - Add to an Array

- We need to store in an Array our value in input field. To do that we need to create a new useState() variable with an initial value of empty array `[]`.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]); // Store here

  return (
    <>
      <div id="todos">
        <input
          type="text"
          name=""
          id="input-todos"
          placeholder="Add your todos here"
          onChange={(e) => setTodos(e.target.value)}
          value={todos}
        />
        <button type="button" id="add-todos">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </>
  );
}

export default App;
```

- Lets create a function that will handle the adding of our input field's value to our `listOfTodos` state.
- The `setListOfTodos` updates the `listOfTodos` state by adding a new todo to the existing list.
- The `...listOfTodos` creates a new array that contains all the elements from the existing `listOfTodos`.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleClick = () => {
    setListOfTodos([...listOfTodos, todos]);
  };

  return (
    <>
      <div id="todos">
        <input
          type="text"
          name=""
          id="input-todos"
          placeholder="Add your todos here"
          onChange={(e) => setTodos(e.target.value)}
          value={todos}
        />
        <button type="button" id="add-todos" onClick={() => handleClick()}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </>
  );
}

export default App;
```

- Lets add a validation check and resetting of `todos` state to empty string `""` when succeed.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleClick = () => {
    if (!todos) {
      return;
    }
    setListOfTodos([...listOfTodos, todos]);
    setTodos("");
  };

  return (
    <>
      <div id="todos">
        <input
          type="text"
          name=""
          id="input-todos"
          placeholder="Add your todos here"
          onChange={(e) => setTodos(e.target.value)}
          value={todos}
        />
        <button type="button" id="add-todos" onClick={() => handleClick()}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </>
  );
}

export default App;
```

### Display a task

Now that we can create a task, Its time to display it. We need to `map` our array, its like a loop for each element.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleClick = () => {
    if (!todos) {
      return;
    }
    setListOfTodos([...listOfTodos, todos]);
    setTodos("");
  };

  return (
    <>
      <main>
        <h2 id="title">Todo List</h2>
        <div id="todos">
          <input
            type="text"
            name=""
            id="input-todos"
            placeholder="Add your todos here"
            onChange={(e) => setTodos(e.target.value)}
            value={todos}
          />
          <button type="button" id="add-todos" onClick={() => handleClick()}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        {listOfTodos.map((list, index) => (
          <div className="list-of-todos">
            <div className="text">Item 1</div>
            <button type="button" className="delete-todos">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
```

![Displayed 3 task](/images/display-3-task.png)

It should display when you add an element. In my case I added 3 in my array so it displayed 3 task.

- Now lets change the text that displays in task.
- `list` holds the value of an individual todo from the listOfTodos array for each iteration of the map function. Lets change the text to `list`
- `index` is the index of the current element in the array during each iteration. Lets add it in our parent div element inside our `map()`.
- `key={index}` is used to provide a unique identifier for each dynamically generated element.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleClick = () => {
    if (!todos) {
      return;
    }
    setListOfTodos([...listOfTodos, todos]);
    setTodos("");
  };

  return (
    <>
      <main>
        <h2 id="title">Todo List</h2>
        <div id="todos">
          <input
            type="text"
            name=""
            id="input-todos"
            placeholder="Add your todos here"
            onChange={(e) => setTodos(e.target.value)}
            value={todos}
          />
          <button type="button" id="add-todos" onClick={() => handleClick()}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        {listOfTodos.map((list, index) => (
          <div key={index} className="list-of-todos">
            <div className="text">{list}</div>
            <button type="button" className="delete-todos">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
```

We will add a message if there are no added task.

- To do that, use a `ternary operator` to know if `listOfTodos` is empty.
- `listOfTodos.length !== 0` is our condition. If its true it will display the list of todos and if not it will display the message.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleClick = () => {
    if (!todos) {
      return;
    }
    setListOfTodos([...listOfTodos, todos]);
    setTodos("");
  };

  return (
    <>
      <main>
        <h2 id="title">Todo List</h2>
        <div id="todos">
          <input
            type="text"
            name=""
            id="input-todos"
            placeholder="Add your todos here"
            onChange={(e) => setTodos(e.target.value)}
            value={todos}
          />
          <button type="button" id="add-todos" onClick={() => handleClick()}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        {listOfTodos.length !== 0 ? (
          listOfTodos.map((list, index) => (
            <div key={index} className="list-of-todos">
              <div className="text">{list}</div>
              <button type="button" className="delete-todos">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))
        ) : (
          <div id="empty-text">There are no current todos</div>
        )}
      </main>
    </>
  );
}

export default App;
```

![Empty Todos](/images/empty-todos.png)

This will display if `listOfTodos` state is empty.

### Delete a task

Now that we can create and display a task, of course we don't want to have a bunch of todos even though we are done doing it. So now, lets create a delete for those task that you completed.

- Create an `onClick()` handler in delete button to perform delete functionality.
- `updatedTodos = [...listOfTodos]` is a copy of listOfTodos.
- It will then uses the `splice` method to remove one element at the specified index from the updatedTodos array.
- The `setListOfTodos(updatedTodos)` updates the state with the modified array, triggering a re-render with the updated list of todos.

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  const handleClick = () => {
    if (!todos) {
      return;
    }
    setListOfTodos([...listOfTodos, todos]);
    setTodos("");
  };

  return (
    <>
      <main>
        <h2 id="title">Todo List</h2>
        <div id="todos">
          <input
            type="text"
            name=""
            id="input-todos"
            placeholder="Add your todos here"
            onChange={(e) => setTodos(e.target.value)}
            value={todos}
          />
          <button type="button" id="add-todos" onClick={() => handleClick()}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        {listOfTodos.length !== 0 ? (
          listOfTodos.map((list, index) => (
            <div key={index} className="list-of-todos">
              <div className="text">{list}</div>
              <button
                type="button"
                onClick={() => {
                  const updatedTodos = [...listOfTodos];
                  updatedTodos.splice(index, 1);
                  setListOfTodos(updatedTodos);
                }}
                className="delete-todos"
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))
        ) : (
          <div id="empty-text">There are no current todos</div>
        )}
      </main>
    </>
  );
}

export default App;
```

Congratulations! 🎉 You successfully created your first React project. Thank you for following this wonderful tutorial with me! I wish you a best of luck to your front-end developer journey.
