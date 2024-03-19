import React from "react";

const ProfileContext = React.createContext({
  profile: "Default",
  setProfile: (profile: string) => {},
});

export default ProfileContext;
