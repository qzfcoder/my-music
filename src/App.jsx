import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./router";
import AppHeader from "@/components/AppHeader";
import AppFooter from "./components/AppFooter";
import MusicPlay from "./components/MusicPlay";

const App = memo((props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <AppHeader></AppHeader>
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
      <MusicPlay></MusicPlay>
    </div>
  );
});

App.propTypes = {};

export default App;
