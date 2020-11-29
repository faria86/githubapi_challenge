import React, { Component } from "react";

import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      result: {},
      loading: false,
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.getUser = this.getUser.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = event.target.value;
    this.setState({ username, loading: true, message: "" });
    this.getUser(this.state.username);
  }

  getUser = (username) => {
    const searchUrl = `https://api.github.com/users/${username}`;

    axios
      .get(searchUrl)
      .then((res) => {
        const resultNotFoundMsg = !res.data
          ? "Cannot find a user with provided username. Please try new one!"
          : "";
        this.setState({
          result: res.data,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          message: error.message,
        });
      });
  };

  getUserDetails = () => {
    const { result } = this.state;
    const { message } = this.state;

    var output = "";
    if (message) {
      output = message;
    } else if (result) {
      output = result.name;
    }
    return <div className='result'>{output}</div>
    
  };

  render() {
    return (
      <div className='search-page'>
        <h2>Enter a GitHub username</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name='username'
            type='text'
            className='search-page-input'
            value={this.state.value}
            onChange={this.handleChange}
            required
          />

          <input type='submit' value='Submit' />
        </form>

        {this.getUserDetails()}
      </div>
    );
  }
}

export default SearchBar;
