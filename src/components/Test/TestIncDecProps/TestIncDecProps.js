import TestIncDecProps_Buttons from './TestIncDecProps_Buttons';

const TestIncDecProps = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h3>TestIncDecProps</h3>
      <div>value: {value}</div>
      <TestIncDecProps_Buttons value={value} onChange={setValue} />
    </div>
  );
};

export default TestIncDecProps;
