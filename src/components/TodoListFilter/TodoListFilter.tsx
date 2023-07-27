import { useRecoilState } from "recoil";
import { todoListFilterState } from "store/todos";
import { FilterStates } from "models/todo";

function TodoListFilter() {
  const [filterState, setFilterState] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterState(target.value as FilterStates);
  };

  return (
    <>
      Filter:
      <select value={filterState} onChange={updateFilter}>
        <option value={FilterStates.ALL}>All</option>
        <option value={FilterStates.COMPLETED}>Completed</option>
        <option value={FilterStates.UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilter;
