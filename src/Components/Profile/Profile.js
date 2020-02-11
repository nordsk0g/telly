import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Imported components
import ProfileMenu from "./ProfileMenu";

// Styles
// Styles
import profileStyles from "./Profile.module.scss";

function Profile() {
  return (
    <Router>
      <div className={profileStyles.content}>
        <ProfileMenu />
      </div>
    </Router>
  );
}

export default Profile;
