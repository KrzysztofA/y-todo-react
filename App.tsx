import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import TaskContainer from './Components/TaskContainer';

export default function App() {
  return (
    <View style={[styles.mainView]}>
      <TaskContainer tasks={[ 
        { title: "Important Task", description: "Something very important you need to do" },
        { title: "Important Task", description: "Something very important you need to do" },
        { title: "Important Task", description: "Something very important you need to do" },
        { title: "Important Task", description: "Something very important you need to do" },
        { title: "Important Task", description: "Something very important you need to do" },
        { title: "Important Task", description: "Something very important you need to do" },
      ]}
      />
      <View style={[styles.addTaskButton]}>
        <Button title="Add new task"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  taskText: {
    color: '#fff',
  },
  addTaskButton: {
    position: "relative",
    width: "100%",
  },
});
