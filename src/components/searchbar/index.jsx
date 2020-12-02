import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <div className="search">
                <input name="username"
                    type="text"
                    placeholder="type username..."
                    value={this.state.username}
                    onChange={this.handleChange}
                    required />

                <Link to={`/${this.state.username}`} className="link">search</Link>
            </div >
        )
    }
}
export default Search;