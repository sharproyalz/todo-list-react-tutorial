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
