export class ContactDetails {
    private firstNameTxt: string = '#firstname';
    private lastNameTxt: string = '#surname';
    private ageTxt: string = '#age';
    private countryTxt: string = '#country';
    private notesTxt: string = '#notes';
    private submitBtn: string = '[type="submit"]';

    enterFirstName(firstName: string) {
        cy.get(this.firstNameTxt).clear().type(firstName);
    }

    enterLastName(surname: string) {
        cy.get(this.lastNameTxt).clear().type(surname);
    }

    enterAge(age: string) {
        cy.get(this.ageTxt).clear().type(age);
    }

    enterCountry(country: string) {
        cy.get(this.countryTxt).select(country);
    }

    enterNotes(notes: string) {
        cy.get(this.notesTxt).clear().type(notes);
    }

    clickSubmit() {
        cy.get(this.submitBtn).click();
    }
}
