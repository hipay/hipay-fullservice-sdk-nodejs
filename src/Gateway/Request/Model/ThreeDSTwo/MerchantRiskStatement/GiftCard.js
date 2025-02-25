'use strict';
const AbstractModel = require('../../AbstractModel');

class GiftCard extends AbstractModel {
    /**
     * Creates a GiftCard Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.amount] Amount of the gift card
     * @param {Number} [values.count] Number of gift cards purchased by the client
     * @param {String} [values.currency] Currency of the gift card
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'amount')) {
            this.amount = values.amount;
        }
        if (Object.hasOwn(values, 'count')) {
            this.count = values.count;
        }
        if (Object.hasOwn(values, 'currency')) {
            this.currency = values.currency;
        }
    }

    initValues() {
        super.initValues();

        this.amount = null;
        this.count = null;
        this.currency = null;
    }
}

module.exports = GiftCard;
