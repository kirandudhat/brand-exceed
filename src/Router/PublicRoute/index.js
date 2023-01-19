import React from "react";
import { Redirect, Route } from "react-router";
import { getUser } from "../../Utils/common/Common";

export default function PublicRoute({ children, ...routerProps }) {
  const { path } = routerProps;
  if (getUser() && path !== '/response') {
    return <Redirect to={'/login'} />;
  }

  return <Route {...routerProps}>{children}</Route>;
}
