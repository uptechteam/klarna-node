/**
 * Klarna order management API V1 module for Node.JS.
 *
 * @author Anton Netudykhata
 * Support email: anton.netudykhata@uptech.team
 * @version 1.0.1
 */

const { flags, headers } = require('./klarna');
const requestPromise = require('request-promise');

const baseURL = {
  test: 'https://api.playground.klarna.com/ordermanagement/v1/orders',
  live: 'https://api.klarna.com/ordermanagement/v1/orders',
};

const urlBuilder = (action, orderId) => {
  let url;
  const base = flags.live ? baseURL.live : baseURL.test;
  switch (action) {
    case 'acknowledge':
      url = `${base}/${orderId}/acknowledge`;
      break;
    case 'capture':
      url = `${base}/${orderId}/captures`;
      break;
    case 'get':
      url = `${base}/${orderId}`;
      break;
    case 'updateReferences':
      url = `${base}/${orderId}/merchant-references`;
      break;
    case 'cancel':
      url = `${base}/${orderId}/cancel`;
      break;
    default:
      url = '';
  }
  return url;
};

const options = (action, data, id) => {
  const url = urlBuilder(action, id);
  // omit method from data obj if present
  let = {
      method,
      ...dataCleaned
    } = data;
  const body = dataCleaned ? Object.assign(dataCleaned) : null;
  console.log(dataCleaned)

  return {
    url,
    method: data.method ? data.method : data ? 'POST': 'GET',
    body,
    headers: headers(),
    json: data != null,
  };
};

const acknowledgeOrder = async (id) => {
  const res = await requestPromise(options('acknowledge', {}, id));
  return res;
};

/**
 * Create capture order API
 * POST method
 * @param data Object with property `captured_amount`
 */
const captureOrder = async (data, id) => {
  const res = await requestPromise(options('capture', data, id));
  return res;
};

const getOrder = async(id) => {
  const res = await requestPromise(options('get', {method:'GET'}, id));
  return res;
}

const updateReferences = async (id, reference1, reference2) => {
  const optionsObj = options('updateReferences', {
    method: 'PATCH',
    merchant_reference1: reference1,
    merchant_reference2: reference2
  }, id);
  const res = await requestPromise(optionsObj);
  return res;
}

const cancelOrder = async (id) => {
  const res = await requestPromise(options('cancel', {}, id));
  return res;
};

module.exports = {
  acknowledgeOrder,
  captureOrder,
  getOrder,
  updateReferences,
  cancelOrder
};
