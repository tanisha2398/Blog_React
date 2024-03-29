import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { Link, NavLink } from "react-router-dom";
export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="header-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Blogger</h1>
        </Link>
        <NavLink
          className="link"
          to="/dashboard"
          activeClassName="is-active"
          exact={true}
        >
          Dashboard
        </NavLink>
        <NavLink className="link" to="/create" activeClassName="is-active">
          Add Blog
        </NavLink>

        <button className="button--link" onClick={startLogout}>
          <h3>Logout</h3>
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
