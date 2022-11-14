import "./App.css";
import { useState } from "react";

import { FeedbackButtons } from "./components/FeedbackButtons";

export const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleGoodFeedback = () => setGoodFeedback(goodFeedback + 1);
  const handleNeutralFeedback = () => setNeutralFeedback(neutralFeedback + 1);
  const handleBadFeedback = () => setBadFeedback(badFeedback + 1);

  let sum = 0;
  sum = goodFeedback + neutralFeedback + badFeedback;

  let average = null;
  let positiveFeedback;

  if (sum !== 0) {
    average = (goodFeedback + badFeedback * -1) / sum;
    positiveFeedback = (goodFeedback * 100) / sum;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Give Feedback</h1>
        <FeedbackButtons
          handleGoodFeedback={handleGoodFeedback}
          handleNeutralFeedback={handleNeutralFeedback}
          handleBadFeedback={handleBadFeedback}
        />
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
          <li>
            <span>ALL</span>
            <span>{sum}</span>
          </li>
          <li>
            <span>AVERAGE</span>
            <span>{average ? average : 0}</span>
          </li>
          <li>
            <span>POSITIVE</span>
            <span>{positiveFeedback ? positiveFeedback : 0} %</span>
          </li>
        </ul>
      </main>
    </div>
  );
};
