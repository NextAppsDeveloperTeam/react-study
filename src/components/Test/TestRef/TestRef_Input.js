import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const TestRef_Input = React.forwardRef(({ value, onChange }, ref) => {
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

TestRef_Input.displayName = 'TestRef_Input';
TestRef_Input.propTypes = propTypes;

export default TestRef_Input;
