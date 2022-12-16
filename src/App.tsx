import "./App.css";

import { courses } from "./courses";

function App() {
  const sumExercises = (parts: any) => {
    return parts.reduce((acc: any, value: any) => acc + value.exercises, 0);
  };

  return (
    <div className="App">
      <header>
        <h1>Courses</h1>
      </header>
      <main>
        {courses.map((course) => {
          return (
            <>
              <h2>{course.name}</h2>
              <ul>
                {course.parts.map((part) => {
                  return (
                    <li key={part.id}>
                      {part.name}: <span>{part.exercises}</span>
                    </li>
                  );
                })}
              </ul>
              <p>Total of exercises: {sumExercises(course.parts)}</p>
            </>
          );
        })}
      </main>
    </div>
  );
}

export default App;
