import React, { Component } from 'react'

import './style.css';

class Repository extends Component {
    render() {
        var { name, html_url, description } = this.props.value;
        return (
            <div className="repository">
                <a href={html_url} className="name" rel="noreferrer" target="_blank">{name}</a><br/>
                <span>{description}</span>
            </div>
        )
    }
}

export default Repository;