import { useRecoilState } from "recoil";
import { todo } from "../../models/todo";
import { todoListState } from "../../store/todos";
import { replaceItemAtIndex, removeItemAtIndex } from "../../utils/array";

function TodoItem({ id, text, isComplete }: todo) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === id);

  const editItemText = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      id,
      isComplete,
      text: target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      id,
      text,
      isComplete: !isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={text} onChange={editItemText} />

      <div>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={toggleItemCompletion}
        />

        {isComplete ? "Completed" : "Incompleted"}
      </div>

      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default TodoItem;
