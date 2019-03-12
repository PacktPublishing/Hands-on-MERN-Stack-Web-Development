export default class Product {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {number} price
   * @param {boolean} featured
   * @param {Array<string>} images
   */
  constructor({ _id, name, price, images, featured }) {
    this._id = _id;
    this._name = name;
    this._price = price;
    this._images = images;
    this._featured = featured;
  }

  /**
   * @return {string}
   */
  getId = () => this._id;

  /**
   * @return {string}
   */
  getName = () => this._name;

  /**
   * @return {number}
   */
  getPrice = () => this._price;

  /**
   * @return {string}
   */
  getFormattedPrice = () =>
    `$${String(this._price / 100)}`;

  /**
   * @return {Array<string>}
   */
  getImages = () => this._images;

  /**
   * @return {boolean}
   */
  isFeatured = () => this._featured;

  /**
   * @return {{_id: string, name: string, price: number, formattedPrice: string, images: Array<string>}}
   */
  getData = () => ({
    _id: this._id,
    name: this._name,
    price: this._price,
    formattedPrice: this.getFormattedPrice(),
    images: this._images,
    featured: this._featured,
  });
}
