import { StyleSheet, View, Text } from "react-native";

import type { Task } from "@Library/types";
import TaskViewStatusDropdown from "./TaskViewStatusDropdown";

const TaskView = ({ title, description, index, date }: Task) => {
  return (
    <View
      style={[
        styles.taskView,
        index ? (index % 3 == 1 ? styles.every31 : index % 3 == 2 ? styles.every32 : styles.every33) : styles.every31,
      ]}
    >
      <Text style={styles.taskTitle}>{`Task #${index}: ${title}`}</Text>
      <Text style={styles.taskTitle}>
        {date ? `${date?.getDate()}/${date?.getMonth()}/${date?.getFullYear()}` : "W/O Deadline"}
      </Text>
      <Text style={styles.taskDescription}>{description}</Text>
      <TaskViewStatusDropdown index={index - 1} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 12,
  },
  every31: {
    backgroundColor: "#31314A",
  },
  every32: {
    backgroundColor: "#4A3131",
  },
  every33: {
    backgroundColor: "#314A31",
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    width: "20%",
  },
  taskDescription: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
});

export default TaskView;
