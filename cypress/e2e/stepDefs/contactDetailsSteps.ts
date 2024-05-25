import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { ContactDetails } from "../pageObjects/contactDetails";
import { EnquirySubmitted } from "../pageObjects/enquirySubmitted";

const testUrl = 'https://testpages.eviltester.com/styled/validation/input-validation.html';

Given(/^I have navigated to contact page$/, () => {
    cy.visit(testUrl);
});

When(/^I enter following data for contact details$/, (table: DataTable) => {
    const { firstName, lastName, age, country, notes } = table.rowsHash();
    let contactDetails = new ContactDetails();
    contactDetails.enterFirstName(firstName);
    contactDetails.enterLastName(lastName);
    contactDetails.enterAge(age);
    contactDetails.enterCountry(country);
    contactDetails.enterNotes(notes);
    contactDetails.clickSubmit();
});

Then(/^I expect to see enquiry submitted successfully$/, () => {
    const enquirySubmitted = new EnquirySubmitted();
    enquirySubmitted.isEnquirySubmittedSuccessfully();
});
