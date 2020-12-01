import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/checkout">Checkout</Route>
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
