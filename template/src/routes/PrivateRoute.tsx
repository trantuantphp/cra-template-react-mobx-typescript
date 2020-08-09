import React, { FC, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { APP_LANDING } from "./paths";
import { AuthStoreInterface } from "mobxM/stores/AuthStore";
import { AUTH_LOGGED_IN, AUTH_LOGGED_OUT } from "helpers/constants";

interface PrivateRouteProps extends RouteProps {
  AuthStore?: AuthStoreInterface;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ ...restProps }) => {
  const { auth_status } = restProps.AuthStore;
  console.log(auth_status);
  if (auth_status === AUTH_LOGGED_IN) {
    return (
      <Fragment>
        <Route {...restProps} />
      </Fragment>
    );
  } else if (auth_status === AUTH_LOGGED_OUT) {
    return <Redirect to={{ pathname: APP_LANDING }} />;
  }
};

export default inject("AuthStore")(observer(PrivateRoute));
