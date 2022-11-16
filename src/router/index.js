import React from "react";
import { Navigate } from "react-router-dom";
const Discover = React.lazy(() => import("@/views/discover"));
const Playlist = React.lazy(() => import("@/views/playlist"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover></Discover>,
  },
  {
    path: "/playlist",
    element: <Playlist></Playlist>,
  },
];
export default routes;
