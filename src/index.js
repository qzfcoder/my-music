import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.less";
import "normalize.css";
import "@/assets/css/index.less";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
import theme from "./assets/theme";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback="lodings">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
