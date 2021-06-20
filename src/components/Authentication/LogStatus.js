import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import styles from "./LogStatus.module.css";

const LogStatus = () => {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.dispatchLogin();
  };

  const logoutHandler = () => {
    authContext.logout();
  };

  return (
    <div className={styles.logStatus}>
      {!authContext.readyToLogin && (
        <Link
          to={!authContext.isLoggedIn ? "/auth" : "/"}
          style={{ textDecoration: "none" }}
        >
          <div>
            {!authContext.isLoggedIn ? (
              <h1 onClick={loginHandler}>Login</h1>
            ) : (
              <h1 onClick={logoutHandler}>Logοut</h1>
            )}
          </div>
        </Link>
      )}
    </div>
  );
};

export default LogStatus;
