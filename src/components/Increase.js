import styled from "styled-components";

const StyledButtonIncrease = styled.button`
  background: green;
  height: 2rem;
  width: 2rem;
`;

const Increase = (props) => {
  const onIncreaseFunction = props.onIncrease;

  return <StyledButtonIncrease onClick={onIncreaseFunction}>+</StyledButtonIncrease>;
};

export default Increase;
