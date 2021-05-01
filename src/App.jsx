import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Home/Landing";
import './styles.css'
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing>
            </Landing>
        </Route>
      </Switch>
    </Router>
  );
}
