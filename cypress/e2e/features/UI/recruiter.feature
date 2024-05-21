Feature: Test recruiter page

Scenario: User can enter contact details to get in touch successfully
    Given I have navigated to contact page for Teksystems
    When I enter following data for contact details
    | name     | Jack                 |
    | surName  | Shannon              |
    | email    | jack.shan@gmail.com  |
    | phone    | 0207222623           |
    | city     | London               |
    | county   | London               |
    | postcode | W1 3PQ               |
    | country  | Angola               |
    | reason   | Other                |
    | comments | test                 |
   Then I expect to see enquiry submitted successfully

@test
Scenario: User can see our values
    When I navigated to values and culture page
    Then I expect to see the correct information