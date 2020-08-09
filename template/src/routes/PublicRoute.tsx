import React, { FC, Fragment } from "react";
import { Route, RouteProps } from "react-router-dom";

const PublicRoute: FC<RouteProps> = ({ ...restProps }) => {
  return (
    <Fragment>
      <Route {...restProps} />
    </Fragment>
  );
};

export default PublicRoute;
