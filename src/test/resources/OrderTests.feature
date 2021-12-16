@StoreOrders
Feature: Order Tests
  This feature includes tests that test the store order RESTFul services

  Scenario: TC_01 Users are able to place orders for available pets
    Given the Swagger Petstore API is available
    When a pet is 'available' for order
    Then I am able to place an order for a pet

  Scenario: TC_02 Users are NOT able to place orders for available pets
    Given the Swagger Petstore API is available
    When a pet is 'unavailable' for order
    Then I am not able to place an order for a cat
  
  Scenario: TC_03 Correct error message is provided when searching for an order that does not exist
    Given the Swagger Petstore API is available
    When I search for an order with an id value of '23456'
    Then the requests response will contain the value 'Order not found' for the 'message' field

Scenario: TC_04 Users are able to search for orders by its id
    Given the Swagger Petstore API is available
    When an order exists for a pet
    And I search for the order by its id
    Then the complete order is returned

  Scenario: TC_05 Users are able to place orders for pets
    Given the Swagger Petstore API is available
    When I place an order for a pet with an order id of '58'
    Then the order request response has a '200' response code
    And the order requests response contains the correct json data

  Scenario Outline: TC_06 Users are able to delete order from the system
    Given the Swagger Petstore API is available
    When I place an order for a pet with an order id of '<orderID>'
    And I delete the order with an id value of '<orderID>'
    And I search for an order with an id value of '<orderID>'
    Then the requests response will contain the value 'Order not found' for the 'message' field

    Examples: 
      | orderID |
      |      58 |
