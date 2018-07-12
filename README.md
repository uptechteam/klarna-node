Klarna Node.Js
=========

# klarna-node
Node JS wrapper for Klarna payments system (Checkout, Order Management)

## Installation

  `npm install klarna-node --save`

## Usage

    const klarna = require('klarna-node').default;

    klarna.init({
        uid: process.env.KLARNA_UID,
        password: process.env.KLARNA_PASSWORD,
        live: false,
    });
  
  
  Where `KLARNA_UID` and `KLARNA_PASSWORD` are credentials from Klarna Portal => Settings => API Credentials

## Tests
  TODO
  `npm test`

## Contributing

Take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code. Create a PR to `develop` brunch of current repo.

## TODO

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
