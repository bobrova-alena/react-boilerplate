import { RouteItem, routes } from 'src/app/routes';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

export const AppRoutes = (): JSX.Element => {
  const getElement = (routeProps: RouteItem): JSX.Element => {
    return <routeProps.element />;
  };

  return (
    <>
      <Routes>
        {routes.map(({ ...routeProps }) => (
          <Route
            key={routeProps.path}
            path={routeProps.path}
            element={getElement(routeProps)}
          />
        ))}
      </Routes>
    </>
  );
};
