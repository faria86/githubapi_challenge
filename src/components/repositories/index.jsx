
import React, { useEffect, useState } from 'react'
import Repository from '../repository';
import { get } from '../../services/githubapi';

function Repositories(props) {

    const url = props.repositories_url;
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        let mounted = true;
        if (url) {
            get(url)
                .then(data => {
                    if (mounted) {
                        setRepos(data)
                    }
                })
        }
        return () => mounted = false;
    }, [props.repositories_url]);

    var total = repos ? repos.length : 0;
    return (
        <div className="repositories">
            <h2>repositories <span className="total">{total}</span></h2>
            {repos.map((repo) => {
                return <Repository value={repo} />
            })}
        </div>
    )
}

export default Repositories;