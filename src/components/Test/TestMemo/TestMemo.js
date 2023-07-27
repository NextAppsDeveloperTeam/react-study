import './TestMemo.scss';

const TestMemo = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1((cur) => cur + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Memo --------------------------------------------------------------------------------------------------------------

  const value2Text = useMemo(() => {
    ll('[TestMemo]', 'value2Text change. value2:', value2);

    return [2, 3, 4, 5].map((v) => (
      <div key={v}>
        value2 * {v} = {value2 * v}
      </div>
    ));
  }, [value2]);

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleDecClick = useCallback(() => {
    setValue2((cur) => cur - 1);
  }, []);

  const handleIncClick = useCallback(() => {
    setValue2((cur) => cur + 1);
  }, []);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='TestMemo'>
      <h3>TestMemo</h3>
      <div>
        value1: {value1}, value2: {value2}
      </div>
      <br />
      <div>
        <button onClick={handleDecClick}>value2 - 1</button>
        <button onClick={handleIncClick}>value2 + 1</button>
      </div>
      <br />
      <div>{value2Text}</div>
    </div>
  );
};

export default TestMemo;
