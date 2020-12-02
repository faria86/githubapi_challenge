import React from 'react'

import './style.css';

function UserDetail({ name, picture }) {
    return (
        <div className="user-detail">
            <img className="avatar" src={picture} alt="user-avatar" ></img>
            <span className="name">{name}</span>
        </div>
    )
}


export default UserDetail;