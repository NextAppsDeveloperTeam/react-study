import StudyProps_Buttons from './StudyProps_Buttons';

const StudyProps = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState(0);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h3>Props</h3>
      <div>value: {value}</div>
      <StudyProps_Buttons value={value} onChange={setValue} />
    </div>
  );
};

export default StudyProps;
