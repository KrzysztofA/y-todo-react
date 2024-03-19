type Status = "To Do" | "Started" | "In Progress" | "Done";

const taskStatusMap = {
  ToDo: "To Do",
  Started: "Started",
  InProgress: "In Progress",
  Done: "Done",
};

const taskStatusMapReverse = {
  "To Do": "ToDo",
  Started: "Started",
  "In Progress": "InProgress",
  Done: "Done",
};

type TaskData = {
  title: string;
  description: string;
  date: Date;
  status: Status;
};

type Task = TaskData & {
  index: number;
};

type StatusState = {
  index: number;
  status: Status;
};

export type { Status, Task, TaskData, StatusState };
export { taskStatusMap, taskStatusMapReverse };
