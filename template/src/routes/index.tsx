import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const RouterWrapper = () => (
  <React.Fragment>
    <Router>
      <Routes />
    </Router>
  </React.Fragment>
);

export default RouterWrapper;
