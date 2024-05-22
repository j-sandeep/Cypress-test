Feature: User can search for proerties 

@test
Scenario Outline: User can search properties to rent
    Given I have navigated to renting page
    When I search for properties in '<Postcode>' area
    Then I expect to see properties in '<Postcode>' area
    Examples:
        | Postcode | 
        | Bromley  |
        | Swanley  |  

Scenario: User can search properties to buy
    Given I have navigated to buying page
    When I search for properties in 'Orpington' area
    Then I expect to see properties in 'Orpington' area