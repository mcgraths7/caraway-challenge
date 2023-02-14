const AnimatedButton = ({ clickHandler, children }) => {
  return (
    <button onClick={clickHandler} className="btn-wrapper">
      <span className="btn">{children}</span>
      <span className="btn-shadow"></span>
    </button>
  );
};

export default AnimatedButton;
