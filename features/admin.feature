Feature: Admin page validation

    Background:
        Given I am on the login page
        When Enter <username> and <password>
        And Click on the Login button

    Scenario: Validating Admin page
        When  click on the Admin panel button
        When fill all required input fields on the admin page
        When click on the search button
        Then the search detail should be visible in the admin table

        Examples:
            | username | password |
            | admin    | admin123 |
