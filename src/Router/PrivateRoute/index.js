import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import { getUser } from '../../Utils/common/Common';
import {
  getBasePath,
  getByRoleRoutes,
  getPath,
} from '../../Utils/common/routes';

export default function PrivateRoute() {
  if (!getUser()) {
    return <Redirect to="/login" />;
  }

  const getRoutesAccToRoles = () => {
    const role = 1;

    return getByRoleRoutes(role).map((route, index) => {
      console.log("routes",route)
      return (
        <Route
          key={index}
          exact
          path={getPath(route.path, getBasePath(role))}
          render={(routerProps) => (
            <Layout routerProps={routerProps}>{route.component}</Layout>
          )}
        />
      );
    });
  };

  return (
    <>
      {getUser()? (
        <Switch>
          {getRoutesAccToRoles()}
          <Route path="*">
            <div>Not Found</div>
          </Route>
        </Switch>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
