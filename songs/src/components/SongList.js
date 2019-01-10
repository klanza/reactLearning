import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

// BY CONVENTION IT IS NAMED mapStateToProps
const mapStateToProps = state => {
  // Causes the returned value to be equal to props
  return { songs: state.songs };
};

// Due to connect having another function inside of it, takes the SongList as an argument
export default connect(mapStateToProps)(SongList);
