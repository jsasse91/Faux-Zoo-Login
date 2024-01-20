// The first two imports were done by default by React
import React from "react";
import ReactDOM from "react-dom/client";
// Importing my nav file so that the content can be used
import Navigation from "./Nav";
// Importing my login file so that the content can be used
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navigation />
    <Login />
  </>
);
