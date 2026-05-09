export default class HolbertonClass {
  /**
   * @param {number} size - 
   * @param {string} location - 
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * 
   * @returns {number}
   */
  valueOf() {
    return this._size;
  }

  /**
   * 
   * @returns {string}
   */
  toString() {
    return this._location;
  }
}
