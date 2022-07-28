import { StyledButtonReset } from "../styles/StyleReset.js";

const Reset = (props) => {
  const onResetFunction = props.onReset;
  return <StyledButtonReset onClick={onResetFunction}>Reset</StyledButtonReset>;
};

export default Reset;
