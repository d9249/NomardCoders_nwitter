import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import firebase from "./fbInstance";
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
