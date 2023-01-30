import { useState } from "react";
// import { PersonsList } from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const isPersonExist = (name: string) => {
    return persons.some((person) => person.name === name);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleAddPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isPersonExist(newName)) {
      alert(`${newName} ALREADY EXISTS`);
      setNewName("");
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
      };
      setPersons([...persons, newPerson]);
      setNewName("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleAddPerson}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={newName}
          />
        </div>
        <button>Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
