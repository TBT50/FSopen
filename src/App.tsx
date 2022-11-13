import "./App.css";
import { useState } from "react";

export const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleGoodFeedback = () => setGoodFeedback(goodFeedback + 1);
  const handleNeutralFeedback = () => setNeutralFeedback(neutralFeedback + 1);
  const handleBadFeedback = () => setBadFeedback(badFeedback + 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Give Feedback</h1>
        <ul className="app-buttons">
          <li>
            <button type="button" onClick={handleGoodFeedback}>
              good
            </button>
          </li>
          <li>
            <button type="button" onClick={handleNeutralFeedback}>
              neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={handleBadFeedback}>
              bad
            </button>
          </li>
        </ul>
      </header>
      <main>
        <h2 className="statistics-header">Statistics</h2>
        <ul className="statistics-list">
          <li>
            <span>GOOD</span>
            <span>{goodFeedback}</span>
          </li>
          <li>
            <span>NEUTRAL</span>
            <span>{neutralFeedback}</span>
          </li>
          <li>
            <span>BAD</span>
            <span>{badFeedback}</span>
          </li>
        </ul>
      </main>
    </div>
  );
};
