const Increase = (props) => {
  const onIncreaseFunction = props.onIncrease;

  return <button onClick={onIncreaseFunction}>+</button>;
};

export default Increase;
