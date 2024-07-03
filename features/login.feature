Feature: Login to the Orange HRM website

Scenario: Login with valid credentials
    Given I am on the login page
    When Enter <username> and <password>
    And Click on the Login button
    Then verifying dashboard is displaying or not

    Examples:
      | username | password |
      | admin    | admin123 |
