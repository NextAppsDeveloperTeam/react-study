import './TodoHome.scss';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import {useState} from "react";

const TodoHome = () => {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className='TodoHome'>
      <h1>Todo</h1>
      <div className='todo-home-container'>
        <div>
          <TodoForm todoList={todoList} setTodoList={setTodoList} />
          <p>TODO 목록</p>
          <TodoList
              todoList={todoList}
              setTodoList={setTodoList}
              stateList={'todo'}
          />
        </div>
        <div>
          <p>완료된 목록</p>
          <TodoList
              todoList={todoList}
              setTodoList={setTodoList}
              stateList={'comp'}
          />
        </div>
        <div>
          <p>삭제된 목록</p>
          <TodoList
              todoList={todoList}
              setTodoList={setTodoList}
              stateList={'del'}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
