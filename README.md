Klarna Node.Js
=========

# klarna-node
Node JS wrapper for Klarna payments system (Checkout, Order Management)

Modules:

  Module        | API version
  ------------- | -------------
  Checkout      | V3
  Order Management  | V1


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

## klarna-checkout

  ### Usage
    const { klarnaCheckout } = require('klarna-node');

  ### Configuration
    klarnaCheckout.config({
        purchase_country: 'no',
        purchase_currency: 'nok',
        locale: 'en-GB',
        terms: 'http://mywebsite.com/terms',
        checkout: 'http://mywebsite.com/checkout.php?sid={checkout.order.id}',
        confirmation: 'http://mywebsite.com/success/?sid={checkout.order.id}',
        push: 'https://api.mywebsite.com/checkout/webhook?checkout_uri={checkout.order.id}',
    });
  
  ### Methods

  #### createOrder
      
    Description 1

  #### getOrder

    Description 2

  #### updateOrder

    Description 3

## klarna-orderManagement

  ### Usage
    const { klarnaOrderManagement } = require('klarna-node');

## Tests
  TODO
  `npm test`

## Contributing

Take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code. Create a PR to `develop` brunch of current repo.

## TODO

* Checkout
  * Update Order
* Order Management
  * TODO 1
  * TODO 2
