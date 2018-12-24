import axios from './axios';
import Product from '../models/Product';

export const getProducts = async (categories) => {
  try {
    const { data } = await axios.get(
      `/v1/products${categories ? `?categories=${categories}` : ''}`
    );
    return data.map(product => new Product(product));
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const { data } = await axios.get(
      `/v1/products/${id}`
    );
    return new Product(data);
  } catch (error) {
    console.error(error);
  }
};
