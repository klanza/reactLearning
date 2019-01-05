import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  // IF THIS IS NOT AN ARROW FUNCTION
  // Lacks the binding of this
  // IN CONSTRUCT, CORRECT WITH: this.onFormSubmit = this.onFormSubmit.bind(this)
  onFormSubmit = event => {
    event.preventDefault();
    // When making use of props in a CLASS based component, use **this.props**
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* IF ERROR WITH 'Cannot find property this of undefined
          Change to arrow function in property, add parentheses at end of function
          to invoke function when form is submitted 
          {event => this.onFormSubmit(event) */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/* MUST call this onSubmit*/}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
