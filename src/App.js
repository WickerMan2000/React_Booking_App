import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import Header from "./components/BasicComponents/Header";
import Body from "./components/BasicComponents/Body";
import HotelList from "./components/BodyComponents/HotelList";
import AuthContext from "./components/Authentication/AuthContext";
import AuthenticationForm from "./components/Authentication/AuthenticationForm";
import SubmissionForm from "./components/Form/SubmissionForm";
import "./App.css";

function App() {
  const authContex = useContext(AuthContext);

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Body />
          <HotelList />
        </Route>
        {!authContex.readyToLogin && (
          <Route path="/auth">
            <AuthenticationForm />
          </Route>
        )}
        {authContex.isLoggedIn && (
          <Route path="/form">
            <SubmissionForm />
          </Route>
        )}
        {!authContex.readyToLogin && (
          <Route path="*" exact>
            <Redirect to="/" />
          </Route>
        )}
      </Switch>
    </React.Fragment>
  );
}

export default App;
