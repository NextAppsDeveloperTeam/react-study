const TestEffect = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState(0);

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((cur) => cur + 1);
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (value === 10) {
      setValue(0);
    }
  }, [value]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h3>TestEffect</h3>
      <div>value: {value}</div>
    </div>
  );
};

export default TestEffect;
