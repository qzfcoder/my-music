import React from "react";
import { Navigate } from "react-router-dom";
const Discover = React.lazy(() => import("@/views/discover"));


const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover></Discover>,
  },
 
];
export default routes;
