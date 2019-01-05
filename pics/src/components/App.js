import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization:
          'Client-ID ff2c8e8f413fbabf9d4380cfc623eca8690aef40d1dddbd3278ac4626ba19a0a'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* When passing properties or callbacks on props WE author, can name these
            properties whatever we desire, i.e. onSubmit could be runWhenUserSubmits*/}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
