'use strict';

import React from 'react';
import {addDictionary} from '../../../actions/action';
import {connect} from 'react-redux';

require('styles/dictionaries/components/Dictionaries.css');

class DictionariesComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dictionary_name:''
    }
  }

  handleChange(e) {
    let state = {};
    state[`${e.target.name}`] = e.target.value;
    this.setState(state);
  }

  saveDictionary() {
    this.props.addDictionary(this.state['dictionary_name']);
    this.setState({dictionary_name:''});
  }

  render() {

    let listItems = null;
    if (this.props.dictionaries.dictionaries) {
      listItems = this.props.dictionaries.dictionaries.map((d) =>
        <div key={d.toString()}>
          <a href="#" className="list-group-item list-group-item-action">{d}</a>
        </div>
      );
    }

    return (
      <div className="dictionaries-component">
        <div className="list-group">
          {listItems}
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <input name="dictionary_name"
                     type="text"
                     value={this.state.dictionary_name}
                     onChange={this.handleChange.bind(this)}
                     className="form-control"
                     placeholder="Enter dictionary name"/>
            </div>
            <div className="col-4">
              <button onClick={this.saveDictionary.bind(this)} type="button" className="btn btn-primary">Add Dictionary</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DictionariesComponent.displayName = 'DictionariesComponentsDictionariesComponent';

// Uncomment properties you need
// DictionariesComponent.propTypes = {};
// DictionariesComponent.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    dictionaries: state.dictionaries
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addDictionary: (dictionary) => {
      dispatch(addDictionary(dictionary));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DictionariesComponent);

