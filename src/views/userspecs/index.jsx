import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserDetail from '../../components/user-detail';
import Repositories from '../../components/repositories';
import { getUser } from '../../services/githubapi';

function UserSpecs(props) {

    const username = props.match.params.id;
    const [data, setData] = useState({});
    useEffect(() => {
        let mounted = true;
        if (username) {
            getUser(username)
                .then(data => {
                    if (mounted) {
                        setData(data)
                    }
                })
        }
        return () => mounted = false;
    }, [username]);

    var detail;
    if (!data.error) {
        detail = <div className="container">
            <div className="column left">
                <UserDetail name={data.name} picture={data.avatar_url} />
            </div>
            <div className="column right">
                <Repositories repositories_url={data.repos_url} />
            </div>
        </div>;
    }

    return (
        <div>
            <Link to='/' className="link">Back to Homepage</Link>
            <div className="notification">
                <span>{data.error}</span>
            </div>
            {detail}
        </div>
    )
}

export default UserSpecs;