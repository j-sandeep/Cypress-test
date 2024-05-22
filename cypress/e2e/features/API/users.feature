Feature: Test users feature

Scenario: Create new user
    When I 'post' following data to 'api/users' endpoint
    | first_name | Steve                |
    | last_name  | Jobs                 |
    | email      | steve.jobs@apple.com |
    Then I expect to see status code 201

Scenario: Update an existing user
    When I 'put' following data to 'api/users' endpoint
    | id         | 10                    |
    | first_name | Steve                 |
    | last_name  | Clark                 |
    | email      | steve.clark@apple.com |
    Then I expect to see status code 200    