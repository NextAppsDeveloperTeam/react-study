import './TodoList.scss';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const TodoList = ({ title, todoList, setTodoList, stateList }) => (
  // return (
    <div className='TodoList'>
      <h3 className='todoList_title'>{title}</h3>
      {/*{new Array(5).fill(0).map((v, idx) => (*/}
        <ul className='todolist_con'>
          {todoList &&
            // eslint-disable-next-line react/prop-types
            todoList.map((todoItem) => {
                if(stateList !== todoItem.state) return null;
                return (
                  <TodoListItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    todoList={todoList}
                    setTodoList={setTodoList}
                  />
                );
            })}
      {/*))}*/}
        </ul>
    </div>
  // );
);

TodoList.propTyeps = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
  ),
  setTodoList: PropTypes.func.isRequired,
  stateList: PropTypes.string.isRequired,
}

export default TodoList;
