import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * @param {number} sqft - 
   * @param {number} floors - 
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter لعدد الطوابق
  get floors() {
    return this._floors;
  }

  // Override: إعادة تعريف دالة الإخلاء لتجنب الخطأ في الكلاس الأب
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
