export default class Airport {
  /**
   * @param {string} name - 
   * @param {string} code - 
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
