'use strict';

import React from 'react';
import getFireBaseApp from '../../../firebase/firebase';
let dictionary = require('../../../images/dictionary.gif');
import {connect} from 'react-redux';
import {userLogin} from '../../../actions/action';

require('styles/login/components/LoginForm.css');

class LoginFormComponent extends React.Component {

  login(e) {
    e.preventDefault();
    this.props.userLogin(true);
    getFireBaseApp().auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.userLogin(true);
        location.assign('/dictionaries');
      })
      .catch((error) => {
        window.console.error(error.message);
      });
  }

  handleChange(e) {
    let state = {};
    state[`${e.target.name}`] = e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className="loginform-component">
        <div className="logo">
          <img src={dictionary} alt="dictionary" />
        </div>
        <h2>Pocket Dictionary</h2>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input name="email" type="email" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" onChange={this.handleChange.bind(this)} className="form-control" id="password" placeholder="Password"/>
          </div>
          <button onClick={this.login.bind(this)} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

LoginFormComponent.displayName = 'LoginComponentsLoginFormComponent';

// Uncomment properties you need
// LoginFormComponent.propTypes = {};
// LoginFormComponent.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    fireBaseUser: state.fireBaseUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (isLogin) => {
      dispatch(userLogin(isLogin));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
