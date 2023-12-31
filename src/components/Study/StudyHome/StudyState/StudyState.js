import './StudyState.scss';

const StudyState = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState(0);

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleDec2Click = () => {
    setValue(value - 2);
  };

  const handleInc2Click = () => {
    setValue(value + 2);
  };

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='StudyState'>
      <h3>State</h3>
      <div>value: {value}</div>
      <br />
      <div>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={handleDec2Click}>- 2</button>
        <button onClick={handleInc2Click}>+ 2</button>
      </div>
      <br />
    </div>
  );
};

export default StudyState;
