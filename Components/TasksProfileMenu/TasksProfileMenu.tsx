import { StyleSheet } from "react-native";

import { View } from "react-native";
import ProfileTab from "./ProfileTab";

const TasksProfileMenu = () => {
  return (
    <View style={[styles.profileMenu]}>
      <ProfileTab profile="Test" />
    </View>
  );
};

const styles = StyleSheet.create({
  profileMenu: {
    width: "100%",
    backgroundColor: "#114",
    height: 85,
    gap: 14,
    padding: 2,
    paddingLeft: 5,
    paddingTop: 18,
  },
});

export default TasksProfileMenu;
