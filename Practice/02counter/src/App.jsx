import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const removeValue = () => {
    setCounter(counter - 1);
  };
  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };

  return (
    <>
      <h1> Chai aur React</h1>
      <h2> Counter value : {counter}</h2>

      <button onClick={addValue}> Add value : {counter}</button>
      <br />
      <button onClick={removeValue}> Remove value :{counter}</button>
    </>
  );
}

export default App;
