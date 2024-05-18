import { useEffect, useState } from "react";
import { Status, Task, StatusState, TaskData } from "@Library/types";
import taskSort from "@Library/taskSort";
import useUpdateLayoutEffect from "./useUpdateLayoutEffect";

const useTasksReducer = (profile: string) => {
  const [tasks, setTasksArray] = useState<Array<Task>>(new Array<Task>());
  const [taskStatus, setTaskStatus] = useState<StatusState>({ index: 0, status: "To Do" });

  const changeTaskStatus = (index: number, state: Status) => {
    setTaskStatus({ index: index, status: state });
  };

  const getTaskStatus = (index: number) => {
    return tasks[index].status;
  };

  useUpdateLayoutEffect(() => {
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
        title: "Important Task12",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task32",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task1",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Task2",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskas",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskczx",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskfqw",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskbewq",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskqre",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskqqqqq",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskqwwq",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Importantaa Taskqq",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskasas",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskzzzzzzzzc",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskaaaaaas",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskzzzzzzcxz",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskcxzzzzzz",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskcxzcxzcxz",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskqwfqwf",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskqwffwqa",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskasdsaf",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskqweqw",
        description: "Something very important you need to do",
        date: new Date(2025, 5, 15),
        status: "To Do",
      },
      {
        title: "Important Taskzzzzzz",
        description: "Something very important you need to do",
        date: new Date(2025, 3, 15),
        status: "To Do",
      },
      {
        title: "Important Taskwqewwqwe",
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
