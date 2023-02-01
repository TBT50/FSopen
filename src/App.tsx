import { useState } from "react";
import { InputField } from "./components/InputField";
// import { PersonsList } from "./components/PersonsList";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const doesPersonExist = (name: string) => {
    return persons.some((person) => person.name === name);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value);
  };

  const handleAddPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (doesPersonExist(newName)) {
      alert(`${newName} ALREADY EXISTS`);
      setNewName("");
      setNewNumber("");
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      };
      setPersons([...persons, newPerson]);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleAddPerson}>
        <InputField
          name="name"
          value={newName}
          handleChange={handleChangeName}
        />
        <InputField
          name="number"
          value={newNumber}
          handleChange={handleChangeNumber}
        />
        <button>Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
