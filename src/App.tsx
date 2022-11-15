import { useState } from "react";
import anecdotesList from "./anecdotes";

const App = () => {
  const [anecdotes, setAnecdotes] = useState(anecdotesList);
  const [index, setIndex] = useState(0);
  const { id, text, votes } = anecdotes[index];

  const checkNumber = (index: number) => {
    if (index > anecdotes.length - 1) {
      return 0;
    }
    return index;
  };

  const nextAnecdote = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const addVote = (id: number, text: string, votes: number) => {
    const newAnecdote = {
      id: id,
      text: text,
      votes: votes + 1,
    };

    const newAnecdotes = [...anecdotes];
    const findIndex = newAnecdotes.findIndex((items) => items.id === id);
    newAnecdotes[findIndex] = newAnecdote;
    setAnecdotes(newAnecdotes);
  };

  return (
    <div>
      <button type="button" onClick={nextAnecdote}>
        Next anecdote
      </button>
      <p>ID: {id}</p>
      <p> {text}</p>
      <button onClick={() => addVote(id, text, votes)}>Add vote</button>
      <p>Number of vots: {votes}</p>
    </div>
  );
};

export default App;
