import "./App.css";

const course = {
  id: 1,
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
      id: 1,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
      id: 2,
    },
    {
      name: "State of a component",
      exercises: 14,
      id: 3,
    },
    {
      name: "Redux",
      exercises: 11,
      id: 4,
    },
  ],
};
function App() {
  const sumOfExercises = course.parts.reduce(
    (acc, value) => acc + value.exercises,
    0
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>{course.name}</h1>
        <ul>
          {course.parts.map((part) => {
            return (
              <li key={part.id}>
                {part.name}: <span>{part.exercises}</span>
              </li>
            );
          })}
        </ul>
        <p>
          <strong>Total of {sumOfExercises} exercises</strong>
        </p>
      </header>
    </div>
  );
}

export default App;
