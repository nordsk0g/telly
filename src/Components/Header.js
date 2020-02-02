import React from "react";
import { Link } from "react-router-dom";

// Style sheet
import headerStyles from "./Header.module.scss";

function Header(props) {
  return (
    <header>
      <nav>
        <ul className={headerStyles["nav-bar"]}>
          <Link
            to="/"
            className={`${headerStyles["nav-item"]} ${headerStyles.home}`}
          >
            <li>Telly</li>
          </Link>
          <Link
            to="/activity"
            className={`${headerStyles["nav-item"]} ${headerStyles.activity}`}
          >
            <li>Activity</li>
          </Link>
          <Link
            to="/shows"
            className={`${headerStyles["nav-item"]} ${headerStyles.shows}`}
          >
            <li>Shows</li>
          </Link>
          <Link
            to="/lists"
            className={`${headerStyles["nav-item"]} ${headerStyles.lists}`}
          >
            <li>Lists</li>
          </Link>
          <Link
            to="/people"
            className={`${headerStyles["nav-item"]} ${headerStyles.people}`}
          >
            <li>People</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
