import { useEffect, useState } from "react";
import { Status, Task, StatusState, TaskData } from "@Library/types";
import taskSort from "@Library/taskSort";
import useUpdateEffect from "./useUpdateEffect";

const useTasksReducer = (profile: string) => {
  const [tasks, setTasksArray] = useState<Array<Task>>(new Array<Task>());
  const [taskStatus, setTaskStatus] = useState<StatusState>({ index: 0, status: "To Do" });

  const changeTaskStatus = (index: number, state: Status) => {
    setTaskStatus({ index: index, status: state });
  };

  const getTaskStatus = (index: number) => {
    return tasks[index].status;
  };

  useUpdateEffect(() => {
    setTasksArray(() => {
      return tasks
        .map((task, index) => {
          if (index == taskStatus.index) task.status = taskStatus.status;
          return task;
        })
        .sort(taskSort)
        .map((task, index) => {
          return { ...task, index: index + 1 };
        });
    });
  }, [taskStatus, setTasksArray]);

  // Fetch tasks profile
  useEffect(() => {
    let tasksData: Array<TaskData> = [
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 5, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
    ];
    let tasksArr: Array<Task> = tasksData.sort(taskSort).map((taskData, index) => {
      return { ...taskData, index: index + 1 };
    });

    setTasksArray(() => tasksArr);
  }, [setTasksArray]);

  return { tasks: tasks, changeTaskStatus: changeTaskStatus, getTaskStatus: getTaskStatus };
};

export default useTasksReducer;
