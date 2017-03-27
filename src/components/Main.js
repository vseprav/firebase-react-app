require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import LoginFormComponent from './login/components/LoginFormComponent'

let dictionary = require('../images/dictionary.gif');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img src={dictionary} alt="dictionary" />
        </div>
        <LoginFormComponent/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
