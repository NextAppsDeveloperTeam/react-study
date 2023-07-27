import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const StudyRef_Input = React.forwardRef(({ value, onChange }, ref) => {
  // Ref ---------------------------------------------------------------------------------------------------------------

  const inputRef = useRef();

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (ref) {
      ref.current = {
        activeInput() {
          inputRef.current.focus();
        },
      };
    }
  }, [ref]);

  // Render ------------------------------------------------------------------------------------------------------------

  return <input ref={inputRef} value={value} style={{ width: '100%' }} onChange={(e) => onChange(e.target.value)} />;
});

StudyRef_Input.displayName = 'StudyRef_Input';
StudyRef_Input.propTypes = propTypes;

export default StudyRef_Input;
