import type { RouteObject } from "react-router-dom";
import Layout from "../pages/layout";
import NoMatch from "../pages/no-match";
const Routers: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <NoMatch />}
    ]
  }
];

export default Routers;