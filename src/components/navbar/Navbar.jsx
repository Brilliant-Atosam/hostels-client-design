import "./navbar.css";
import {
  AccountCircleOutlined,
  KeyboardBackspace,
  MenuRounded,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMbSearch, setShowMbSearch] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSearch = () => setShowMbSearch(!showMbSearch);
  return (
    <>
      {!showMbSearch ? (
        <div className="nav-container container flex px20">
          <div className="logo">
            <Link to="/">
              <h1>logo</h1>
            </Link>
          </div>
          <div className="search-container flexXC">
            <input
              type="text"
              placeholder="Search hostel by name or unique code..."
              className="search-input px10"
            />
            <Search className="pointer" />
          </div>
          <div className="nav-items">
            <ul
              className={showMenu ? "flex nav-list show-menu" : "flex nav-list"}
            >
              <Link to="/hostels">
                <li className="nav-item">Hostels</li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">Contact</li>
              </Link>
              {showMenu ? (
                <Link to="/accounts">
                  <li className="nav-item">Accounts</li>
                </Link>
              ) : (
                <Link to="/accounts">
                  <li className="nav-item flex account">
                    Accounts <AccountCircleOutlined className="nav-icon" />
                  </li>
                </Link>
              )}

              <li className="nav-item mb-only">Contact</li>
              <li className="nav-item mb-only">Contact</li>
              <li className="nav-item mb-only">Contact</li>
              <li className="nav-item mb-only">Contact</li>
              <li className="nav-item mb-only">Contact</li>
            </ul>
          </div>
          <Search className="pointer mr10 menu-icon" onClick={toggleSearch} />
          <AccountCircleOutlined className="nav-icon-mb mr10 menu-icon" />
          <MenuRounded className="menu-icon" onClick={toggleMenu} />
        </div>
      ) : (
        <div className="mb-search-container flexXC">
          <KeyboardBackspace className="pointer" onClick={toggleSearch} />
          <input
            type="text"
            placeholder="Search hostel by name or unique code..."
            className="search-input px10"
          />
          <Search className="pointer" />
        </div>
      )}
    </>
  );
};

export default Navbar;
