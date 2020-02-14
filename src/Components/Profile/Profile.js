import React, { forceUpdate } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";

// Imported components
import ProfileMenu from "./ProfileMenu";
import Reviews from "../Reviews/Reviews";

// Styles
// Styles
import profileStyles from "./Profile.module.scss";

function Profile() {
  return (
    <Router>
      <div className={profileStyles.content}>
        <ProfileMenu />

        <Route exact path="/profile/reviews" render={() => <Reviews />} />
      </div>
    </Router>
  );
}

export default Profile;
