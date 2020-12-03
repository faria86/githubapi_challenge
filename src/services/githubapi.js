import axios from 'axios';

export const API = 'https://api.github.com';

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


export async function get(url) {
  //console.log(`calling get: ${url}`);
  return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
          console.log(error);
          return { error: `Error searching from user repositories in github api!` }
      });
};