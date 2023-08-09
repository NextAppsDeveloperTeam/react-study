import './TodoForm.scss';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onAdd }) => {
  // Ref ---------------------------------------------------------------------------------------------------------------

  const inputRef = useRef(null);

  // State -------------------------------------------------------------------------------------------------------------

  const [text, setText] = useState('');

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleAddClick = useCallback(() => {
    if (text === '') return;
    onAdd(text);
    setText('');
    inputRef.current?.focus();
  }, [onAdd, text]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='TodoForm'>
      {/* 내용 입력 input */}
      <div>
        <input
          ref={inputRef}
          type='text'
          name='todoItem'
          value={text}
          placeholder='할 일을 입력해주세요.'
          className='todoForm_input'
          onChange={handleTextChange}
        />
      </div>
      {/* 아이템 추가 버튼 */}
      <div>
        <button type='submit' disabled={text === ''} onClick={handleAddClick}>
          추가
        </button>
      </div>
    </div>
  );
};

// props 값 검증
TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TodoForm;
