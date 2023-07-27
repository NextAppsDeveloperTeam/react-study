import './TodoHome.scss';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

const TodoHome = () => {
  return (
    <div className='TodoHome'>
      <h1>Todo</h1>
      <div className='todo-home-container'>
        <div>
          <TodoForm />
          <p>TODO 목록</p>
          <TodoList />
        </div>
        <div>
          <p>완료된 목록</p>
          <TodoList />
        </div>
        <div>
          <p>삭제된 목록</p>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
