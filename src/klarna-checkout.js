
/**
 * Klarna checkout API V3 module for Node.JS.
 *
 * @author Anton Netudykhata
 * Support email: anton.netudykhata@uptech.team
 * @version 1.0.0
 */

const requestPromise = require('request-promise');
const { flags, headers } = require('./klarna');

// TODO handle shipping options
const configObj = {
  purchase_country: 'NO',
  purchase_currency: 'NOK',
  locale: 'en-GB',
  merchant_urls: {
    terms: null,
    checkout: null,
    confirmation: null,
    push: null,
  },
};

const klarna = {
  url: {
    test: 'https://api.playground.klarna.com/checkout/v3/orders',
    // TODO find V3 live URL https://api.klarna.com/
    live: 'https://api.klarna.com/checkout/v3/orders',
  },
};

/* eslint camelcase: 0 */
const config = ({
    purchase_country, purchase_currency, locale, terms, checkout, confirmation, push,
}) => {
  if (purchase_country != null) {
    configObj.purchase_country = purchase_country;
  }
  if (purchase_currency != null) {
    configObj.purchase_currency = purchase_currency;
  }
  if (locale != null) {
    configObj.locale = locale;
  }
  if (terms != null) {
    configObj.merchant_urls.terms = terms;
  }
  if (checkout != null) {
    configObj.merchant_urls.checkout = checkout;
  }
  if (terms != null) {
    configObj.merchant_urls.confirmation = confirmation;
  }
  if (push != null) {
    configObj.merchant_urls.push = push;
  }
};

const options = (data, id) => {
  const url = flags.live ? klarna.url.live : klarna.url.test;

  const body = data ? Object.assign(data, configObj) : null;

  return {
    url: !id ? url : `${url}/${id}`,
    method: id ? 'GET' : 'POST',
    body,
    headers: headers(),
    json: data != null,
  };
};

const createOrder = async (order) => {
  const res = await requestPromise(options(order));
  return res;
};

const getOrder = async (id) => {
  const res = await requestPromise(options(null, id));
  return res;
};

const updateOrder = () => {

};

module.exports = {
  config,
  createOrder,
  getOrder,
  updateOrder,
};

