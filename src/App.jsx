import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNoteValue, setNewNoteValue] = useState("");

  const fetchNotes = () => {
    fetch("http://localhost:3001/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  };

  useEffect(fetchNotes, []);

  const handleAddNote = (event) => {
    event.preventDefault();
    const newNote = {
      id: notes.length + 1,
      content: newNoteValue,
      important: true,
    };
    setNotes([...notes, newNote]);
    setNewNoteValue("");
  };

  const handleNewNoteValue = (event) => {
    setNewNoteValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Notes</h1>
        <form onSubmit={handleAddNote}>
          <div>
            <label htmlFor="newNote">Add a new note</label>
            <input
              type="text"
              id="newNote"
              onChange={handleNewNoteValue}
              value={newNoteValue}
            />
          </div>
          <button>Add</button>
        </form>

        {notes.length > 0 ? (
          <ul>
            {notes.map((note) => (
              <li key={note.id}>{note.content}</li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
