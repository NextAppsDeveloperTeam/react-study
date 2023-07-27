import TestProps_Buttons from './TestProps_Buttons';

const TestProps = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState(0);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h3>Props</h3>
      <div>value: {value}</div>
      <TestProps_Buttons value={value} onChange={setValue} />
    </div>
  );
};

export default TestProps;
