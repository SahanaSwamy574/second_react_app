import React from "react";
import ReactDOM from "react-dom";
"use strict";
import Search from "./Search";
import "./styles.css";

function App() {
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: "App"
    },
    /*#__PURE__*/ _react.default.createElement(_Search.default, null)
  );
}

const rootElement = document.getElementById("root");

_reactDom.default.render(
  /*#__PURE__*/ _react.default.createElement(App, null),
  rootElement
);