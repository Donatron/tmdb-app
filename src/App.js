import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import CastDetail from "./components/CastDetail";
import CrewDetail from "./components/CrewDetail";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Switch>
              <Route path="/crew-detail/:id" exact component={CrewDetail} />
              <Route path="/cast-detail/:id" exact component={CastDetail} />
              <Route path="/movie-detail/:id" exact component={MovieDetail} />
              <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
