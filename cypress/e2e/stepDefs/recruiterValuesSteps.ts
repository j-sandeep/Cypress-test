import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import valuesPage from "../pageObjects/valuesPage";

When("I navigated to values and culture page", () => {
    cy.visit('https://www.teksystems.com/en-gb/who-we-are/values-and-culture');
})

Then("I expect to see the correct information", () => {
    valuesPage.isTitleCorrect();
})