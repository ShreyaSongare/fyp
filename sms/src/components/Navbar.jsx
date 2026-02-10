import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ Load user whenever route changes
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <span className="logo-text">SMS Detector</span>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        
        {/* Always Visible */}
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>

        {/* ✅ Show only after login */}
        {user && (
          <>
            <li>
              <Link to="/spam" onClick={toggleMenu}>Spam</Link>
            </li>
            <li>
              <Link to="/harm" onClick={toggleMenu}>Harm</Link>
            </li>
          </>
        )}

        {/* If NOT logged in */}
        {!user ? (
          <>
            <li>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </li>
            <li>
              <Link to="/signup" onClick={toggleMenu}>Signup</Link>
            </li>
          </>
        ) : (
          /* If Logged In → Show Profile */
          <li className="profile-wrapper">
            <div
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              👤
            </div>

            {dropdownOpen && (
              <div className="profile-dropdown">
                <p className="profile-name">
                  {user.name || "User"}
                </p>
                <p className="profile-email">
                  {user.email}
                </p>
                <hr />
                <button
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
