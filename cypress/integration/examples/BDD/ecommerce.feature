Feature: End to End Ecommerce Validation

    Application Regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    And validate the total price of items in cart
    Then select the country, submit and verify success message

    @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |name |gender|
    |Toyeeb Adesoken | Male|
    Then Validate the form behaviour
    |name |gender|
    |Toyeeb Adesoken | Male|
    And Select the shop page