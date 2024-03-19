import { View, Button, StyleSheet } from "react-native";

const AddTaskButton = () => {
  return (
    <View style={[styles.addTaskButton]}>
      <Button title="Add new task" />
    </View>
  );
};

const styles = StyleSheet.create({
  addTaskButton: {
    position: "relative",
    width: "100%",
  },
});

export default AddTaskButton;
