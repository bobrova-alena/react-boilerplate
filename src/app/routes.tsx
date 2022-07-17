import loadable from '@loadable/component';
import React from 'react';

const Home = loadable(() => import('./pages/home'));

export type RouteName = 'Home';

export type RouteItem = {
  path: string;
  element: () => JSX.Element;
  name: RouteName;
};

export const routes: Array<RouteItem> = [
  {
    path: '/home',
    element: () => <Home />,
    name: 'Home',
  },
];
