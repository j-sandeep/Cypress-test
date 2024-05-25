import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { ValuesPage } from "../pageObjects/valuesPage";

const baseUrl = 'https://www.teksystems.com';

When(/^I navigated to values and culture page$/, () => {
    cy.visit(`${baseUrl}/en-gb/who-we-are/values-and-culture`);
});

Then(/^I expect to see the correct information$/, () => {
    const valuesPage = new ValuesPage(); 
    valuesPage.isTitleCorrect();
});