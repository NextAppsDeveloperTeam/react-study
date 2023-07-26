import './TestIncDec.scss';

const TestIncDec = () => {
  const [value, setValue] = useState(0);

  const handleDecClick = useCallback(() => {
    setValue((cur) => cur - 1);
  }, []);

  const handleIncClick = useCallback(() => {
    setValue((cur) => cur + 1);
  }, []);

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