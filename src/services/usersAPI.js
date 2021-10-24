import axios from 'axios';

export const baseURL = 'https://jsonplaceholder.typicode.com/users';
export const avatarURL =
  'https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy';

const headers = {
  'content-type': 'application/json',
};

export const getUsers = async () => {
  const result = await axios
    .get(baseURL, { headers })
    .then((response) => response.data);

  return result;
};
