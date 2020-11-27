import axios from 'axios';

const listAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios
    .get('https://api.github.com/users')
    .then((response) => resolve(response.data))
    .catch((error) => reject(error))
  })
}

export { listAllUsers };