const Decrease = (props) => {
  const onDecreaseFunction = props.onDecrease;
  return <button onClick={onDecreaseFunction}>-</button>;
};

export default Decrease;
