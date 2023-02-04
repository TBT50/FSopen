interface PersonsProps {
  newFilter: string;
  persons: {
    name: string;
    number: string;
    id: number;
  }[];
}

export const Persons = ({ persons, newFilter }: PersonsProps) => {
  return (
    <ul>
      {persons
        .filter((person) => {
          return person.name.toLowerCase().includes(newFilter.toLowerCase());
        })
        .map((person) => (
          <li key={person.id}>
            {person.name} : {person.number}
          </li>
        ))}
    </ul>
  );
};
