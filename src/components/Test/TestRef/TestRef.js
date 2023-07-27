import { useRef } from 'react';
import TestRef_Input from './TestRef_Input';

const TestRef = () => {
  // Ref ---------------------------------------------------------------------------------------------------------------

  const inputRef = useRef();
  const input2Ref = useRef();

  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState('');

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleResetClick = useCallback(() => {
    setValue('');
    inputRef.current.focus();
  }, []);

  const handleReset2Click = useCallback(() => {
    setValue('');
    input2Ref.current.activeInput();
  }, []);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h3>Ref</h3>
      <div>value: {value}</div>
      <br />
      <div>
        <input
          ref={inputRef}
          type='text'
          style={{ width: '100%' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleResetClick}>초기화</button>
      </div>
      <br />
      <div>
        <TestRef_Input ref={input2Ref} value={value} onChange={setValue} />
        <button onClick={handleReset2Click}>초기화2</button>
      </div>
    </div>
  );
};

export default TestRef;
