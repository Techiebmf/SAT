import React from "react";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import App from "../containers/LandingPage";
import Main from "../containers/Main";
import Trails from "../containers/Trails";
import Advice from "../containers/Advice";
import Gear from "../containers/Gear";
import Episodes from "../containers/Episodes";
import About from "../containers/About";

class RouteComp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
          <div>
            <Switch>
              <Route exact path='/main' component={Main} />
              <Route exact path='/' component={App} /> 
              <Route exact path='/trails' component={Trails} /> 
              <Route exact path='/advice' component={Advice} /> 
              <Route exact path='/gear' component={Gear} /> 
              <Route exact path='/episodes' component={Episodes} /> 
              <Route exact path='/about' component={About} /> 
              <Route render={() => <div history={ this.props.history }> Route Not Found </div>}/>
            </Switch>
          </div>          
      </div>)
  }
}

export default withRouter(RouteComp);