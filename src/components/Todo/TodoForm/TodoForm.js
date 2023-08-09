import './TodoForm.scss';
import {useRef, useState} from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ todoList, setTodoList }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const today = new Date();
    const todayDate = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`;

    // input 값 가져오기
    const onChangeInput = (e) => {
        setText(e.target.value);
    }

    const onClickAddButton = () => {
        // TodoListItem 에 값 추가
        // eslint-disable-next-line react/prop-types
        const nextTodoList = todoList.concat({
            id: todoList.length,
            text,
            date: todayDate,
            state: 'todo',
        })
        setTodoList(nextTodoList)

        // input 초기화
        setText('');
        inputRef.current.focus();
    }

    return (
    <div className='TodoForm'>
        {/* 내용 입력 input */}
        <input
            type='text'
            name='todoItem'
            value={text}
            ref={inputRef}
            placeholder='할 일을 입력해주세요.'
            className='todoForm_input'
            onChange={onChangeInput}
        />
        {/* 아이템 추가 버튼 */}
        <button
            type='submit'
            className='todoForm_btn'
            onClick={onClickAddButton}>
             추가
        </button>
    </div>
  );
};

// props 값 검증
TodoForm.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired
    ),
    setTodoList: PropTypes.func.isRequired,
}

export default TodoForm;
