import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [btnColor, setbtnColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: btnColor }}
    >
      <button
        onClick={() => setbtnColor("black")}
        className="bg-black text-white p-3 pl-3 mr-3 rounded-md"
      >
        Black
      </button>
      <button
        onClick={() => setbtnColor("White")}
        className="bg-white text-black p-3 pl-3 mr-3 rounded-md"
      >
        White
      </button>
      <button
        onClick={() => setbtnColor("Orange")}
        className="bg-orange-400 text-white p-3 pl-3 mr-3 rounded-md"
      >
        Orange
      </button>
      <button
        onClick={() => setbtnColor("Olive")}
        className="bg-green-300 text-white p-3 pl-3 mr-3 rounded-md"
      >
        Olive
      </button>
      <button
        onClick={() => setbtnColor("Gray")}
        className="bg-gray-500 text-white p-3 pl-3 mr-3 rounded-md"
      >
        Gray
      </button>
      <button
        onClick={() => setbtnColor("Yellow")}
        className="bg-yellow-400 text-white p-3 pl-3 mr-3 rounded-md"
      >
        Yellow
      </button>
      <button
        onClick={() => setbtnColor("Red")}
        className="bg-red-500 text-white p-3 pl-3 mr-3  rounded-md"
      >
        Red
      </button>
      <button
        onClick={() => setbtnColor("Blue")}
        className="bg-blue-500 text-white p-3 pl-3 mr-3 rounded-md"
      >
        Blue
      </button>
      <button
        onClick={() => setbtnColor("Green")}
        className="bg-green-700 text-white p-3 pl-3 mr-3 rounded-md"
      >
        Green{" "}
      </button>
    </div>
  );
}

export default App;
