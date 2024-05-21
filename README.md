
# LA Tests

This project is created to show how Cypress scripts can be written with Cucumber


## What tests are written

The tests written are just for demonstration purpose. They do not test anything meaningful. There are some UI tests and a API test


### UI Tests

There are two feature files for UI tests. 
Property.feature file has scenarios that test estate agent Haart's website for renting and buying houses. One of these tests uses Scenario Outline.

Recruiter.feature file has scenarios that adds contact details and this scenario uses a data table.




### API Tests

There is only one feature. The test uses a public endpoint to query mutual fund API. 
The test asked to create and update but I could not find public APIs which appeared safe and which do not need user account where I could create and update resources.  

## Parallelisation

I could not parallelise the test run successfully. 


## Installation

Clone the project in your preferred folder. 

Navigate to that folder.

Install Cypress-test with npm

```bash
  npm install 
```
    
## How to run?

To run all tests, run command

```bash
  npx cypress run
```

To run all tests with tag @test, run command

```bash
  npx cypress run --env tags=@test
```

## Authors

- [@j-sandeep](https://github.com/j-sandeep)

