import configApp from "./app";
import Dashboard from "./../views/Dashboard/Dashboard";
import Profile from "./../views/Profile/Profile";
import CreateForm from "./../views/Form/Create/CreateForm";

export const routes = [
  {
    path: configApp.base,
    exact: true,
    main: Dashboard
  },
  {
    path: configApp.base + "create",
    exact: true,
    main: CreateForm
  },
  {
    path: configApp.base + "profile/:id",
    exact: true,
    main: Profile
  }
];
