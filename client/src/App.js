import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import Home from "Home.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {


  return (
    <Router>
     < Home />
  
    </Router>
  );
}
