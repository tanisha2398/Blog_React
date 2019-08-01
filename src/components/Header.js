import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { Link, NavLink } from "react-router-dom";
export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Blogger</h1>
        </Link>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
          Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active">
          Add Blog
        </NavLink>

        <button className="button button--link" onClick={startLogout}>
          Logout
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
