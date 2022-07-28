import Increase from "./components/Increase";
import Decrease from "./components/Decrease";
import Reset from "./components/Reset";

import { useState } from "react";
import styled from "styled-components";

const ContStyled = styled.div`
  font-family: "Poppins", sans-serif;
  letter-spacing: -0.05rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BasicButton = styled.button`
  background-color: red;
`;

const App = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <ContStyled>
      <p>React Counter</p>
      <p>{count}</p>
      <Increase onIncrease={increaseHandler} />
      <Decrease onDecrease={decreaseHandler} />
      <Reset onReset={resetHandler} />
    </ContStyled>
  );
};

export default App;
