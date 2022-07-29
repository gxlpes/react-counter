import Increase from "./components/Increase";
import Decrease from "./components/Decrease";
import Reset from "./components/Reset";

import { ContainerButtons } from "./styles/ContainerButtons";
import { ContainerCounter } from "./styles/ContainerCounter";

import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [background, setBackground] = useState("white");

  const setStyle = (background) => {
    setBackground(background);
  };

  const ContainerBody = styled.div`
    font-family: "Poppins", sans-serif;
    letter-spacing: -0.05rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    background: ${background};
  `;

  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <ContainerBody>
      <ContainerCounter>
        <p>
          <b>React Counter</b>
        </p>
        <p>{count}</p>
        <ContainerButtons>
          <Increase onMouseEnter={() => setStyle("#4a4a4a")} onIncrease={increaseHandler} />
          <Decrease onDecrease={decreaseHandler} />
          <Reset onReset={resetHandler} />
        </ContainerButtons>
      </ContainerCounter>
    </ContainerBody>
  );
};

export default App;
