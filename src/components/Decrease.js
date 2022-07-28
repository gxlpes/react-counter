import { StyledButtonDecrease } from "../styles/StyleDecrease";

const Decrease = (props) => {
  const onDecreaseFunction = props.onDecrease;
  return <StyledButtonDecrease onClick={onDecreaseFunction}>-</StyledButtonDecrease>;
};

export default Decrease;
