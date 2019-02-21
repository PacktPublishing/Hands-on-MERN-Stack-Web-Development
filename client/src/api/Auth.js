import axios from './axios';
import getAuthHeader from './getAuthHeader';

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.post(
      '/v1/auth',
      {},
      { headers: await getAuthHeader() }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
