import React from "react";
import { CardOne } from "./components/CardOne";

function App() {
  let myObj = {
    username: "Fayaj",
    age: 22,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="bg-green-400 text-black p-4  rounded-xl">
          Tailwind test
        </h1>
        <CardOne username="chaiaurcode" btnText="click me" />
        <CardOne username="Fayaj" />
      </div>
    </>
  );
}

export default App;
