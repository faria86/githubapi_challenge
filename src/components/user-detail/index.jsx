import React, { Component } from 'react'

class UserDetail extends Component {
    render() {
        //console.log(`UserDetail: ${JSON.stringify(this.props)}`);
        var { name, picture } = this.props;
        return (
            <div className="user-detail">
                <img className="avatar" src={picture}></img>
                <span className="name">{name}</span>
            </div>
        )
    }
}

export default UserDetail;