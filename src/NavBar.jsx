import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div class="container-fluid p-4" id="MainHeader">
        <h1>FranBook</h1>
      </div>
      <div class="homeNav">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <Link to="/">
                  <i class="fa fa-home" aria-hidden="true"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/Profile">
                  <i class="fa fa-user" aria-hidden="true"></i> Profile
                </Link>
              </li>
              <li>
                <Link to="/Settings">
                  <i class="fa fa-cog" aria-hidden="true"></i> Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
