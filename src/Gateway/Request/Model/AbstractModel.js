'use strict';

const AbstractRequestPart = require('../AbstractRequestPart');

class AbstractModel extends AbstractRequestPart {
    toJson() {
        return JSON.stringify(this);
    }

    cleanNullValues() {
        for (let prop in this) {
            if (Object.hasOwn(this, prop)) {
                let value = this[prop];

                if (value === null) {
                    delete this[prop];
                } else if (value instanceof AbstractModel) {
                    if (!value.cleanNullValues()) {
                        delete this[prop];
                    }
                }
            }
        }

        return Object.keys(this).length > 0;
    }
}

module.exports = AbstractModel;
