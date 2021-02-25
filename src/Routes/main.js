import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { mainRoutes } from "./mainRoutes";

const Main = () => {
  const renderRoutes = () => {
    const routes = [...mainRoutes];

    return routes.map((route, index) => {
      if (!route.component) {
        return (
          <Route path={route.path} key={index}>
            <Redirect to={route.to} />
          </Route>
        );
      }

      return (
        <Route
          exact={route.path}
          path={route.path}
          component={route.component}
          key={index}
        />
      );
    });
  };

  return <Switch>{renderRoutes()}</Switch>;
};

export default Main;
