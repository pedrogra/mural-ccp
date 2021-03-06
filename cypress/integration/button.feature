Feature: button
    This is a POC in order to verify the cypress-cucumber-preprocessor work

    Background:
        Given I verify Storybook is available

    Scenario: Button state - Enabled
        Then I verify if the "buttonEnabled" is visible
        And I verify if the "buttonEnabled" is not empty

    Scenario: Button state - Disabled
        Then I verify if the "buttonDisabled" is visible
        And I verify if the "buttonDisabled" is not empty

    Scenario: Reset state - Enabled
        Then I verify if the "resetEnabled" is visible
        And I verify if the "resetEnabled" is not empty

    Scenario: Reset state - Disabled
        Then I verify if the "resetDisabled" is visible
        And I verify if the "resetDisabled" is not empty

    Scenario: Submit state - Enabled
        Then I verify if the "submitEnabled" is visible
        And I verify if the "submitEnabled" is not empty

    Scenario: Submit state - Disabled
        Then I verify if the "submitDisabled" is visible
        And I verify if the "submitDisabled" is not empty

    Scenario Outline: Verify <type> option is available
        When I navigate to "button" then "basic"
        Then I verify the "<type>" is present in the type dropdown

        Examples: Button Type
            | type   |
            | button |
            | reset  |
            | submit |


