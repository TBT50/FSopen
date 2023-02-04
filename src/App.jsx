import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  if (notes.length > 0) {
    return (
      <div className="App">
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.content}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div className="App">LOADING...</div>;
}

export default App;
