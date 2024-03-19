import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import TaskContainer from "@Components/TaskContainer";
import AddTaskButton from "@Components/AddTaskButton";
import TasksProfileMenu from "@Components/TasksProfileMenu";
import TaskContext from "@Context/TasksContext";
import useTasksReducer from "@Hooks/useTasksReducer";

const App = () => {
  const { tasks, changeTaskStatus, getTaskStatus } = useTasksReducer("");

  return (
    <View style={[styles.mainView]}>
      <TasksProfileMenu />
      <TaskContext.Provider value={{ tasks: tasks, changeTaskStatus: changeTaskStatus, getTaskStatus: getTaskStatus }}>
        <TaskContainer />
      </TaskContext.Provider>
      <AddTaskButton />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  taskText: {
    color: "#fff",
  },
  addTaskButton: {
    position: "relative",
    width: "100%",
  },
});

export default App;
