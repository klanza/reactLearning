import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// BY CONVENTION IT IS NAMED mapStateToProps
const mapStateToProps = state => {
  // Causes the returned value to be equal to props
  return { songs: state.songs };
};

// Due to connect having another function inside of it, takes the SongList as an argument
// REQUIRED:
// Import connect, define mapStateToProps, wire connect with mapStateToProps as first
// argument, and the component as the second argument
export default connect(mapStateToProps)(SongList);
