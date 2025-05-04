import React from "react";

import { ReactComponent as ChevronCompactDownIcon } from "../../../../assets/chevron-compact-down.svg";
import "./Nav.css";
const Nav = () => {
  return (
    <>
      <ul class="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <span className="nav-text-icon">
              Shop
              <ChevronCompactDownIcon className="chevron-icon" />
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            On Sale
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            New Arrivals
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            Brands
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
