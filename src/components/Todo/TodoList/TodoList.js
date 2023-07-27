import './TodoList.scss';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
  return (
    <div className='TodoList'>
      <h3>TodoList</h3>
      {new Array(5).fill(0).map((v, idx) => (
        <TodoListItem key={idx} />
      ))}
    </div>
  );
};

export default TodoList;
