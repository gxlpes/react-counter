import styled from "styled-components";

const StyledButtonDecrease = styled.button`
  background: red;
`;

const Decrease = (props) => {
  const onDecreaseFunction = props.onDecrease;
  return <StyledButtonDecrease onClick={onDecreaseFunction}>-</StyledButtonDecrease>;
};

export default Decrease;
