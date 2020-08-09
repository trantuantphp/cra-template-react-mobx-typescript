import React from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import * as RoutePaths from "./paths";
import * as Pages from "pages";

const Routes = () => (
  <Switch>
    <PublicRoute exact path={RoutePaths.APP_LANDING} component={Pages.Landing} />
    <PrivateRoute exact path={RoutePaths.APP_HOME} component={Pages.Home} />
  </Switch>
);

export default Routes;
