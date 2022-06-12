import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import Home from "Home.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "screens/chatbot/dialogflow/Chat";
import Humanoid from "screens/Humanoid/humanoid";

export default function App() {


  return (
    <Router>
    <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path='/blog'><Chat/></Route>
        <Route exact path='/faq'><Home/></Route>
        <Route exact path='/humanoid'><Humanoid/></Route>
        <Route exact path='/3d'><Home/></Route>
      </Switch>
  
    </Router>
  );
}
