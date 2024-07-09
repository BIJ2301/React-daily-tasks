import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    name: "bijin",
    age: 23,
  };
  let myArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-tl-xl mb-4">
        {" "}
        Tailwind test
      </h1>
      <Card username="Hitesh" btnText="click me" />
      <Card username="Bijin" btnText="visit me" />
    </>
  );
}

export default App;
