const TestInput = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState('');

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleResetClick = useCallback(() => {
    setValue('');
  }, []);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h3>TestInput</h3>
      <div>value: {value}</div>
      <br />
      <div>
        <input type='text' style={{ width: '100%' }} value={value} onChange={handleChange} />
      </div>
      <br />
      <button onClick={handleResetClick}>초기화</button>
    </div>
  );
};

export default TestInput;
