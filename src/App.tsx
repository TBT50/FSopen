import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Give Feedback</h1>
        <ul className="app-buttons">
          <li>
            <button type="button">good</button>
          </li>
          <li>
            <button type="button">neutral</button>
          </li>
          <li>
            <button type="button">bad</button>
          </li>
        </ul>
      </header>
      <main>
        <h2 className="statistics-header">Statistics</h2>
        <ul className="statistics-list">
          <li>
            <span>GOOD</span>
            <span>0</span>
          </li>
          <li>
            <span>NEUTRAL</span>
            <span>0</span>
          </li>
          <li>
            <span>BAD</span>
            <span>0</span>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
