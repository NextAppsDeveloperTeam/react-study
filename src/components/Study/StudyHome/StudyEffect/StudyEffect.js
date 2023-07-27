const StudyEffect = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState(0);

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    ll('StudyEffect create');

    const interval = setInterval(() => {
      setValue((cur) => cur + 1);
    }, 300);

    return () => {
      ll('StudyEffect destroy');

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
      <h3>Effect</h3>
      <div>value: {value}</div>
    </div>
  );
};

export default StudyEffect;
