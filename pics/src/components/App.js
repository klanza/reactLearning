import React, { Component } from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends Component {
  state = { images: [] };

  // HOW TO USE ASYNC WITH ARROW FUNCTION BELOW, NEEDED TO FIX THIS BINDING
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* When passing properties or callbacks on props WE author, can name these
            properties whatever we desire, i.e. onSubmit could be runWhenUserSubmits*/}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
