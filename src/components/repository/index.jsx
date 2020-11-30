
import React, { Component } from 'react'

import './style.css';

class Repository extends Component {
    render() {
        var { name, html_url } = this.props.value;
        return (
            <div className="repository">
                <a href={html_url} className="name" rel="noreferrer" target="_blank">{name}</a>
                {/* TODO: add more repository details */}
            </div>
        )
    }
}

export default Repository;