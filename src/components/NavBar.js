import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <ul class="nav">
      <li class="nav-item">
        <Link to="/">
          <img
            src={
              "https://e7.pngegg.com/pngimages/769/375/png-clipart-chocolate-chip-cookie-biscuits-christmas-cookie-gingerbread-man-cookies-logo-food-cake.png"
            }
            width="50"
          />
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/productlist">
          Product List
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
