import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Style sheet
import headerStyles from "./Header.module.scss";

function Header(props) {
  const [search, setSearch] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(`searching ${search}`);
    setSearch("");
  }

  return (
    <header>
      <nav className={headerStyles["nav-bar"]}>
        <ul className={headerStyles["menu"]}>
          <NavLink
            to="/"
            className={`${headerStyles["menu-item"]} ${headerStyles.home}`}
          >
            <li>Telly</li>
          </NavLink>
          <div className={headerStyles["item-container"]}>
            <NavLink
              to="/activity"
              className={headerStyles["menu-item"]}
              activeStyle={{ color: "#f5f5f5" }}
            >
              <li>Activity</li>
            </NavLink>
            <NavLink
              to="/shows"
              className={headerStyles["menu-item"]}
              activeStyle={{ color: "#f5f5f5" }}
            >
              <li>Shows</li>
            </NavLink>
            <NavLink
              to="/lists"
              className={headerStyles["menu-item"]}
              activeStyle={{ color: "#f5f5f5" }}
            >
              <li>Lists</li>
            </NavLink>
            <NavLink
              to="/people"
              className={headerStyles["menu-item"]}
              activeStyle={{ color: "#f5f5f5" }}
            >
              <li>People</li>
            </NavLink>
            <form onSubmit={onSubmit} className={headerStyles.search}>
              <input
                type="text"
                placeholder="Search..."
                name="search"
                className={headerStyles["search-bar"]}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit" className={headerStyles["search-btn"]}>
                <i className={`bx bx-search`}></i>
              </button>
            </form>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
