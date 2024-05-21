import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import contactDetails from "../pageObjects/contactDetails";
import enquirySubmitted from "../pageObjects/enquirySubmitted";

Given("I have navigated to contact page for Teksystems", () => {
    cy.visit("https://www.teksystems.com/en-gb/contact-us");
});

When("I enter following data for contact details", (table: DataTable) => {
    const { name, surName, email, phone, city, county, postcode, country, reason, comments } = table.rowsHash();
    contactDetails.enterName(name);
    contactDetails.enterSurname(surName);
    contactDetails.enterEmail(email);
    contactDetails.enterPhone(phone);
    contactDetails.enterCity(city);
    contactDetails.enterCounty(county);
    contactDetails.selectCountry(country);
    contactDetails.enterPostcode(postcode);
    contactDetails.selectReason(reason);
    contactDetails.enterComment(comments);
    contactDetails.clickSubmit();
});

Then("I expect to see enquiry submitted successfully", () => {
    enquirySubmitted.isEnquirySubmittedSuccessfully();
})