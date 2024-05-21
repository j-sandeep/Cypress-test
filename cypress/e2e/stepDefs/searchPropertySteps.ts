import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import searchPropertyPage from "../pageObjects/searchPropertyPage";
import searchPropertyResultPage from "../pageObjects/searchPropertyResultPage";

Given("I have navigated to renting page", () => {
    cy.visit("https://www.haart.co.uk/renting/");
});

Given("I have navigated to buying page", () => {
    cy.visit("https://www.haart.co.uk/buying/");
});

When("I search for properties in {string} area", (search: string) => {
    searchPropertyPage.enterSearchCriterionAndSelect(search);
    searchPropertyPage.clickSearchButton();
});

Then("I expect to see properties in {string} area", (area: string) => {
    searchPropertyResultPage.isPropertyResultsPageVisible(area);
});
