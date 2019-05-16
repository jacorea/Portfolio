import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

import Navigation from '../Navigation'

//imported Routes to component mapping
import Home from '../Home'
import Contact from '../Contact'
import About from '../About'
import Portfolio from '../Portfolio'
import * as ROUTES from '../../constants/routes'





class App extends Component {
  render(){
    return(
    <div>
    <Navigation />
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}/>
        <Route path={ROUTES.CONTACT} component={Contact}/>
        <Route path={ROUTES.ABOUT} component={About}/>
        <Route path={ROUTES.PORTFOLIO} component={Portfolio}/>
      </Switch>
    </Router>
    </div>
    )
  }
 
}

export default App;