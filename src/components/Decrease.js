const Decrease = (props) => {
  const { onDecrease } = props;
  return <button onClick={() => onDecrease()}>-</button>;
};

export default Decrease;
