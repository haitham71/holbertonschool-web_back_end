export default class Building {
  /**
   * @param {number} sqft -
   */
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter للمساحة
  get sqft() {
    return this._sqft;
  }
}
