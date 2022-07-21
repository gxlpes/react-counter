const Increase = (props) => {
  const { onIncrease } = props;
  return <button onClick={() => onIncrease()}>+</button>;
};

export default Increase;
