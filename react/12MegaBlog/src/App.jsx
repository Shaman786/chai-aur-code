import "./App.css";

function App() {
  console.log(import.meta.env.VITE_REACT_APP_APPWRITE_URL);
  return (
    <>
      <h1 className="font-sans">A blog App with appwrite</h1>
    </>
  );
}

export default App;
