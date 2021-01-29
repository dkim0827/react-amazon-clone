import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/login">
            <h1>You want to sign in?</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
