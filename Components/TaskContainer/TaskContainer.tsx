import { View, StyleSheet } from "react-native";
import TaskView from "../TaskView";

import type { taskView } from "../TaskView/TaskView";

const TaskContainer = ({tasks} : {tasks: Array<taskView>}) => {
    return <View style={[styles.taskContainer]}>{
        tasks.map((task, index) => { 
            return <TaskView { ...task } index={index + 1} />;
         }) 
        }
        </View>
};

const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        backgroundColor: '#222',
    }
});

export default TaskContainer;