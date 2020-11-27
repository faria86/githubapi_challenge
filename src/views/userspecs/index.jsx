import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class UserSpecs extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Im a random User</h1>
        <Link to='/'>
          <button>Back to Homepage</button>
        </Link>
      </div>
    )
  }
}

export default UserSpecs;