import React, { createContext, useContext } from "react";
import AppContext from './AppContext'
const NavBar = () => {
  const [state] = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/discussion">
                Discussion
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                href="/turnament"
                tabIndex="-1"
                aria-disabled="true"
              >
                Tournaments
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                href="/debate"
                tabIndex="-1"
                aria-disabled="true"
              >
                Debate
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <a
              href="/signin"
              className="btn btn-primary btn-lg"
              role="button"
              aria-disabled="true"
            >
              {state.isUserLogin ? "Logout" : "SignIn"}
            </a>
            {/* <a href="/signin" class="btn btn-primary btn-lg" role="button" aria-disabled="true">Account</a> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
