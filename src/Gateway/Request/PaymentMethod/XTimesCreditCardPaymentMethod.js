'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class XTimesCreditCardPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Oney Xtimes Payment Method Object
     *
     * @param {Object} values
     * @param {Number} values.eci Transaction Electronic Commerce Indicator. See the Transaction.ECI Enum
     * @param {String} [values.order_category_code] Category of the order. See ProductCategory Collection
     * @param {String} [values.carrier_description] Short Description of your carrier
     * @param {Object} [values.payment_product_parameters] Additional parameters
     */
    constructor(values) {
        super();

        if (Object.hasOwn(values, 'eci')) {
            this.eci = values.eci;
        } else {
            throw new InvalidArgumentException('ECI must be present');
        }

        if (Object.hasOwn(values, 'order_category_code')) {
            this.order_category_code = values.order_category_code;
        }

        if (Object.hasOwn(values, 'carrier_description')) {
            this.carrier_description = values.carrier_description;
        }

        if (Object.hasOwn(values, 'payment_product_parameters')) {
            if (typeof values.payment_product_parameters === 'object') {
                this.payment_product_parameters = JSON.stringify(values.payment_product_parameters);
            } else {
                this.payment_product_parameters = values.payment_product_parameters;
            }
        }
    }

    initValues() {
        super.initValues();

        this.eci = null;
        this.order_category_code = null;
        this.carrier_description = null;
        this.payment_product_parameters = null;
    }
}

module.exports = XTimesCreditCardPaymentMethod;
