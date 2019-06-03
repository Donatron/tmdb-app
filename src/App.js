import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/movie-detail/:id" exact component={MovieDetail} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;