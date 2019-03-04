import axios from './axios';
import getAuthHeader from './getAuthHeader';
import User from '../models/User';

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      '/v1/users',
      { headers: await getAuthHeader() }
    );
    return data.map(user => new User(user));
  } catch (error) {
    console.error(error);
  }
};