export default class User {
  /**
   * @param {string} id
   * @param {string} username
   * @param {string} email
   * @param {string} role
   */
  constructor({ _id, username, email, role }) {
    this._id = _id;
    this._username = username;
    this._email = email;
    this._role = role;
  }

  /**
   * @return {string}
   */
  getId = () => this._id;

  /**
   * @return {string}
   */
  getUsername = () => this._username;

  /**
   * @return {string}
   */
  getEmail = () => this._email;

  /**
   * @return {string}
   */
  getRole = () => this._role;

  /**
   * @return {{_id: string, username: string, email: string, role: string}}
   */
  getData = () => ({
    _id: this._id,
    username: this._username,
    email: this._email,
    role: this._role,
  });
}
