import "./App.css";

const Button = ({ onClick, children }: any) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

const PlayButton = () => {
  const handlePlayMovie = () => {
    alert("Movie is playing...");
  };
  return <Button onClick={handlePlayMovie}>Play Movie</Button>;
};

const UploadButton = () => {
  const handleUploadMovie = () => {
    alert("Uploading...");
  };
  return <Button onClick={handleUploadMovie}>Upload Movie</Button>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MASTER</h1>
        <PlayButton />
        <UploadButton />
      </header>
    </div>
  );
}

export default App;
