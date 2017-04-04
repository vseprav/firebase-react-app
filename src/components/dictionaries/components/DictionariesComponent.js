'use strict';

import React from 'react';

require('styles/dictionaries/components/Dictionaries.css');

class DictionariesComponent extends React.Component {

  handleChange(e) {
    let state = {};
    state[`${e.target.name}`] = e.target.value;
    this.setState(state);
  }

  saveDictionary() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="dictionaries-component">
        <div className="list-group">
          <a href="#" className="list-group-item active">
            Cras justo odio
          </a>
          <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
          <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
          <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
          <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <input name="dictionary-name" type="text" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter dictionary name"/>
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

export default DictionariesComponent;
