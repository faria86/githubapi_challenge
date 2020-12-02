import React, { useEffect, useState } from 'react'
import Repository from '../repository';
import { get } from '../../services/githubapi';

import './style.css';

function Repositories({ repositories_url }) {

    const [repos, setRepos] = useState([]);
    useEffect(() => {
        let mounted = true;
        if (repositories_url) {
            get(repositories_url)
                .then(data => {
                    if (mounted) {
                        setRepos(data)
                    }
                })
        }
        return () => mounted = false;
    }, [repositories_url]);

    var total = repos ? repos.length : 0;
    return (
        <div className="repositories">
            <h2>Number of repositories <span className="total">{total}</span></h2>
            {repos.map((repo, index) => {
                return <Repository key={index} value={repo} />
            })}
        </div>
    )
}

export default Repositories;