$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrderTests.feature");
formatter.feature({
  "line": 2,
  "name": "Order Tests",
  "description": "This feature includes tests that test the store order RESTFul services",
  "id": "order-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 20,
  "name": "TC_04 Users are able to search for orders by its id",
  "description": "",
  "id": "order-tests;tc-04-users-are-able-to-search-for-orders-by-its-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@StoreOrders"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the Swagger Petstore API is available",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "an order exists for a pet",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I search for the order by its id",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the complete order is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonDefinitions.the_swagger_petstore_api_is_available()"
});
formatter.result({
  "duration": 1709618430,
  "status": "passed"
});
formatter.match({
  "location": "OrderEndpointStepDefinitions.an_order_exists_for_a_pet()"
});
formatter.result({
  "duration": 516602794,
  "status": "passed"
});
formatter.match({
  "location": "OrderEndpointStepDefinitions.i_search_for_the_order_by_its_id()"
});
formatter.result({
  "duration": 481545963,
  "status": "passed"
});
formatter.match({
  "location": "OrderEndpointStepDefinitions.the_complete_order_is_returned()"
});
formatter.result({
  "duration": 313714238,
  "status": "passed"
});
});