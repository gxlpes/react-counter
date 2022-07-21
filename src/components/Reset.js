const Reset = (props) => {
  const { onReset } = props;
  return (
    <button
      onClick={() => {
        onReset();
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
