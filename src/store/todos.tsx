import { atom, selector } from "recoil";
import { todo, FilterStates, TodoListStats } from "../models/todo";

export const todoListState = atom<todo[]>({
  key: "TodoList",
  default: [
    {
      id: 0,
      text: "Hello!",
      isComplete: true,
    },
  ],
});

export const todoListFilterState = atom<FilterStates>({
  key: "TodoListFilter",
  default: FilterStates.ALL,
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FilterStates.COMPLETED:
        return list.filter((item) => item.isComplete);
      case FilterStates.UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector<TodoListStats>({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
