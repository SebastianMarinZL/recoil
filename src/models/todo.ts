export type todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export enum FilterStates {
  "ALL" = "SHOW_ALL",
  "COMPLETED" = "SHOW_COMPLETED",
  "UNCOMPLETED" = "SHOW_UNCOMPLETED",
}

export type TodoListStats = {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
};
