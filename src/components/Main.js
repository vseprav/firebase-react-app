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

class AppComponent extends React.Component {
  render() {
    let nav = null;
    if (this.props.fireBaseUser.isLogin) {
      nav = <ul><li><Link to="/">Home</Link></li><li><Link to="/dictionaries">Dictionaries</Link></li></ul>;
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
}

AppComponent.defaultProps = {
};

const mapStateToProps = (state) => {
  return {
    fireBaseUser: state.fireBaseUser
  };
};

export default connect(mapStateToProps)(AppComponent);
