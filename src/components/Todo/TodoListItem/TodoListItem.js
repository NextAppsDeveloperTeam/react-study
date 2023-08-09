import './TodoListItem.scss';
import PropTypes from 'prop-types';
import { TodoItem, TodoStatus } from '../@common';
import { useCallback } from 'react';

const TodoListItem = ({ item, onChangeStatus }) => {
  const handleCompleteClick = useCallback(() => {
    onChangeStatus && onChangeStatus(item, TodoStatus.Complete);
  }, [item, onChangeStatus]);

  const handleCancelClick = useCallback(() => {
    onChangeStatus && onChangeStatus(item, TodoStatus.Todo);
  }, [item, onChangeStatus]);

  const handleDeleteClick = useCallback(() => {
    onChangeStatus && onChangeStatus(item, TodoStatus.Delete);
  }, [item, onChangeStatus]);

  return (
    <li className='TodoListItem'>
      <span className={`todoitem_con ${item.status !== 'todo' ? 'todoitem_con_checked' : ''}`}>{item.text}</span>
      <span className={`todoitem_date ${item.status !== 'todo' ? 'todoitem_date_checked' : ''}`}>{item.date}</span>
      {item.status === 'todo' ? (
        <button className='todoitem_comp' onClick={handleCompleteClick}>
          완료
        </button>
      ) : null}
      {item.status === 'comp' ? (
        <button className='todoitem_cancel' onClick={handleCancelClick}>
          취소
        </button>
      ) : null}
      {item.status !== 'del' ? (
        <button className='todoitem_del' onClick={handleDeleteClick}>
          삭제
        </button>
      ) : null}
    </li>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.instanceOf(TodoItem),
  onChangeStatus: PropTypes.func,
};

export default TodoListItem;
