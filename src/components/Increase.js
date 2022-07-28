import { StyledButtonIncrease } from "../styles/StyleIncrease";

const Increase = (props) => {
  const onIncreaseFunction = props.onIncrease;

  return <StyledButtonIncrease onClick={onIncreaseFunction}>+</StyledButtonIncrease>;
};

export default Increase;
