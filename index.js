const klarna = require('./src/klarna');
const klarnaCheckout = require('./src/klarna-checkout');
const klarnaOrderManagement = require('./src/klarna-orderManagement');

module.exports = {
  klarnaCheckout,
  klarnaOrderManagement,
};
module.exports.default = klarna;
