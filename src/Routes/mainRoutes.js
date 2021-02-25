import { lazy } from "react";

const HomePage = lazy(() => import(/* webpackChunkName: "Home" */ "../pages/Home"));
const mainRoutes = [
  {
    path: "/",
    component: HomePage,
  },
];


export { mainRoutes };
