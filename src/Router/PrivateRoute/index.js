import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import { getUser } from '../../Utils/common/Common';
import {
  getByRoleRoutes,
  getPath,
} from '../../Utils/common/routes';

const getRoutesAccToRoles = () => {
  let user = getUser()
  const role = Number(user.role);
  return getByRoleRoutes(role).map((route, index) => {
    return (
      <Route
        key={index}
        exact
        path={getPath(route.path)}
        render={(routerProps) => (
          <Layout routerProps={routerProps}>{route.component}</Layout>
        )}
      />
    );
  });
};

export default function PrivateRoute() {
  // if (!getUser()) {
  //   return <Redirect to="/login" />;
  // } 
  // else {
  //   return <Redirect to="/admin/" />;
  // }
  return (
    <>
      {getUser() ? (
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
