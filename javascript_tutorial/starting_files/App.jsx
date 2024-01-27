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
