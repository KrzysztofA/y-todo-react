import { StyleSheet, ScrollView } from "react-native";
import TaskView from "../TaskView";
import { useContext } from "react";
import TaskContext from "@Context/TasksContext";

const TaskContainer = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <ScrollView style={[styles.taskContainer]}>
      {[...tasks].map((task) => {
        return <TaskView {...task} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    backgroundColor: "#222",
  },
});

export default TaskContainer;
