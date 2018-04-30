const { equal, assert } = require('zoroaster/assert')
const context = require('../context')
const adcSh = require('../..')

const adcShTestSuite = {
    context,
    'should be a function'() {
        equal(typeof adcSh, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            adcSh()
        })
    },
}

module.exports = adcShTestSuite
