import './TodoListItem.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const TodoListItem = ({ todoItem, todoList, setTodoList }) => {
  const onCompState = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      state: item.id === todoItem.id ? 'comp' : item.state,
    }));
    setTodoList(nextTodoList);
  };
  const onTodoState = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      state: item.id === todoItem.id ? 'todo' : item.state,
    }));
    setTodoList(nextTodoList);
  };
  const onDelState = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      state: item.id === todoItem.id ? 'del' : item.state,
    }));
    setTodoList(nextTodoList);
  };

  return (
    <li className='TodoListItem'>
      {/* eslint-disable-next-line react/prop-types */}
      <span className={`todoitem_con ${todoItem.state !== 'todo' ? 'todoitem_con_checked' : ''}`}>{todoItem.text}</span>
      {/* eslint-disable-next-line react/prop-types */}
      <span className={`todoitem_date ${todoItem.state !== 'todo' ? 'todoitem_date_checked' : ''}`}>
        {todoItem.date}
      </span>
      {
        // eslint-disable-next-line react/prop-types
        todoItem.state === 'todo' ? (
          <button className='todoitem_comp' onClick={onCompState}>
            완료
          </button>
        ) : null
      }
      {
        // eslint-disable-next-line react/prop-types
        todoItem.state === 'comp' ? (
          <button className='todoitem_cancel' onClick={onTodoState}>
            취소
          </button>
        ) : null
      }
      {
        // eslint-disable-next-line react/prop-types
        todoItem.state !== 'del' ? (
          <button className='todoitem_del' onClick={onDelState}>
            삭제
          </button>
        ) : null
      }
    </li>
  );
};

TodoListItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default TodoListItem;
