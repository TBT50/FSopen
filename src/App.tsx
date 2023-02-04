import { useState } from "react";
import { InputField } from "./components/InputField";
import { Persons } from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    { name: "Piotr", number: "123", id: 5 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const doesPersonExist = (name: string) => {
    return persons.some((person) => person.name === name);
  };

  const handleFilterElements = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilter(event.target.value);
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
      <input type="text" onChange={handleFilterElements} value={newFilter} />
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
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
}

export default App;
