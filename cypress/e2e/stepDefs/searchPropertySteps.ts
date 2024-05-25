import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { SearchPropertyPage } from "../pageObjects/searchPropertyPage";
import { SearchPropertyResultPage } from "../pageObjects/searchPropertyResultPage";

const baseUrlHaart = 'https://www.haart.co.uk';

Given(/^I have navigated to renting page$/, () => {
    cy.visit(`${baseUrlHaart}/renting/`);
});

Given(/^I have navigated to buying page$/, () => {
    cy.visit(`${baseUrlHaart}/buying/`);
});

When(/^I search for properties in '(.+)' area$/, (search: string) => {
    const searchPropertyPage = new SearchPropertyPage();
    searchPropertyPage.enterSearchCriterionAndSelect(search);
    searchPropertyPage.clickSearchButton();
});

Then(/^I expect to see properties in '(.+)' area$/, (area: string) => {
    const searchPropertyResultPage = new SearchPropertyResultPage();
    searchPropertyResultPage.isPropertyResultsPageVisible(area);
});
