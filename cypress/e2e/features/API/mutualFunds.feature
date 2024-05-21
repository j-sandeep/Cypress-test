Feature: Indian mutual funds

@smoke
Scenario Outline: User can query using scheme name
    When I query scheme name '<name>' to '/mf/search'
    Then I expect to get the scheme code as <code> for '<name>'
    Examples:
    | name                                       | code   |
    | Franklin India Dynamic Accrual Fund-Growth | 100499 |