const TestInput = () => {
  const [value, setValue] = useState();

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <h3>TestInput</h3>
      <div>value: {value}</div>
      <br />
      <div>
        <input type='text' style={{ width: '100%' }} value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default TestInput;
