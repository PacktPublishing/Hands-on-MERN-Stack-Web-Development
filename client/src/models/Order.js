import Product from './Product';

export default class Order {
  /**
   *
   * @param {string} _id
   * @param {string} customer
   * @param {number} timestamp
   * @param {Array} products
   * @param {Object} contact
   * @param {Object} shippingAddress
   */
  constructor({ _id, customer, timestamp, products, contact, shippingAddress }) {
    this._id = _id;
    this._customer = customer;
    this._timestamp = timestamp;
    this._products = products.map(product => new Product(product));
    this._contact = contact;
    this._shippingAddress = shippingAddress;
  }

  /**
   * @return {string}
   */
  getId = () => this._id;

  /**
   * @return {string}
   */
  getCustomer = () => this._customer;

  /**
   * @return {number}
   */
  getTimestamp = () => this._timestamp;

  /**
   * @return {Product[]}
   */
  getProducts = () => this._products;

  /**
   * @return {number}
   */
  getTotalPrice = () =>
    this._products.reduce((sum, product) => sum + product.getPrice(), 0);

  /**
   * @return {string}
   */
  getFormattedTotalPrice = () =>
    `$${String(this.getTotalPrice() / 100)}`;

  /**
   * @return {Object}
   */
  getContact = () =>
    this._contact;

  /**
   * @return {Object}
   */
  getShippingAddress = () =>
    this._shippingAddress;

  /**
   *
   * @return {{
   *    _id: string,
   *    customer: string,
   *    timestamp: number,
   *    products: Array,
   *    shippingAddress: Object,
   *    contact: Object
   *  }}
   */
  getData = () => ({
    _id: this._id,
    customer: this._customer,
    timestamp: this._timestamp,
    products: this._products.map(_ => _.getDate()),
    shippingAddress: this._shippingAddress,
    contact: this._contact,
  });
}
