import React, { Component } from 'react'

import './style.css';

class UserDetail extends Component {
    render() {
        var { name, picture } = this.props;
        return (
            <div className="user-detail">
                <img className="avatar" alt="porfile-pic" src={picture}></img>
                <span className="name">{name}</span>
            </div>
        )
    }
}

export default UserDetail;