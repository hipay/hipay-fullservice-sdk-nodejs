'use strict';

class PaymentMethod {
  constructor(values) {
    if (typeof values !== 'object') {
      values = {};
    }

    this.initValues();

    if (Object.prototype.hasOwnProperty.call(values, 'token')) {
      this.token = values.token;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'brand')) {
      this.brand = values.brand;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'pan')) {
      this.pan = values.pan;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'cardHolder')) {
      this.cardHolder = values.cardHolder;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'cardExpiryMonth')) {
      this.cardExpiryMonth = values.cardExpiryMonth;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'cardExpiryYear')) {
      this.cardExpiryYear = values.cardExpiryYear;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'issuer')) {
      this.issuer = values.issuer;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'country')) {
      this.country = values.country;
    }
  }

  initValues() {
    this.token = null;
    this.brand = null;
    this.pan = null;
    this.cardHolder = null;
    this.cardExpiryMonth = null;
    this.cardExpiryYear = null;
    this.issuer = null;
    this.country = null;
  }
}

module.exports = PaymentMethod;
