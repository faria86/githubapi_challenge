import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleFormSubmission = (event) => {};

  render() {
    return (
      <div>
        <p>Hello! Welcome to Github API!</p>
        <form onSubmit={this.handleFormSubmission}>
          <input
            name='name'
            type='text'
            value={this.state.name}
            placeholder='Search Username...'
            required
          />
        </form>
      </div>
    );
  }
}

export default Home;
