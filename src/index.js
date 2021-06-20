import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./components/Authentication/AuthContext";
import store from "./Store/index";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
