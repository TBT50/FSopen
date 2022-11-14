import "./App.css";
import { useState } from "react";

import { FeedbackButtons } from "./components/FeedbackButtons";
import { Statistics } from "./components/Statistics";

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
        <FeedbackButtons
          handleGoodFeedback={handleGoodFeedback}
          handleNeutralFeedback={handleNeutralFeedback}
          handleBadFeedback={handleBadFeedback}
        />
      </header>
      <main>
        <Statistics
          goodFeedback={goodFeedback}
          neutralFeedback={neutralFeedback}
          badFeedback={badFeedback}
        />
      </main>
    </div>
  );
};
