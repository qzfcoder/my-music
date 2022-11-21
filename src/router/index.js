import React from "react";
import { Navigate } from "react-router-dom";
const Discover = React.lazy(() => import("@/views/discover"));
const Playlist = React.lazy(() => import("@/views/playlist"));
const Leaderboard = React.lazy(() => import("@/views/leaderboard"));
const SongList = React.lazy(() => import("@/views/songList"));

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
  {
    path: "/leaderboard",
    element: <Leaderboard></Leaderboard>,
  },
  {
    path: "/songList",
    element: <SongList></SongList>,
  },
];
export default routes;
