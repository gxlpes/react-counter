import Increase from "./components/Increase";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const increaseHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Counter</p>
      <p>{count}</p>
      <Increase onIncrease={increaseHandler} />
    </div>
  );
}
