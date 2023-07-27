import './TestIncDec.scss';

const TestIncDec = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState(0);

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleDecClick = useCallback(() => {
    setValue((cur) => cur - 1);
  }, []);

  const handleIncClick = useCallback(() => {
    setValue((cur) => cur + 1);
  }, []);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='TestIncDec'>
      <h3>TestIncDec</h3>
      <div>
        <button onClick={handleDecClick}>-</button>
        <span className='value'>{value}</span>
        <button onClick={handleIncClick}>+</button>
      </div>
    </div>
  );
};

export default TestIncDec;
