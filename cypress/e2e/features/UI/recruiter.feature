Feature: Test recruiter page

#Scenario: User can enter contact details to get in touch successfully
#     Given I have navigated to contact page for Teksystems
#     When I enter following data for contact details
#     | firstName     | Jack                 |
#     | lastName  | Shannon-Paterson              |
#     | age    | 20  |
#     | country  | United Kingdom               |
#     | notes | These are some temporary notes               |
#    Then I expect to see enquiry submitted successfully

@test
Scenario: User can see our values
    When I navigated to values and culture page
    Then I expect to see the correct information