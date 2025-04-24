// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./app";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <App />
      </Provider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);
