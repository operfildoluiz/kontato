import configApp from "./app";
import Dashboard from "./../views/Dashboard/Dashboard";

export const routes = [
  {
    path: configApp.base,
    exact: true,
    main: Dashboard
  }
];
