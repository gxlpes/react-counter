import styled from "styled-components";

const StyledButtonIncrease = styled(props.BasicButton)`
  padding: 2rem;
  border: none;
  border-radius: 7px;
`;

const Increase = (props) => {
  const onIncreaseFunction = props.onIncrease;

  return <StyledButtonIncrease onClick={onIncreaseFunction}>+</StyledButtonIncrease>;
};

export default Increase;
