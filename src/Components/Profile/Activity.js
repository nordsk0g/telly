import React, { forceUpdate } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";

// Imported components
import ProfileMenu from "./ProfileMenu";
import Reviews from "../Reviews/Reviews";
import Show from "../Show/Show";

// Styles
// Styles
import activityStyles from "./Activity.module.scss";

function Activity() {
  return (
    <div className={activityStyles.content}>
      <ProfileMenu />

      <Route exact path="/activity/shows/reviews" render={() => <Reviews />} />
    </div>
  );
}

export default Activity;
