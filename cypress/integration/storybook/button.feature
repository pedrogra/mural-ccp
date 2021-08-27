Feature: Button
This is a POC in order to verify the cypress-cucumber-preprocessor work


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


    