import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState here to change state
        // UNLESS initializing state, NEVER directly assign state
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
