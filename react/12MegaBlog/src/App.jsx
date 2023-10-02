import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";

function App() {
  //loading state
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="font-sans">A blog App with appwrite</h1>
    </>
  );
}

export default App;
