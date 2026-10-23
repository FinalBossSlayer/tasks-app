import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// This is not the original index.js, that one was missing (don't know how). Also some of the site looks weird, so I don't now what happend XD
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
