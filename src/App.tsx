import "./App.css";
import { useState } from "react";
import { Note } from "./components/Note";

const notesList = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

const App = () => {
  const [notes, setNotes] = useState(notesList);
  const [newNoteValue, setNewNoteValue] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNoteValue(event.target.value);
  };

  const handleAddNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newNote = {
      id: notes.length + 1,
      content: newNoteValue,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    setNotes([...notes, newNote]);
    setNewNoteValue("");
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NOTES</h1>
        <button type="button" onClick={() => setShowAll(!showAll)}>
          Show {showAll ? "IMPORTANT" : "ALL"} notes
        </button>
        <ul>
          {notesToShow.map((note) => (
            <Note key={note.id} {...note} />
          ))}
        </ul>
        <form onSubmit={handleAddNote}>
          <div>
            <label htmlFor="newNote">Add a new note</label>
            <input
              type="text"
              id="newNote"
              onChange={handleNoteChange}
              value={newNoteValue}
            />
          </div>
          <button>SUBMIT</button>
        </form>
      </header>
    </div>
  );
};

export default App;
