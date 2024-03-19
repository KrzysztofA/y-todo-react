import { View, Text, ScrollView, StyleSheet, Button, Modal } from "react-native";
import { useState } from "react";

import TaskModalEditMode from "./TaskModalEditMode";
import TaskModalViewMode from "./TaskModalViewMode";

type TaskModalState = "Edit" | "View";

const TaskModal = () => {
  const [modalState, setModalState] = useState<TaskModalState>("View");

  return (
    <View style={[styles.TaskModal]}>
      <Modal>
        <View>
          <Text>Name</Text>
        </View>
        <ScrollView>{modalState == "View" ? <TaskModalViewMode /> : <TaskModalEditMode />}</ScrollView>
        <View>
          <Button
            title={modalState == "View" ? "Edit" : "View"}
            onPress={() => {
              modalState == "View" ? setModalState("Edit") : setModalState("View");
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  TaskModal: {},
});

export default TaskModal;
