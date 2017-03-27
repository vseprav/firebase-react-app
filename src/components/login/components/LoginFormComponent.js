'use strict';

import React from 'react';

require('styles/login/components/LoginForm.css');

class LoginFormComponent extends React.Component {
  render() {
    return (
      <div className="loginform-component">
        <h2>Pocket Dictionary</h2>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

LoginFormComponent.displayName = 'LoginComponentsLoginFormComponent';

// Uncomment properties you need
// LoginFormComponent.propTypes = {};
// LoginFormComponent.defaultProps = {};

export default LoginFormComponent;
