import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";

import { taskStatusMap } from "@Library/types";

import type { Status } from "@Library/types";
import { useContext, useDeferredValue, useEffect, useState } from "react";
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
  const value = useDeferredValue<Status>(getTaskStatus(index));

  return (
    <Dropdown
      style={[styles.dropdown]}
      itemTextStyle={[styles.text]}
      containerStyle={[styles.list]}
      selectedTextStyle={[styles.text]}
      placeholderStyle={[styles.list, styles.text]}
      inputSearchStyle={[styles.list]}
      activeColor="#669"
      data={data}
      search={false}
      labelField="label"
      valueField="value"
      value={value}
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
  },
  list: {
    backgroundColor: "#223",
  },
  text: {
    color: "#fff",
  },
});

export default TaskViewStatusDropdown;
