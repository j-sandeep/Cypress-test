class ContactDetails {
    enterName(name: string) {
        cy.get('[data-sc-field-name="First Name"]').clear().type(name);
    }

    enterSurname(surname: string) {
        cy.get('[data-sc-field-name="Last Name"]').clear().type(surname);
    }

    enterEmail(email: string) {
        cy.get('[data-sc-field-name="Email"]').clear().type(email);
    }

    enterPhone(phone: string) {
        cy.get('[data-sc-field-name="Phone"]').clear().type(phone);
    }

    enterCity(city: string) {
        cy.get('[data-sc-field-name="City"]').clear().type(city);
    }

    enterCounty(county: string) {
        cy.get('[data-sc-field-name="State"]').clear().type(county);
    }

    selectCountry(country: string) {
        cy.get('[data-sc-field-name="Country"]').select(country);
    }

    selectReason(reason: string) {
        cy.get('[data-sc-field-name="Inquiry Type"]').select(reason);
    }

    enterPostcode(postCode: string) {
        cy.get('[data-sc-field-name="Zip"]').clear().type(postCode);
    }

    enterComment(comment: string) {
        cy.get('[data-sc-field-name="Comments"]').clear().type(comment);
    }

    clickSubmit() {
        cy.get('[value="Let\'s talk"]').click();
    }
}

const contactDetails = new ContactDetails();
export default contactDetails;