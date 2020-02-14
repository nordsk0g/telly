import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import profileMenuStyles from "./ProfileMenu.module.scss";

function ProfileMenu() {
  return (
    <nav className={profileMenuStyles["nav-bar"]}>
      <NavLink
        to="/activty"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Activity
      </NavLink>
      <NavLink
        to="/shows"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Shows
      </NavLink>
      <NavLink
        to="/diary"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Diary
      </NavLink>
      <NavLink
        to="/profile/reviews"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Reviews
      </NavLink>
      <NavLink
        to="/watchlist"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Watchlist
      </NavLink>
      <NavLink
        to="/lists"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Lists
      </NavLink>
      <NavLink
        to="/likes"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Likes
      </NavLink>
      <NavLink
        to="/tags"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Tags
      </NavLink>
      <NavLink
        to="/network"
        className={profileMenuStyles["nav-item"]}
        activeStyle={{ backgroundColor: "#656e77", color: "#fefefe" }}
      >
        Network
      </NavLink>
    </nav>
  );
}

export default ProfileMenu;
