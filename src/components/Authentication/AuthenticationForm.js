import React, { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";
import styles from "./AuthenticationForm.module.css";

const AuthenticationForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const authContext = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitionHandler = event => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2Xe41TNsq5x1YcTOaAEDHcy1yjoB9PRM';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2Xe41TNsq5x1YcTOaAEDHcy1yjoB9PRM';
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(data => {
            const errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then(data => {
        authContext.login(data.idToken);
        history.replace("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div style={{ textDecoration: "none" }} className={styles.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        My Booking
      </Link>
      <section className={styles.auth}>
        <p>{isLogin ? "Login" : "Sign Up"}</p>
        <form onSubmit={submitionHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required ref={passwordRef} />
          </div>
          <div className={styles.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Loading...</p>}
            <button
              type="button"
              className={styles.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthenticationForm;
