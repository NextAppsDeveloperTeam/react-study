import './TodoHome.scss';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import { useState } from 'react';
import { TodoItem, TodoStatus } from '../@common';

const TodoHome = () => {
  // State -------------------------------------------------------------------------------------------------------------

  const [todoList, setTodoList] = useState([]);

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleAdd = useCallback((text) => {
    const item = new TodoItem(text);
    setTodoList((old) => [...old, item]);
  }, []);

  const handleChangeStatus = useCallback((item, status) => {
    setTodoList((old) =>
      old.map((oldItem) => {
        if (oldItem === item) {
          oldItem.status = status;
        }
        return oldItem;
      })
    );
  }, []);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='TodoHome'>
      <h1>Todo</h1>
      <div className='todo-home-container'>
        <div>
          <TodoForm todoList={todoList} onAdd={handleAdd} />
          <p>TODO 목록</p>
          <TodoList status={TodoStatus.Todo} list={todoList} onChangeStatus={handleChangeStatus} />
        </div>
        <div>
          <p>완료된 목록</p>
          <TodoList status={TodoStatus.Complete} list={todoList} onChangeStatus={handleChangeStatus} />
        </div>
        <div>
          <p>삭제된 목록</p>
          <TodoList status={TodoStatus.Delete} list={todoList} onChangeStatus={handleChangeStatus} />
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
