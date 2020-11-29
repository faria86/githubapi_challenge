import axios from 'axios';

export async function getUser(username) {
    //console.log(`calling getUser: ${username}`);
    const searchUrl = `https://api.github.com/users/${username}`;
    return axios
        .get(searchUrl)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error);
            if (error.response) {
                if (error.response.status === 404) {
                    return { error: `User ${username} not found!` }
                }
                return { error: `Error searching from user ${username} in github api!` }
            }
        });
};


