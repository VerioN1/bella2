import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import './styles.css'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage>
            </HomePage>
        </Route>
      </Switch>
    </Router>
  );
}
