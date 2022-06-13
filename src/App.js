import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import Home from "Home.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Humanoid from "screens/Humanoid/humanoid";

export default function App() {


  return (
    <Router>
    <Switch>
        <Route exact path="/MS-code-to-give"><Home/></Route>
        <Route exact path='/MS-code-to-give/blog'><Home/></Route>
        <Route exact path='/MS-code-to-give/faq'><Home/></Route>
        <Route exact path='/MS-code-to-give/humanoid'><Humanoid/></Route>
        <Route exact path='/MS-code-to-give/3d'><Home/></Route>
      </Switch>
  
    </Router>
  );
}