import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import profileMenuStyles from "./ProfileMenu.module.scss";

function ProfileMenu() {
  return (
    <nav className={profileMenuStyles["nav-bar"]}>
      <NavLink
        exact
        to="/activity"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Activity
      </NavLink>
      <NavLink
        exact
        to="/activity/shows"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Shows
      </NavLink>
      <NavLink
        exact
        to="/activity/diary"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Diary
      </NavLink>
      <NavLink
        exact
        to="/activity/shows/reviews"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Reviews
      </NavLink>
      <NavLink
        exact
        to="/activity/watchlist"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Watchlist
      </NavLink>
      <NavLink
        exact
        to="/activity/lists"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Lists
      </NavLink>
      <NavLink
        exact
        to="/activity/likes"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Likes
      </NavLink>
      <NavLink
        exact
        to="/activity/tags"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Tags
      </NavLink>
      <NavLink
        exact
        to="/activity/network"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Network
      </NavLink>
    </nav>
  );
}

export default ProfileMenu;
