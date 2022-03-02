import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";



class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-style shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Dog <i className="bi bi-fingerprint"></i> it
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              {user?.biz && (
                <>
                  <li className="nav-item">
                    <NavLink to="/my-cards" className="nav-link">
                      My Cards
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/create-card" className="nav-link">
                      Create-Card
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
              {user ? (
                <li className="nav-item">
                  
                  <NavLink to="/logout" className="nav-link">
                    Sign Out 
                  </NavLink>
                </li>
                
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signup-biz" className="nav-link">
                      Business Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
