import { RecoilRoot } from "recoil";
import {
  TodoList,
  TodoItemCreator,
  TodoListFilter,
  TodoListStats,
} from "./components";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoListFilter />
        <TodoItemCreator />
        <TodoList />
        <TodoListStats />
      </div>
    </RecoilRoot>
  );
}

export default App;
