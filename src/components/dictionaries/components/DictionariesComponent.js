'use strict';

import React from 'react';

require('styles/dictionaries/components/Dictionaries.css');

class DictionariesComponent extends React.Component {
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
        <button type="button" className="btn btn-primary">Add Dictionary</button>
      </div>
    );
  }
}

DictionariesComponent.displayName = 'DictionariesComponentsDictionariesComponent';

// Uncomment properties you need
// DictionariesComponent.propTypes = {};
// DictionariesComponent.defaultProps = {};

export default DictionariesComponent;
