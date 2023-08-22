import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };
  return (
    <div>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
};

export default App;
