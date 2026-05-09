export default class Currency {
  /**
   * @param {string} code
   * @param {string} name 
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }


  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * 
   * @returns {string}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
