import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom"

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './porfolio/portfolio-detail';
import noMatch from './pages/no-match';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <h1>Eduardo Sanchez</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sobre-mi" component={About} />
              <Route path="/contacto" component={Contact} />
              <Route path="/blogs" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={noMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
