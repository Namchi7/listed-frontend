import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./components/redux/store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

const baseUrl = window.location.origin;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-mwxflnl7ozu1vx54.us.auth0.com"
    clientId="SeiS8v0fUvkgHpFwhlfnAL31NAGzc7KJ"
    authorizationParams={{
      redirect_uri: `${baseUrl}/dashboard`,
    }}
  >
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </Auth0Provider>
  // </React.StrictMode>
);
