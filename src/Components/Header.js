import React from "react";
import { Link } from "react-router-dom";

// Style sheet
import headerStyles from "./Header.module.scss";

function Header(props) {
  return (
    <header>
      <nav className={headerStyles["nav-bar"]}>
        <ul className={headerStyles["menu"]}>
          <Link
            to="/"
            className={`${headerStyles["menu-item"]} ${headerStyles.home}`}
          >
            <li>Telly</li>
          </Link>
          <div className={headerStyles["item-container"]}>
            <Link
              to="/activity"
              className={`${headerStyles["menu-item"]} ${headerStyles.activity}`}
            >
              <li>Activity</li>
            </Link>
            <Link
              to="/shows"
              className={`${headerStyles["menu-item"]} ${headerStyles.shows}`}
            >
              <li>Shows</li>
            </Link>
            <Link
              to="/lists"
              className={`${headerStyles["menu-item"]} ${headerStyles.lists}`}
            >
              <li>Lists</li>
            </Link>
            <Link
              to="/people"
              className={`${headerStyles["menu-item"]} ${headerStyles.people}`}
            >
              <li>People</li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
