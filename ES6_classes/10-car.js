export default class Car {
  /**
   * @param {string} brand - 
   * @param {string} motor -
   * @param {string} color - 
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * 
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * إ
   * @returns {Car}
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
