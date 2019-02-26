import axios from './axios';
import getAuthHeader from './getAuthHeader';

export const placeOrder = async (body) => {
  try {
    const { data } = await axios.post(
      '/v1/orders',
      body,
      { headers: await getAuthHeader() }
    );
    console.log('placedOrder', data);
    return data;
  } catch (error) {
    console.error(error);
  }
};