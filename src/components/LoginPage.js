import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Blogger</h1>
        <p>
          Sometimes good things fall apart, so better things can fall together
        </p>
        <button className="button button--secondary" onClick={startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
