/**
 * Klarna wrapper for working with other klarna modules for Node.JS.
 *
 * @author Anton Netudykhata
 * Support email: anton.netudykhata@uptech.team
 * @version 1.0.0
 */

const flags = {
  live: false,
  initalized: false, // TODO complete this logic
};

const credentials = {
  uid: null,
  password: null,
};

/* eslint camelcase: 0 */
const init = (input) => {
  if (!input) {
    const error = { message: 'Missing init values' };
    throw error;
  }
  if (input.uid != null) {
    credentials.uid = input.uid;
  }
  if (input.password != null) {
    credentials.password = input.password;
  }
  if ((input.live != null) && typeof input.live === 'boolean') {
    flags.live = input.live;
  }
  if ((input.uid != null) && (input.password != null)) {
    flags.initalized = true;
  }

  return null;
};

/**
 * @method headers Headers builder
 * @returns headers object, which contain Content-Type and Authorization headers
 */
const headers = () => {
  const token = `Basic  ${Buffer.from(`${credentials.uid}:${credentials.password}`).toString('base64')}`;
  return {
    'Content-Type': 'application/json',
    Authorization: token,
  };
};

module.exports = {
  init,
  headers,
  flags,
};

