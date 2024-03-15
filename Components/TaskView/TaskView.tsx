import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type taskStatus = { status: "To Do" | "Started" | "In Progress" | "Done" };
type taskView = { title: string, description: string, index?: number };

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const TaskView = ({ title, description, index }: taskView ) => {
    const taskState = useState<taskStatus>({status: "To Do"});
    return (
        <View style={[
            styles.taskView, 
            index ? 
            index % 3 == 1 ? styles.every31 : 
            index % 3 == 2 ? styles.every32 :
            styles.every33 : 
            styles.every31
        ]}>
            <Text style={styles.taskTitle}>{`Task #${index}: ${title}`}</Text>
            <Text style={styles.taskDescription}>{description}</Text>
            <Dropdown
          style={[{ borderColor: 'blue' }]}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={ 'Select item' }
          searchPlaceholder="Search..."
          value={"value"}
          onFocus={() => { return null; }}
          onBlur={() => { return null; }}
          onChange={item => {
            
          }} />
        </View>
    )
}

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
    },
    taskDescription: {
        color: "#fff",
        flex: 1,
        textAlign: "center",
    },
});

export type { taskView };
export default TaskView;