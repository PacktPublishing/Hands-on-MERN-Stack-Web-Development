import axios from './axios';
import getAuthHeader from './getAuthHeader';
import Order from '../models/Order';

export const getOrders = async () => {
  try {
    const { data } = await axios.get(
      '/v1/orders',
      { headers: await getAuthHeader() }
    );
    return {
      success: true,
      data: data.map(order => new Order(order)),
    };
  } catch (error) {
    return {
      success: false,
      error: 'Could not load order history. Please, refresh the page.'
    };
  }
};

export const placeOrder = async (body) => {
  try {
    const { data } = await axios.post(
      '/v1/orders',
      body,
      { headers: await getAuthHeader() }
    );
    if (data && data._id) {
      return {
        success: true,
        data: new Order(data),
      };
    } else {
      return {
        success: false,
        error: 'An unknown error occurred. Please, retry again later.'
      };
    }
  } catch (error) {
    switch (error.response.status) {
      case 400:
        return {
          success: false,
          error: 'We couldn’t setup the order for you. Please check your contact and shipping details.'
        };
      case 401:
        return {
          success: false,
          error: 'Placing the order failed because your session expired. Please, refresh the page and try again.'
        };
      default:
        return {
          success: false,
          error: 'An unknown error occurred. Please, retry again later.'
        };
    }
  }
};