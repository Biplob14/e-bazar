import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header component */}
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            {/* Home Component */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;