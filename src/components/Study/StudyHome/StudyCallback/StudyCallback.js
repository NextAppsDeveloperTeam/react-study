import './StudyCallback.scss';
const StudyCallback = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState(0);

  // Event Handler -----------------------------------------------------------------------------------------------------

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const handleDecClick = () => {
  //   setValue((cur) => cur - 1);
  // };

  const handleDecClick = useCallback(() => {
    setValue((cur) => cur - 1);
  }, []);

  const handleIncClick = useCallback(() => {
    setValue((cur) => cur + 1);
  }, []);

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    ll('[StudyCallback]', 'handleDecClick changed');
  }, [handleDecClick]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='StudyCallback'>
      <h3>Callback</h3>
      <div>value: {value}</div>
      <br />
      <div>
        <button onClick={handleDecClick}>-</button>
        <button onClick={handleIncClick}>+</button>
      </div>
    </div>
  );
};

export default StudyCallback;
