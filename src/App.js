import Decrease from "./components/Decrease";
import Increase from "./components/Increase";
import Reset from "./components/Reset";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("0");

  return (
    <div>
      <p>Counter</p>
      <p>{count}</p>
      <Increase />
      <Decrease />
      <Reset />
    </div>
  );
}

export default App;
