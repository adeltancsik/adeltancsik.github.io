import React from "react";
import ReactDOM from "react-dom";
// don't comment this out in development mode! only when it's ready to be deployed. + change href from style.min.css to style.css in dev mode + npm run watch:sass
// import "./assets/css/icon-font.css";
import "./assets/css/style.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
