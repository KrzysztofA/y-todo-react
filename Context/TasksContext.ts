import { Status, Task } from "@Library/types";
import React from "react";

type TaskContextType = {
  tasks: Array<Task>;
  changeTaskStatus: (index: number, status: Status) => void;
  getTaskStatus: (index: number) => Status;
};

const TaskContext = React.createContext<TaskContextType>({
  tasks: new Array<Task>(),
  changeTaskStatus: (index: number, status: Status) => {},
  getTaskStatus(index: number) {
    return "To Do";
  },
});

export default TaskContext;
