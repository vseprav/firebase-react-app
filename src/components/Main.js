require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import LoginFormComponent from './login/components/LoginFormComponent';
import DictionariesComponent from './dictionaries/components/DictionariesComponent';
import HomeComponent from './home/components/HomeComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/dictionaries" component={DictionariesComponent}/>
            <Route path="/login" component={LoginFormComponent}/>
          </div>
        </Router>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
