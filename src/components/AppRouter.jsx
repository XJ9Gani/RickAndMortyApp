import { useRoutes } from "react-router-dom";
import { Characters, Episodes, Locations } from "../pages";
export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Characters /> },
    { path: "/locations", element: <Locations /> },
    { path: "/episodes", element: <Episodes /> },
  ]);

  return routes;
}
