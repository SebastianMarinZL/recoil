import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../store/todos";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            id={todo.id}
            text={todo.text}
            isComplete={todo.isComplete}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
