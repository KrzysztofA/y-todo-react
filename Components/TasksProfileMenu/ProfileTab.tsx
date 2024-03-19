import { View, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import ProfileContext from "@Context/ProfileContext";

const ProfileTab = ({ profile }: { profile: string }) => {
  const { setProfile } = useContext(ProfileContext);

  return (
    <View style={styles.profileTab}>
      <Button
        title={profile}
        color={"#ca4445"}
        onPress={() => {
          setProfile(profile);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileTab: {
    marginLeft: 7,
    marginBottom: 2,
    marginTop: 6,
    maxWidth: 200,
    borderRadius: 10,
    padding: 4,
    borderWidth: 2,
    borderColor: "#fff",
  },
});

export default ProfileTab;
