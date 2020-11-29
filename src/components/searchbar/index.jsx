import React, { Component } from "react";

import { Link } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className='search-page'>
        <input
          name='username'
          type='text'
          className='search-page-input'
          value={this.state.value}
          onChange={this.handleChange}
          required
        />

        <Link to={`/${this.state.username}`} className="link">Search</Link>
      </div>
    );
  }
}

export default SearchBar;
