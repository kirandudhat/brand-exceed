import React from "react";
import { Redirect, Route } from "react-router";
import { getUser } from "../../Utils/common/Common";
import { getBasePath } from "../../Utils/common/routes";

export default function PublicRoute({ children, ...routerProps }) {
  if (getUser()) {
    return <Redirect to={'/admin/'} />;
  }

  return <Route {...routerProps}>{children}</Route>;
}
