import { Status, Task, TaskData } from "./types";

const map: Map<Status | undefined, number> = new Map([
  ["In Progress", 1],
  ["Started", 2],
  ["To Do", 3],
  ["Done", 4],
]);

const taskSort = (a: Task | TaskData, b: Task | TaskData): number => {
  if (a.status == b.status) return a.date && b.date ? a.date.getTime() - b.date.getTime() : 0;
  else {
    const a_val = map.get(a.status);
    const b_val = map.get(b.status);
    const res = (a_val ? a_val : 0) - (b_val ? b_val : 0);
    return res;
  }
};

export default taskSort;
