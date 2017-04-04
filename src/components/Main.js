require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import LoginFormComponent from './login/components/LoginFormComponent';
import DictionariesComponent from './dictionaries/components/DictionariesComponent';
import HomeComponent from './home/components/HomeComponent';
import {connect} from 'react-redux';
import getFireBaseApp from '../firebase/firebase';
import {userLogout} from '../actions/action';

class AppComponent extends React.Component {
  render() {
    let nav = null;
    if (this.props.fireBaseUser.isLogin) {
      nav = this.getNavigation();
    }

    return (
      <div className='container'>
        <Router>
          <div>
            {nav}
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/dictionaries' component={DictionariesComponent}/>
            <Route path='/login' component={LoginFormComponent}/>
          </div>
        </Router>
      </div>
    );
  }

  getNavigation() {
    return (
    <div className="card navigation">
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/dictionaries">Dictionaries</Link></li>
        <li className="nav-item"><a className="nav-link" onClick={this.logOut.bind(this)} href="#">Logout</a></li>
      </ul>
    </div>
    );
  }

  logOut(e) {
    e.preventDefault();
    getFireBaseApp().auth().signOut().then(() =>{
      this.props.userLogout(false);
      location.assign('/login');
    }).catch((error) =>{
      window.console.error(error.message);
    });
  }

}

AppComponent.defaultProps = {
};

const mapStateToProps = (state) => {
  return {
    fireBaseUser: state.fireBaseUser
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (isLogin) => {
      dispatch(userLogout(isLogin));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
