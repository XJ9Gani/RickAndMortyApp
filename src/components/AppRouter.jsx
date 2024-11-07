import { useRoutes } from "react-router-dom";
import {
  Characters,
  Episodes,
  Locations,
  CharacterInfoPage,
  AuthPage,
  LocationInfoPage,
} from "../pages";

export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <AuthPage /> },
    { path: "/characters", element: <Characters /> },
    { path: "/locations", element: <Locations /> },
    { path: "/episodes", element: <Episodes /> },
    { path: "/characters/:id", element: <CharacterInfoPage /> },
    { path: "/location/:id", element: <LocationInfoPage /> },
  ]);

  return routes;
}
