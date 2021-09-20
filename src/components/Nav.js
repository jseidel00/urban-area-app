import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const styles = {
    color: "white",
  };
  return (
    <nav>
      <h3>World Urban Areas</h3>
      <ul className="nav-links">
        <Link style={styles} to="/">
          <li>Home</li>
        </Link>
        <Link style={styles} to="/top">
          <li>Top 10</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
