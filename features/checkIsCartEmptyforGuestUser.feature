Feature: Guest cart is empty

  Scenario: As guest user I can see empty cart
    Given As a guest user
    When I am opening a cart
    Then it should be empty
