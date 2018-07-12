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

## Environments
  Pass `live: true` to `init()` method to use live Klarna environment. Default `live` value is `false`

  Mored details about Klarna environments [Klarna Checkout documentation](https://developers.klarna.com/en/gb/kco-v3/environments/)

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

  #### createOrder(order)
      
  **Order** object example:


    {
      "order_amount": 503341,
      "order_tax_amount": 100668,
      "order_lines": [
        {
          "type": "physical",
          "reference": "19-402-SWE",
          "name": "Camera Travel Set",
          "quantity": 1,
          "quantity_unit": "pcs",
          "unit_price": 603341,
          "tax_rate": 2500,
          "total_amount": 503341,
          "total_discount_amount": 100000,
          "total_tax_amount": 100668,
          "image_url": "http://supporter.no/img/logo.png"
        }
      ],
      "shipping_options": [
        {
          "id": "free_shipping",
          "name": "Free Shipping",
          "description": "Delivers in 5-7 days",
          "price": 0,
          "tax_amount": 0,
          "tax_rate": 0,
          "preselected": true,
          "shipping_method": "Home"
        },
        {
          "id": "pick_up_store",
          "name": "Pick up at closest store",
          "price": 399,
          "tax_amount": 0,
          "tax_rate": 0,
          "preselected": false,
          "shipping_method": "PickUpStore"
        }
      ]
    }

  
  Refer [Klarna Checkout documentation](https://developers.klarna.com/api/#checkout-api-create-a-new-order/) to check the order object details

  #### getOrder(orderId)

  [The Order object](https://developers.klarna.com/api/#checkout-api-order-object/)

  #### updateOrder()

    In Progress

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
