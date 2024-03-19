import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";

import { taskStatusMap } from "@Library/types";

import type { Status, StatusState } from "@Library/types";
import { SetStateAction, Dispatch, useContext } from "react";
import TaskContext from "@Context/TasksContext";

type statusData = {
  label: string;
  value: Status;
};

const data: Array<statusData> = [
  { label: taskStatusMap.ToDo, value: "To Do" },
  { label: taskStatusMap.Started, value: "Started" },
  { label: taskStatusMap.InProgress, value: "In Progress" },
  { label: taskStatusMap.Done, value: "Done" },
];

const TaskViewStatusDropdown = ({ index }: { index: number }) => {
  const { changeTaskStatus, getTaskStatus } = useContext(TaskContext);
  return (
    <Dropdown
      style={[styles.dropdown]}
      data={data}
      search={false}
      labelField="label"
      valueField="value"
      value={getTaskStatus(index)}
      onFocus={() => {
        return null;
      }}
      onBlur={() => {
        return null;
      }}
      onChange={(item) => {
        changeTaskStatus(index, item.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: "80%",
    width: "10%",
    color: "#fff",
  },
});

export default TaskViewStatusDropdown;
