import './TodoList.scss';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';
import { TodoItem, TodoStatus } from '../@common';

const TodoList = ({ status, list, onChangeStatus }) => {
  const listItems = useMemo(
    () =>
      list
        .filter((item) => item.status === status)
        .map((item) => <TodoListItem key={item.id} item={item} onChangeStatus={onChangeStatus} />),
    [list, status, onChangeStatus]
  );

  return (
    <div className='TodoList'>
      <ul className='todolist_con'>{listItems.length === 0 ? '등록된 정보가 없습니다.' : listItems}</ul>
    </div>
  );
};

TodoList.propTypes = {
  status: PropTypes.oneOf(TodoStatus.getList()).isRequired,
  list: PropTypes.arrayOf(PropTypes.instanceOf(TodoItem)).isRequired,
  onChangeStatus: PropTypes.func,
};

export default TodoList;
