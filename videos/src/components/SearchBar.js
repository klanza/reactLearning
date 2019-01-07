import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: 'v' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: MAKE SURE WE CALL CALLBACK FROM PARENT COMPONENT
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <field className="field">
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
            />
          </field>
        </form>
      </div>
    );
  }
}

export default SearchBar;
