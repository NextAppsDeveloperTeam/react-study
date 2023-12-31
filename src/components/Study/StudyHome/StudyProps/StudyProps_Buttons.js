import './StudyProps_Buttons.scss';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

const StudyProps_Buttons = ({ value, onChange }) => {
  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleDecClick = useCallback(() => {
    onChange(value - 1);
  }, [onChange, value]);

  const handleIncClick = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const handleDoubleClick = useCallback(() => {
    onChange(value * 2);
  }, [onChange, value]);

  const handleHalfClick = useCallback(() => {
    onChange(value / 2);
  }, [onChange, value]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='StudyProps_Button'>
      <h5>StudyProps_Button</h5>
      <div className='value'>value: {value}</div>
      <br />
      <div>
        <button onClick={handleDecClick}>-</button>
        <button onClick={handleIncClick}>+</button>
        <button onClick={handleDoubleClick}>* 2</button>
        <button onClick={handleHalfClick}>/ 2</button>
      </div>
    </div>
  );
};

StudyProps_Buttons.propTypes = propTypes;

export default StudyProps_Buttons;
